package com.ec.empdep.jpa.repositories;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.ec.empdep.jpa.common.repositories.DepEmpBaseRepository;
import com.ec.empdep.jpa.entities.EmployerCategory;

//Disable exposing rep
@RepositoryRestResource(exported = false)
public interface EmployerCategoryRepository extends DepEmpBaseRepository<EmployerCategory, Long> {

}
