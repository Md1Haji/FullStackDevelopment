import axios from 'axios';
import React, { useState } from 'react';
import '../App.css';

const AccessoryForm = ({ productId, onAccessoryAdded }) => {
    const [model, setModel] = useState('');
    const [product, setProduct] = useState('');
    const [make, setMake] = useState('');
    const [cost, setCost] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const newAccessory = {
            productId,  // This will be set from the selected product
            model,
            product,
            make,
            cost: parseFloat(cost),
            quantity: parseInt(quantity, 10),
        };
    
        try {
            const response = await axios.post('http://localhost:8080/api/accessories/addAccessory', newAccessory);
            onAccessoryAdded(response.data); // Update parent component with the new accessory
            resetForm(); // Reset form fields after submission
        } catch (error) {
            console.error("Error adding accessory:", error);
        }
    };
    

    const resetForm = () => {
        setModel('');
        setProduct('');
        setMake('');
        setCost('');
        setQuantity('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Product ID</label>
                <input
                    type="text"
                    value={productId}
                    readOnly
                />
            </div>

            <div>
                <label>Model</label>
                <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="Model"
                    required
                />
            </div>

            <div>
                <label>Product</label>
                <input
                    type="text"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    placeholder="Product"
                    required
                />
            </div>

            <div>
                <label>Make</label>
                <input
                    type="text"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    placeholder="Make"
                    required
                />
            </div>

            <div>
                <label>Cost</label>
                <input
                    type="number"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    placeholder="Cost"
                    required
                />
            </div>

            <div>
                <label>Quantity</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Quantity"
                    required
                />
            </div>

            <button type="submit">Add Accessory</button>
        </form>
    );
};

export default AccessoryForm;