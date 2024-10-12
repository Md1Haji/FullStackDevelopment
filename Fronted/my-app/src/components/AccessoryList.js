import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css'

const AccessoryList = ({ onAccessoryEditClick }) => {
    const [accessories, setAccessories] = useState([]);

    useEffect(() => {
        const fetchAccessories = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/accessories/all'); // API to get all accessories
                setAccessories(response.data); // Set the accessories in the state
            } catch (error) {
                console.error("Error fetching accessories:", error);
            }
        };
        fetchAccessories();
    }, []);

    return (
        <div>
            <h2>Accessories</h2>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Model</th>
                        <th>Product</th>
                        <th>Make</th>
                        <th>Cost</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {accessories.map(accessory => (
                        <tr key={accessory.id}>
                            <td>{accessory.id}</td>
                            <td>{accessory.model}</td>
                            <td>{accessory.product}</td>
                            <td>{accessory.make}</td>
                            <td>{accessory.cost}</td>
                            <td>{accessory.quantity}</td>
                            <td>
                                <button onClick={() => onAccessoryEditClick(accessory)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AccessoryList;
