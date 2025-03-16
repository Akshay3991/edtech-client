import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetail = ({ product, onClose }) => {
    const { user } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    if (!product) return null;

    const loadRazorpaySDK = async () => {
        return new Promise((resolve) => {
            if (window.Razorpay) {
                resolve(true);
                return;
            }

            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);

            document.body.appendChild(script);
        });
    };

    const handleBuyProduct = async () => {
        if (!token) {
            navigate("/login");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            // 1️⃣ **Capture Payment**
            const captureResponse = await axios.post(
                "https://edtech-server-a3tn.onrender.com/api/v1/payment/capture-product-payment",
                { products: [product._id] },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (!captureResponse.data.success) {
                setError("Payment initiation failed. Please try again.");
                setLoading(false);
                return;
            }

            const { id: order_id, amount, currency } = captureResponse.data.data;

            // 2️⃣ **Load Razorpay SDK**
            const sdkLoaded = await loadRazorpaySDK();
            if (!sdkLoaded) {
                alert("Failed to load Razorpay. Check your internet and try again.");
                setLoading(false);
                return;
            }

            // 3️⃣ **Open Razorpay Checkout**
            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY,
                amount,
                currency,
                name: "EdTech Store",
                description: `Purchase of ${product.name}`,
                order_id,
                prefill: {
                    email: user.email,
                    contact: user.phone || "",
                    method: "upi",
                },
                handler: async function (paymentData) {
                    console.log(paymentData)
                    try {
                        // 4️⃣ **Verify Payment**
                        const verifyResponse = await axios.post(
                            "https://edtech-server-a3tn.onrender.com/api/v1/payment/verify-product-payment",
                            {
                                razorpay_order_id: paymentData.razorpay_order_id,
                                razorpay_payment_id: paymentData.razorpay_payment_id,
                                razorpay_signature: paymentData.razorpay_signature,
                                products: [product._id],
                            },
                            { headers: { Authorization: `Bearer ${token}` } }
                        );

                        if (!verifyResponse.data.success) {
                            setError("Payment verification failed. Please try again.");
                            setLoading(false);
                            return;
                        }

                        // 5️⃣ **Send Payment Confirmation Email**
                        await axios.post(
                            "https://edtech-server-a3tn.onrender.com/api/v1/payment/send-product-payment-email",
                            {
                                orderId: order_id,
                                paymentId: paymentData.razorpay_payment_id,
                                amount,
                            },
                            { headers: { Authorization: `Bearer ${token}` } }
                        );

                        alert("Payment successful! A confirmation email has been sent.");
                        onClose();
                    } catch (err) {
                        setError("Payment verification error. Please try again.");
                    }
                },
                theme: { color: "#16f716" },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (err) {
            setError("Payment failed. Please try again.");
        }

        setLoading(false);
    };

    return (
        <div className="fixed inset-0 bg-[#0a0000] bg-opacity-85 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                <button onClick={onClose} className="absolute top-3 right-3 text-black text-lg">
                    ✖
                </button>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
                <h2 className="text-2xl font-bold mt-3">{product.name}</h2>
                <p className="text-[grey] mt-2">Price: ₹ {product.price}</p>
                <p className="text-[grey] mt-2">Category: {product.category}</p>
                <p className="text-[grey] mt-2">Stock: {product.stock > 0 ? product.stock : "Out of Stock"}</p>
                <p className="text-[grey] mt-2">{product.description}</p>

                <h2 className="text-2xl font-normal text-[lightblack] mt-3">
                    Sold By: {product.seller.firstName} {product.seller.lastName}
                </h2>
                <button
                    onClick={handleBuyProduct}
                    className={`mt-4 w-full text-white py-2 rounded-md transition-all ${loading ? "bg-[green] cursor-not-allowed" :
                        product.stock > 0 ? "bg-[#16f716] hover:bg-green-500" : "bg-[red] cursor-not-allowed"
                        }`}
                    disabled={loading || product.stock === 0}
                >
                    {loading ? "Processing..." : product.stock > 0 ? "Buy Now" : "Out of Stock"}
                </button>

                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
        </div>
    );
};

export default ProductDetail;
