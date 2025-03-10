import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const ProductUploader = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [preview, setPreview] = useState(null);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // Handle Image Drop
    const onDrop = useCallback((acceptedFiles) => {
        const selectedFile = acceptedFiles[0];
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "image/*",
        multiple: false,
    });

    // Handle Product Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !price || !file || !description) {
            setMessage("⚠️ Please fill all fields and upload an image.");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("image", file);
        formData.append("description", description);

        setLoading(true);
        setMessage("");

        try {
            await axios.post(
                "https://edtech-server-a3tn.onrender.com/api/v1/products/addproducts",
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            setMessage("✅ Product uploaded successfully!");
            setName("");
            setPrice("");
            setDescription("")
            setFile(null);
            setPreview(null);
        } catch (error) {
            console.error("Upload error:", error);
            setMessage("❌ Failed to upload product. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Add Product</h2>

            {/* Drag & Drop Upload Box */}
            <div
                {...getRootProps()}
                className="border-2 border-dashed p-4 text-center cursor-pointer mb-4 rounded-lg hover:border-blue-500 transition-all"
            >
                <input {...getInputProps()} />
                {preview ? (
                    <img
                        src={preview}
                        alt="Preview"
                        className="h-40 mx-auto rounded-md shadow-sm"
                    />
                ) : (
                    <p className="text-gray-500">Drag & drop an image here, or click to select</p>
                )}
            </div>

            {/* Product Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                    type="number"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className={`w-full py-2 rounded-md text-white ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
                    disabled={loading}
                >
                    {loading ? "Uploading..." : "Upload Product"}
                </button>
            </form>

            {message && <p className="mt-4 text-center text-sm text-gray-700">{message}</p>}
        </div>
    );
};

export default ProductUploader;
