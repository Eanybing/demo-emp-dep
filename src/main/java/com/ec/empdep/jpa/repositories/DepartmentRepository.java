package com.ec.empdep.jpa.repositories;

import java.util.List;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.ec.empdep.jpa.common.repositories.DepEmpBaseRepository;
import com.ec.empdep.jpa.entities.Department;
import com.ec.empdep.jpa.entities.Employer;

/**
 * @author ecartaxo
 */
//Disable exposing rep 
@RepositoryRestResource(exported=false)
public interface DepartmentRepository extends DepEmpBaseRepository<Department, Long> {
	List<Department> findByName(final String name);

	List<Department> findByManager(final Employer manager);

	List<Department> findAll();
}
