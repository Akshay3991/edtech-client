import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const PurchasedProducts = () => {
    const { token } = useSelector((state) => state.auth);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPurchasedProducts();
    }, [token]);

    const fetchPurchasedProducts = async () => {
        try {
            const response = await axios.get(
                "https://edtech-server-a3tn.onrender.com/api/v1/products/purchased-products",
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (response.data.success) {
                setOrders(response.data.products || []); // Ensure orders array is always valid
            } else {
                setError("Failed to load purchased products.");
            }
        } catch (err) {
            console.error("Error fetching purchased products:", err);
            setError("Error fetching purchased products.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto bg-gradient-to-r from-white to-[#A9C0D2] p-6">
            <h1 className="text-3xl font-bold mb-4 font-sans">Your Purchased Products</h1>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {orders.length > 0 ? (
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {orders.map((order) => (
                        <div key={order.orderId} className="shadow-md shadow-black hover:border-[3px] border-[black] p-4 rounded-lg ">
                            {order.product ? (
                                <>
                                    <img
                                        src={order.product.image || "/placeholder.jpg"}
                                        alt={order.product.name || "Product Image"}
                                        className="w-full h-40 object-cover rounded-md"
                                    />
                                    <h2 className="text-xl  text-[#020c02] font-black font-inter mt-2">{order.product.name}</h2>
                                    <p className="text-[gray]">₹{order.product.price}</p>
                                </>
                            ) : (
                                <p className="text-[gray]">Product details not available.</p>
                            )}

                            <p className="text-[gray]">Quantity: <span className="font-black">{order.quantity}</span></p>
                            <p className="text-[gray]">Order ID: <span className="font-black">{order.orderId}</span></p>
                            <p className="text-[gray]">Payment ID: <span className="font-black">{order.paymentId}</span></p>
                            <p className="text-[#0a0a0a] font-sans font-black">
                                Purchased On: {order.purchasedAt ? new Date(order.purchasedAt).toLocaleDateString() : "N/A"}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                !loading && <p className="text-center text-[gray]">No purchased products found.</p>
            )}
        </div>
    );
};

export default PurchasedProducts;
