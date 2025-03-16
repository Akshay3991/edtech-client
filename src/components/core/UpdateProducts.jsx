import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const UpdateProduct = ({ product, onClose, onUpdateSuccess }) => {
    const { token } = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({
        name: product.name || "",
        price: product.price || "",
        category: product.category || "",
        stock: product.stock || "",
        description: product.description || "",
        image: product.image || "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [imagePreview, setImagePreview] = useState(product.image || "");

    useEffect(() => {
        setFormData({
            name: product.name || "",
            price: product.price || "",
            category: product.category || "",
            stock: product.stock || "",
            description: product.description || "",
            image: product.image || "",
        });
        setImagePreview(product.image || "");
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prevData) => ({ ...prevData, image: file }));
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("price", formData.price);
            formDataToSend.append("category", formData.category);
            formDataToSend.append("stock", formData.stock);
            formDataToSend.append("description", formData.description);
            if (formData.image instanceof File) {
                formDataToSend.append("image", formData.image);
            }

            const response = await axios.put(
                `https://edtech-server-a3tn.onrender.com/api/v1/products/updateproducts/${product._id}`,
                formDataToSend,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.data.success) {
                alert("Product updated successfully!");
                onUpdateSuccess();
                onClose();
            } else {
                setError("Failed to update product. Please try again.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }

        setLoading(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                <button onClick={onClose} className="absolute top-3 right-3 text-black text-lg">
                    ✖
                </button>
                <h2 className="text-2xl font-bold mb-4">Update Product</h2>

                {imagePreview && (
                    <img src={imagePreview} alt="Product Preview" className="w-full h-48 object-cover rounded-md mb-4" />
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        placeholder="Product Name"
                        required
                    />

                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        placeholder="Price"
                        required
                    />

                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        placeholder="Category"
                        required
                    />

                    <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        placeholder="Stock"
                        required
                    />

                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        placeholder="Description"
                        rows="3"
                        required
                    ></textarea>

                    <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded-md" />

                    <button
                        type="submit"
                        className={`w-full text-white py-2 rounded-md transition-all ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-[green] hover:bg-[#f8532a]"
                            }`}
                        disabled={loading}
                    >
                        {loading ? "Updating..." : "Update Product"}
                    </button>

                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
