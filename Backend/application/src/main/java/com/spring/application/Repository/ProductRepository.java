package com.spring.application.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.application.Entity.*;
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}

	