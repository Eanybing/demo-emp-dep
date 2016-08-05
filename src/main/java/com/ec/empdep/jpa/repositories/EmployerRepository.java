package com.ec.empdep.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.ec.empdep.jpa.common.repositories.DepEmpBaseRepository;
import com.ec.empdep.jpa.entities.Department;
import com.ec.empdep.jpa.entities.Employer;
import com.ec.empdep.jpa.entities.EmployerCategory;

/**
 * 
 * @author ecartaxo
 *
 */
// Disable exposing rep
@RepositoryRestResource(exported = false)
public interface EmployerRepository extends DepEmpBaseRepository<Employer, Long> {
	Page<Employer> findByFirstName(final String firstName, Pageable pageRequest);

	List<Employer> findByDepartment(final Department department);

	@Query(value = "select t from Employer t where t.department.id = :deptNo")
	List<Employer> getAllByDepartment(@Param("deptNo") final Long deptNo);
	
	@Query(value = "select t from Employer t where t.category.id = :catId")
	List<Employer> getAllByCategory(@Param("catId") final Long catId);

	List<Employer> findByCategory(final EmployerCategory category);

}
