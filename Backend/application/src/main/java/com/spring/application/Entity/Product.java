package com.spring.application.Entity;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "model", nullable = false)
    private String model;

    @Column(name = "product", nullable = false)
    private String product;

    @Column(name = "make", nullable = false)
    private String make;

    @Column(name = "cost", nullable = false)
    private Double cost;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore  // Prevents accessories from being serialized
    private List<Acessory> accessories;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public Double getCost() {
        return cost;
    }

    public void setCost(Double cost) {
        this.cost = cost;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public List<Acessory> getAccessories() {
        return accessories;
    }

    public void setAccessories(List<Acessory> accessories) {
        this.accessories = accessories;
    }
    @Override
    public String toString() {
        return "Product{" +
               "id=" + id +
               ", model='" + model + '\'' +
               ", product='" + product + '\'' +
               ", make='" + make + '\'' +
               ", cost=" + cost +
               ", quantity=" + quantity +
               '}';
    }
}
