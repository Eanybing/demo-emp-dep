package com.ec.empdep.jpa.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 
 * @author ecartaxo
 *
 */
@Entity
@Table(name = "EMPLOYER_CATEGORY")
public class EmployerCategory {
	@Id
	@Column(nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name = "name", nullable = false, unique = true)
	private String name;

	protected EmployerCategory() {

	}

	public EmployerCategory(Long id) {
		this.id = id;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
