// src/components/ProductList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductList = ({ onProductClick }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/products/all'); // Adjust API if needed
                const normalizedProducts = response.data.map(product => ({
                    ...product,
                    productName: product.product.charAt(0).toUpperCase() + product.product.slice(1).toLowerCase(),
                    make: product.make.charAt(0).toUpperCase() + product.make.slice(1).toLowerCase()
                }));
                setProducts(normalizedProducts); // Set the products in the state
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    // Handler for opening the accessory form for a specific product
    const handleProductClick = (product) => {
        onProductClick(product); // Pass the selected product to the parent
    };

    return (
        <div>
            <h2>Products</h2>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Cost</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.productName}</td>
                            <td>{product.make}</td>
                            <td>{product.model}</td>
                            <td>{product.cost}</td>
                            <td>
                                {/* Click to open the accessory form */}
                                <button onClick={() => handleProductClick(product)}>Add Accessories</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
