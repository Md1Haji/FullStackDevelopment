package com.spring.application.Service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.spring.application.Entity.Product;
import com.spring.application.Repository.ProductRepository;
import jakarta.transaction.Transactional;

@Service
public class ProductService {
    
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    @Transactional
    public Optional<Product> updateProduct(Long id, Product updatedProduct) {
        return productRepository.findById(id)
            .map(existingProduct -> {
                existingProduct.setModel(updatedProduct.getModel());
                existingProduct.setProduct(updatedProduct.getProduct());
                existingProduct.setMake(updatedProduct.getMake());
                existingProduct.setCost(updatedProduct.getCost());
                existingProduct.setQuantity(updatedProduct.getQuantity());
                return productRepository.save(existingProduct);
            });
    }

    public boolean deleteProduct(Long id) {
        return productRepository.findById(id).map(product -> {
            productRepository.delete(product);
            return true;
        }).orElse(false);
    }
}

