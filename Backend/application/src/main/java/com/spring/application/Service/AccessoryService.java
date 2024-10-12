package com.spring.application.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.application.Entity.Acessory;
import com.spring.application.Entity.Product;
import com.spring.application.Repository.AccessoryRepository;
import com.spring.application.Repository.ProductRepository;

import jakarta.transaction.Transactional;

@Service
public class AccessoryService {

	@Autowired
    private AccessoryRepository accessoryRepository;
	@Autowired
	private ProductRepository productRepository;

	public Acessory addAccessory(Acessory accessory) {
        return accessoryRepository.save(accessory);
    }

    
    

    // Find all accessories
    public List<Acessory> findAllAccessories() {
        return accessoryRepository.findAll();
    }

    // Find an accessory by ID
    public Optional<Acessory> findAccessoryById(Long id) {
        return accessoryRepository.findById(id);
    }

    // Update an accessory
    public Acessory updateAccessory(Long id, Acessory updatedAccessory) {
        return accessoryRepository.findById(id).map(accessory -> {
            accessory.setModel(updatedAccessory.getModel());
            accessory.setProduct(updatedAccessory.getProduct());
            accessory.setMake(updatedAccessory.getMake());
            accessory.setCost(updatedAccessory.getCost());
            accessory.setQuantity(updatedAccessory.getQuantity());
            accessory.setProduct(updatedAccessory.getProduct());
            return accessoryRepository.save(accessory);
        }).orElseThrow(() -> new RuntimeException("Accessory not found with id " + id));
    }

    // Delete an accessory by ID
    public void deleteAccessory(Long id) {
        accessoryRepository.deleteById(id);
    }
}
