import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import UpdateProduct from "../../UpdateProducts.jsx"; // Import the UpdateProduct component

const SellerStore = () => {
    const { token } = useSelector((state) => state.auth);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetchSellerProducts();
    }, [token]);

    // Fetch Seller's Products
    const fetchSellerProducts = async () => {
        try {
            const response = await axios.get(
                "https://edtech-server-a3tn.onrender.com/api/v1/products/seller-products",
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                setError("Failed to load products");
            }
        } catch (err) {
            setError("Error fetching products");
        } finally {
            setLoading(false);
        }
    };

    // Delete Product
    const handleDelete = async (productId) => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;

        try {
            await axios.delete(
                `https://edtech-server-a3tn.onrender.com/api/v1/products/deleteproducts/${productId}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            // Remove deleted product from UI
            setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
            alert("Product deleted successfully!");
        } catch (error) {
            alert("Failed to delete product. Please try again.");
        }
    };

    // Open Update Modal
    const handleEdit = (product) => {
        setSelectedProduct(product);
    };

    // Handle Product Update Success
    const handleUpdateSuccess = () => {
        fetchSellerProducts(); // Refresh product list
        setSelectedProduct(null); // Close modal
    };

    return (
        <div className="container mx-auto m-20 bg-gradient-to-l from-[#faf5f5] to-[#bfcdfa] p-10">
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-3 gap-4">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className="hover:border-[3px] hover:border-[red] p-4 rounded-lg shadow-lg relative">
                            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                            <h2 className="text-xl font-bold mt-2">{product.name}</h2>
                            <p className="text-gray-600">₹{product.price}</p>
                            <p className="text-gray-500">Stock: {product.stock}</p>
                            <p className="text-gray-500">Sold: {product.sold}</p>

                            {/* Edit Button */}
                            <button
                                onClick={() => handleEdit(product)}
                                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                            >
                                Edit
                            </button>

                            {/* Delete Button */}
                            <button
                                onClick={() => handleDelete(product._id)}
                                className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-[red]"
                            >
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>

            {/* Update Product Modal */}
            {selectedProduct && (
                <UpdateProduct
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    onUpdateSuccess={handleUpdateSuccess}
                />
            )}
        </div>
    );
};

export default SellerStore;
