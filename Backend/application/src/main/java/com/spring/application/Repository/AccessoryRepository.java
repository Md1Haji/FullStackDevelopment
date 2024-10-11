package com.spring.application.Repository;
import com.spring.application.Entity.*;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AccessoryRepository extends JpaRepository<Acessory, Long>{
//	@Query("SELECT a FROM Accessory a JOIN FETCH a.product WHERE a.id = :id")
//    Optional<Acessory> findAccessoryByIdWithProduct(@Param("id") Long id);


}
