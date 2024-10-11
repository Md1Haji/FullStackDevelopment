import axios from 'axios';
import React, { useState } from 'react';
import '../App.css'; // Import the CSS file

const AccessoryForm = ({ productId, onAccessoryAdded }) => {
    const [model, setModel] = useState('');
    const [productName, setProductName] = useState('');
    const [make, setMake] = useState('');
    const [cost, setCost] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAccessory = { model, productName, make, cost, quantity, product_id: productId };

        try {
            const response = await axios.post('/api/accessories/addAccessory', newAccessory);
            onAccessoryAdded(response.data); // Update parent component with new accessory
            // Reset form fields
            setModel('');
            setProductName('');
            setMake('');
            setCost('');
            setQuantity('');
        } catch (error) {
            console.error("Error adding accessory:", error);
        }
    };

    return (
        <form className="accessory-form" onSubmit={handleSubmit}>
            <h3>Add Accessory</h3>
            <input type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Model" required />
            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Accessory Name" required />
            <input type="text" value={make} onChange={(e) => setMake(e.target.value)} placeholder="Make" required />
            <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Cost" required />
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
            <button type="submit">Add Accessory</button>
        </form>
    );
};

export default AccessoryForm;
