import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useSelector } from "react-redux";


const ProductUploader = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState("");
    const [preview, setPreview] = useState(null);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const { token } = useSelector((state) => state.auth);
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
        if (!name || !price || !file || !description || !category || !stock) {
            setMessage("⚠️ Please fill all fields and upload an image.");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("image", file);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("stock", stock);

        setLoading(true);
        setMessage("");

        try {
            await axios.post(
                "https://edtech-server-a3tn.onrender.com/api/v1/products/addproducts",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${token}`
                    },
                }
            );
            setMessage("✅ Product uploaded successfully!");
            setName("");
            setPrice("");
            setDescription("");
            setCategory("");
            setStock("");
            setFile(null);
            setPreview(null);
        } catch (error) {
            console.error("Upload error:", error);
            setMessage("❌ Failed to upload product. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-richblack-5 to-richblue-50 p-6">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-2xl font-bold text-center text-[gray] mb-6">Add New Product</h2>

                {/* Drag & Drop Upload Box */}
                <div
                    {...getRootProps()}
                    className="border-2 border-dashed border-[black] bg-[#e1f8f6] p-6 text-center cursor-pointer rounded-lg hover:border-blue-500 transition-all"
                >
                    <input {...getInputProps()} />
                    {preview ? (
                        <img src={preview} alt="Preview" className="h-40 mx-auto rounded-md shadow-md" />
                    ) : (
                        <p className="text-gray-500 font-medium">Drag & drop an image here, or click to select</p>
                    )}
                </div>

                {/* Product Form */}
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                    <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 bg-[whitesmoke] shadow-sm shadow-[skyblue] rounded-lg" />
                    <input type="number" placeholder="Price (₹)" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full p-3 bg-[whitesmoke] shadow-sm shadow-[skyblue]  rounded-lg" />
                    <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-3 bg-[whitesmoke] shadow-sm shadow-[skyblue]  rounded-lg" />
                    <input type="number" placeholder="Stock Quantity" value={stock} onChange={(e) => setStock(e.target.value)} className="w-full p-3 bg-[whitesmoke] shadow-sm shadow-[skyblue]  rounded-lg" />
                    <textarea placeholder="Product Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-3  bg-[whitesmoke] shadow-sm shadow-[skyblue] rounded-lg" />
                    <button type="submit" className={`w-full py-3 rounded-lg text-white font-semibold transition-all ${loading ? "bg-[gray] cursor-not-allowed" : "bg-[green] hover:bg-[red]"}`} disabled={loading}>
                        {loading ? "Uploading..." : "Upload Product"}
                    </button>
                </form>

                {message && <p className="mt-4 text-center text-[gray] font-medium">{message}</p>}
            </div>
        </div>
    );
};

export default ProductUploader;
