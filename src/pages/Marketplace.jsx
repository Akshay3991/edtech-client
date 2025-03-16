import { useState, useEffect } from "react";
import axios from "axios";
import ProductDetail from "./ProductDetail.jsx";

const Marketplace = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://edtech-server-a3tn.onrender.com/api/v1/products/getproducts");
                setProducts(response.data.products);
                // console.log(response.data)
            } catch (err) {
                setError(err.response?.data?.message || "Failed to load products.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p className="text-center text-gray-500">Loading products...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="container mx-auto m-20 bg-gradient-to-l from-[#faf5f5] to-[#fefdfd] p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-[wheat] shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-2xl hover:shadow-black transition"
                        onClick={() => setSelectedProduct(product)}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover rounded-md"
                        />
                        <h3 className="text-lg font-black text-[#130208] mt-2">{product.name}</h3>
                        <p className="text-[gray] font-bold">₹ {product.price}</p>
                        <p className={`text-sm font-semibold ${product.stock > 0 ? "none" : "text-[red]"}`}>
                            {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
                        </p>
                        {/* <button
                            className={`mt-2 w-full text-white py-2 rounded-md transition ${product.stock > 0 ? "bg-[darkgreen] hover:bg-green-700" : "bg-[red] cursor-not-allowed"}`}
                            disabled={product.stock === 0}
                        >
                            {product.stock > 0 ? "Buy Now" : "Sold Out"}
                        </button> */}
                    </div>
                ))}
            </div>

            {/* Show Product Details in a Modal */}
            {selectedProduct && <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
        </div>
    );
};

export default Marketplace;
