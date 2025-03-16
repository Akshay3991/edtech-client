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
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Your Purchased Products</h1>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {orders.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {orders.map((order) => (
                        <div key={order.orderId} className="border p-4 rounded-lg shadow-lg">
                            {order.product ? (
                                <>
                                    <img
                                        src={order.product.image || "/placeholder.jpg"}
                                        alt={order.product.name || "Product Image"}
                                        className="w-full h-40 object-cover rounded-md"
                                    />
                                    <h2 className="text-xl font-bold mt-2">{order.product.name}</h2>
                                    <p className="text-gray-600">₹{order.product.price}</p>
                                    <p className="text-gray-500">Category: {order.product.category}</p>
                                </>
                            ) : (
                                <p className="text-gray-500">Product details not available.</p>
                            )}

                            <p className="text-gray-500">Quantity: {order.quantity}</p>
                            <p className="text-gray-500">Order ID: {order.orderId}</p>
                            <p className="text-gray-500">Payment ID: {order.paymentId}</p>
                            <p className="text-gray-500">
                                Purchased On: {order.purchasedAt ? new Date(order.purchasedAt).toLocaleDateString() : "N/A"}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                !loading && <p className="text-center text-gray-500">No purchased products found.</p>
            )}
        </div>
    );
};

export default PurchasedProducts;
