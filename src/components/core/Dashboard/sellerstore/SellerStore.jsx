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
        <div className="container mx-auto p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-l from-[#faf5f5] to-[#bfcdfa]">

            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-[red]">{error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className="hover:border-[3px] rounded-lg shadow-lg p-4  hover:border-[tomato] transition duration-300">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
                            <p className="text-[gray] text-sm">₹{product.price}</p>
                            <p className="text-[gray] text-sm">Stock: {product.stock}</p>
                            <p className="text-[gray] text-sm">Sold: {product.sold}</p>

                            {/* Buttons */}
                            <div className="flex flex-wrap mt-3 font-black gap-2">
                                <button
                                    onClick={() => handleEdit(product)}
                                    className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(product._id)}
                                    className="flex-1 text-white  px-4 py-2 rounded hover:bg-[tomato] text-sm"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-[gray] col-span-full">No products found.</p>
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
