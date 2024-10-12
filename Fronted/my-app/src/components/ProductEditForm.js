import React, { useState } from 'react';
import axios from 'axios';

const ProductEditForm = ({ product, onProductUpdated, onClose }) => {
    const [productData, setProductData] = useState({ ...product });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/api/products/${product.id}`, productData);
            onProductUpdated(response.data);  // Call the callback to inform parent component
            if (onClose) onClose();  // If onClose function exists, call it to close the form
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div>
            <h3>Edit Product</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name:</label>
                    <input
                        type="text"
                        name="product"
                        value={productData.product}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Make:</label>
                    <input
                        type="text"
                        name="make"
                        value={productData.make}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Model:</label>
                    <input
                        type="text"
                        name="model"
                        value={productData.model}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Cost:</label>
                    <input
                        type="number"
                        name="cost"
                        value={productData.cost}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Update Product</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default ProductEditForm;
