package com.ec.empdep.jpa.common.repositories;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 
 * @author ecartaxo
 *
 * @param <T>
 * @param <ID>
 */
public interface DepEmpBaseRepository<T, ID extends Serializable> extends JpaRepository<T, Serializable> {
	
}
