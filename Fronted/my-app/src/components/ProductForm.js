import axios from 'axios';
import React, { useState } from 'react';
import '../App.css';

const ProductForm = ({ onProductAdded }) => {
    const [model, setModel] = useState('');
    const [productName, setProductName] = useState('');
    const [make, setMake] = useState('');
    const [cost, setCost] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProduct = { model, productName, make, cost, quantity };
        try {
            const response = await axios.post('http://localhost:8080/api/products/addProducts', newProduct);
            onProductAdded(response.data); // Update parent component with new product
            // Reset form fields
            setModel('');
            setProductName('');
            setMake('');
            setCost('');
            setQuantity('');
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Model" required />
            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Product Name" required />
            <input type="text" value={make} onChange={(e) => setMake(e.target.value)} placeholder="Make" required />
            <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Cost" required />
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
