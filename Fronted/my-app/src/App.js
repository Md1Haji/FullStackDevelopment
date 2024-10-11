import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AccessoryForm from './components/AccessoryForm';
import ProductForm from './components/ProductForm';

const App = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products'); // Adjust the endpoint as necessary
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    const handleProductAdded = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const handleAccessoryAdded = (newAccessory) => {
        if (selectedProduct) {
            setSelectedProduct(prev => ({
                ...prev,
                accessories: [...(prev.accessories || []), newAccessory]
            }));
        }
    };

    return (
        <div>
            <h1>Product Management</h1>
            <ProductForm onProductAdded={handleProductAdded} />
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id} onClick={() => setSelectedProduct(product)}>
                        {product.productName} - {product.make}
                    </li>
                ))}
            </ul>
            {selectedProduct && (
                <div>
                    <h2>Add Accessory to {selectedProduct.productName}</h2>
                    <AccessoryForm productId={selectedProduct.id} onAccessoryAdded={handleAccessoryAdded} />
                    <h3>Accessories for {selectedProduct.productName}</h3>
                    <ul>
                        {(selectedProduct.accessories || []).map(accessory => (
                            <li key={accessory.id}>{accessory.productName}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default App;
