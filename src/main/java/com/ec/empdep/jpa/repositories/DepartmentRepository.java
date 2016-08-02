package com.ec.empdep.jpa.repositories;

import java.math.BigDecimal;
import java.util.List;

import javax.persistence.EntityResult;
import javax.persistence.FieldResult;
import javax.persistence.SqlResultSetMapping;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.ec.empdep.jpa.common.repositories.DepEmpBaseRepository;
import com.ec.empdep.jpa.entities.Department;
import com.ec.empdep.jpa.entities.Employer;
import com.ec.empdep.jpa.entities.nonpersisted.DepartmentPercentil;

/**
 * @author ecartaxo
 */
// Disable exposing rep
@RepositoryRestResource(exported = false)
public interface DepartmentRepository extends DepEmpBaseRepository<Department, Long> {
	List<Department> findByName(final String name);

	List<Department> findByManager(final Employer manager);

	List<Department> findAll();

	@Query("select avg(t.salary) from Employer t where t.department.id = ?1")
	BigDecimal getAverageSalary(final Long deptNo);

	@Query("select new com.ec.empdep.jpa.entities.nonpersisted.DepartmentPercentil(avg(t.salary), min(t.salary), max(t.salary)) from Employer t where t.department.id = ?1")
	DepartmentPercentil getDepartmentData(final Long deptNo);
}
