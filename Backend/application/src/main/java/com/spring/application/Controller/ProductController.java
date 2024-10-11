package com.spring.application.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.application.Entity.Product;
import com.spring.application.Service.ProductService;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000") // Allow CORS from the frontend
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/addProducts")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        try {
            Product savedProduct = productService.addProduct(product);
            return ResponseEntity.ok(savedProduct); // Return 200 OK with the product
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null); // Return 500 Internal Server Error if something goes wrong
        }
    }
}
