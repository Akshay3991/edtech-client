import React from "react";

const ProductDetail = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 text-lg">
                    ✖
                </button>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md"
                />
                <h2 className="text-2xl font-bold mt-3">{product.name}</h2>
                <p className="text-gray-700 mt-2">Price: Rs.{product.price}</p>
                <p className="text-gray-700 mt-2">{product.description}</p>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
