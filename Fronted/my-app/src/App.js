import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductEditForm from './components/ProductEditForm';
import AccessoryForm from './components/AccessoryForm';
import AccessoriesPage from './components/AccessoriesPage';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/accessories">Accessories</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<ProductsPage />} />
                    <Route path="/accessories" element={<AccessoriesPage />} />
                </Routes>
            </div>
        </Router>
    );
};

const ProductsPage = () => {
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [isEditingProduct, setIsEditingProduct] = React.useState(false);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setIsEditingProduct(false);
    };

    const handleProductEditClick = (product) => {
        setSelectedProduct(product);
        setIsEditingProduct(true);
    };

    const handleProductUpdated = (updatedProduct) => {
        console.log('Product updated:', updatedProduct);
        setIsEditingProduct(false);
        setSelectedProduct(updatedProduct);
    };

    return (
        <div>
            <h1>Product Management</h1>
            <ProductForm />
            <ProductList
                onProductClick={handleProductClick}
                onProductEditClick={handleProductEditClick} // Pass this prop here
            />

            {isEditingProduct && selectedProduct && (
                <div>
                    <h2>Edit Product ID: {selectedProduct.id}</h2>
                    <ProductEditForm
                        product={selectedProduct}
                        onProductUpdated={handleProductUpdated}
                        onClose={() => setIsEditingProduct(false)}
                    />
                </div>
            )}

            {selectedProduct && !isEditingProduct && (
                <div>
                    <h2>Add Accessories to Product ID: {selectedProduct.id}</h2>
                    <AccessoryForm
                        productId={selectedProduct.id}
                        onAccessoryAdded={(newAccessory) => console.log('New accessory added:', newAccessory)}
                    />
                </div>
            )}
        </div>
    );
};

export default App;
