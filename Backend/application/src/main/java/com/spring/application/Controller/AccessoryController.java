package com.spring.application.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.application.Entity.Acessory;
import com.spring.application.Service.AccessoryService;
import com.spring.application.Service.ProductService;

@RestController
@RequestMapping("/api/accessories")
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from React app
public class AccessoryController {

    @Autowired
    private AccessoryService accessoryService;
    
    @Autowired
    private ProductService productService;
    @PostMapping("/addAccessory")
    public ResponseEntity<Acessory> addAccessory(@RequestBody Acessory accessory) {
        Acessory savedAccessory = accessoryService.addAccessory(accessory);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedAccessory);
    }


    // Get all accessories
    @GetMapping("/all")
    public ResponseEntity<List<Acessory>> getAllAccessories() {
        List<Acessory> accessories = accessoryService.findAllAccessories();
        return ResponseEntity.ok(accessories);
    }

    // Get accessory by ID
    @GetMapping("/{id}")
    public ResponseEntity<Acessory> getAccessoryById(@PathVariable Long id) {
        Optional<Acessory> accessory = accessoryService.findAccessoryById(id);
        return accessory.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }



    // Update an accessory
    @PutMapping("/update/{id}")
    public ResponseEntity<Acessory> updateAccessory(@PathVariable Long id, @RequestBody Acessory updatedAccessory) {
        Acessory accessory = accessoryService.updateAccessory(id, updatedAccessory);
        return ResponseEntity.ok(accessory);
    }

    // Delete an accessory
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteAccessory(@PathVariable Long id) {
        accessoryService.deleteAccessory(id);
        return ResponseEntity.noContent().build();
    }
}