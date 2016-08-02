package com.ec.empdep.jpa.services;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ec.empdep.jpa.entities.Department;
import com.ec.empdep.jpa.entities.Employer;
import com.ec.empdep.jpa.entities.nonpersisted.DepartmentPercentil;
import com.ec.empdep.jpa.repositories.DepartmentRepository;
import com.ec.empdep.jpa.repositories.EmployerRepository;

@RestController
@RequestMapping("/api")
public class DepEmpService {
	@Autowired
	private EmployerRepository empRep;
	@Autowired
	private DepartmentRepository depRep;

	/*
	 * Employers
	 */

	@RequestMapping(path = "employers", method = RequestMethod.GET)
	List<Employer> findAllEmployers() {
		return empRep.findAll();
	}

	@RequestMapping(path = "employers/{id}", method = RequestMethod.GET)
	Employer getEmployer(@PathVariable("id") Long id) {
		return empRep.findOne(id);
	}

	@RequestMapping(path = "employers", method = RequestMethod.POST)
	void createEmployer(@RequestBody Employer employer) {
		empRep.save(employer);
	}

	@RequestMapping(path = "employers/{id}", method = RequestMethod.DELETE)
	void deleteEmployer(@PathVariable("id") Long employer) {
		empRep.delete(employer);
	}

	/*
	 * Departments
	 */
	@RequestMapping(path = "departments", method = RequestMethod.GET)
	List<Department> findAllDepartments() {
		return depRep.findAll();
	}

	@RequestMapping(path = "departments/{id}", method = RequestMethod.GET)
	Department getDepartment(@PathVariable("id") Long id) {
		return depRep.findOne(id);
	}
	
	@RequestMapping(path = "departments/{id}/statistics", method = RequestMethod.GET)
	DepartmentPercentil getStatistics(@PathVariable("id") Long id) {
		return depRep.getDepartmentData(id);
	}
	
	@RequestMapping(path = "departments", method = RequestMethod.POST)
	void createDepartment(@RequestBody Department department) {
		depRep.save(department);
	}

	@RequestMapping(path = "departments/{id}", method = RequestMethod.DELETE)
	void deleteDepartment(@PathVariable("id") Long department) {
		depRep.delete(department);
	}

	@RequestMapping(path = "departments/{id}/employers", method = RequestMethod.GET)
	List<Employer> getAllDepartmentEmployers(@PathVariable("id") Long departmentId) {
		return empRep.getAllByDepartment(departmentId);
	}

}
