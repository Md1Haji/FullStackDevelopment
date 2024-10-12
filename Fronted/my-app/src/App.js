// src/App.js
import React, { useState } from 'react';
import AccessoryForm from './components/AccessoryForm'; // Assuming this component exists
import ProductForm from './components/ProductForm'; // Assuming this component exists
import ProductList from './components/ProductList'; // Import the ProductList component

const App = () => {
    const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product

    // Callback when a product is clicked
    const handleProductClick = (product) => {
        setSelectedProduct(product); // Store selected product
    };

    // Handle accessory addition to a selected product
    const handleAccessoryAdded = (newAccessory) => {
        // Handle the new accessory added, e.g., updating the UI or state
        console.log('New accessory added:', newAccessory);
    };

    return (
        <div>
            <h1>Product Management</h1>

            {/* Product Form to add a new product */}
            <ProductForm />

            {/* Product List - Pass click handler to show details on selection */}
            <ProductList onProductClick={handleProductClick} />

            {/* If a product is selected, show its accessory form */}
            {selectedProduct && (
                <div>
                    <h2>Add Accessories to Product ID: {selectedProduct.id}</h2>
                    {/* Pass the selected product ID to AccessoryForm */}
                    <AccessoryForm
                        productId={selectedProduct.id}
                        onAccessoryAdded={handleAccessoryAdded}
                    />
                </div>
            )}
        </div>
    );
};

export default App;
