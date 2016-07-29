package com.ec.empdep.jpa.entities;

import java.math.BigDecimal;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 
 * @author ecartaxo
 *
 */
@Entity
@Table(name = "EMPLOYER")
public class Employer {
	@Id
	@Column(nullable = false, updatable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name = "first_name", nullable = false)
	private String firstName;

	@Column(name = "last_name", nullable = false)
	private String lastName;

	@Column(name = "birth_date", nullable = false)
	@JsonFormat(pattern = "dd/MM/yyyy")
	private Date birthDate;

	@Column(name = "admission_date", nullable = false)
	@JsonFormat(pattern = "dd/MM/yyyy")
	private Date admissionDate;

	@Column(name = "email", nullable = true)
	private String email;

	@Column(name = "salary", nullable = true)
	private BigDecimal salary;

	@ManyToOne
	@JoinColumn(name = "cat_id")
	private EmployerCategory category;

	@ManyToOne
	@JoinColumn(name = "dept_no", referencedColumnName = "id")
	private Department department;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public Date getAdmissionDate() {
		return admissionDate;
	}

	public void setAdmissionDate(Date admissionDate) {
		this.admissionDate = admissionDate;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public EmployerCategory getCategory() {
		return category;
	}

	public void setCategory(EmployerCategory category) {
		this.category = category;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}
}
