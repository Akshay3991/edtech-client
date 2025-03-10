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
                setProducts(response.data);
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
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-6">Marketplace</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition"
                        onClick={() => setSelectedProduct(product)}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover rounded-md"
                        />
                        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                        <p className="text-gray-600">Price: Rs{product.price}</p>
                        <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>

            {/* Show Product Details in a Modal */}
            {selectedProduct && <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
        </div>
    );
};

export default Marketplace;
