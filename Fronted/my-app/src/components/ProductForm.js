import axios from 'axios';
import React, { useState } from 'react';
import '../App.css';
const ProductForm = ({ onProductAdded }) => {
    const [model, setModel] = useState('');
    const [product, setProduct] = useState(''); // Corrected variable to product
    const [make, setMake] = useState('');
    const [cost, setCost] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create the product object based on the form inputs
        const newProduct = {
            model: model,
            product: product,  // Correctly use the `product` variable
            make: make,
            cost: parseFloat(cost), // Ensure cost is passed as a number
            quantity: parseInt(quantity), // Ensure quantity is passed as a number
        };

        try {
            // Post the new product to the backend API
            const response = await axios.post('http://localhost:8080/api/products/addProducts', newProduct);
            onProductAdded(response.data);

            // Reset the form after successful submission
            setModel('');
            setProduct(''); // Reset product name field
            setMake('');
            setCost('');
            setQuantity('');
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Product</h2>
            <div>
                <label>Model:</label>
                <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Product:</label>
                <input
                    type="text"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Make:</label>
                <input
                    type="text"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Cost:</label>
                <input
                    type="number"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Quantity:</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
