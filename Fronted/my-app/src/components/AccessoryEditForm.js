import React, { useState } from 'react';
import axios from 'axios';

const AccessoryEditForm = ({ accessory, onClose, onAccessoryUpdated }) => {
    const [formData, setFormData] = useState({
        model: accessory.model,
        product: accessory.product,
        make: accessory.make,
        cost: accessory.cost,
        quantity: accessory.quantity
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        if (!formData.model || !formData.product || !formData.make || !formData.cost || !formData.quantity) {
            setError('All fields are required');
            return false;
        }
        if (formData.cost < 0 || formData.quantity < 0) {
            setError('Cost and quantity must be non-negative');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            const response = await axios.put(`http://localhost:8080/api/accessories/update/${accessory.id}`, formData);
            onAccessoryUpdated(response.data); // Notify parent component of the update
            onClose(); // Close the form after successful update
        } catch (error) {
            console.error("Error updating accessory:", error);
            setError(error.response?.data?.message || 'An error occurred while updating the accessory');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <h3>Edit Accessory ID: {accessory.id}</h3>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Model: </label>
                    <input 
                        type="text" 
                        name="model" 
                        value={formData.model} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label>Product: </label>
                    <input 
                        type="text" 
                        name="product" 
                        value={formData.product} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label>Make: </label>
                    <input 
                        type="text" 
                        name="make" 
                        value={formData.make} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label>Cost: </label>
                    <input 
                        type="number" 
                        name="cost" 
                        value={formData.cost} 
                        onChange={handleChange} 
                        min="0"
                        step="0.01"
                        required
                    />
                </div>
                <div>
                    <label>Quantity: </label>
                    <input 
                        type="number" 
                        name="quantity" 
                        value={formData.quantity} 
                        onChange={handleChange} 
                        min="0"
                        required
                    />
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Updating...' : 'Update Accessory'}
                </button>
                <button type="button" onClick={onClose} disabled={isSubmitting}>Cancel</button>
            </form>
        </div>
    );
};

export default AccessoryEditForm;