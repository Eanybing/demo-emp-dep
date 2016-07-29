package com.ec.empdep.jpa.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Table(name = "DEPARTMENT")
@Entity
public class Department {
	@Id
	@Column(name = "id", nullable = false, updatable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "man_id")
	private Employer manager;

	@Column(name = "location", nullable = false)
	private String location;

	protected Department() {

	}

	public Department(Long id) {
		this.id = id;
	}

	public Department(String name) {
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	@Column(name = "name", nullable = false)
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Employer getManager() {
		return manager;
	}

	public void setManager(Employer manager) {
		this.manager = manager;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
}
