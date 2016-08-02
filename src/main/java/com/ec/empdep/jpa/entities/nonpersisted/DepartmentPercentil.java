package com.ec.empdep.jpa.entities.nonpersisted;

import java.math.BigDecimal;

public class DepartmentPercentil {
	private double avgSalary;
	private BigDecimal minSalary;
	private BigDecimal maxSalary;

	public DepartmentPercentil(double avgSalary, BigDecimal minSalary, BigDecimal maxSalary) {
		this.avgSalary = avgSalary;
		this.minSalary = minSalary;
		this.maxSalary = maxSalary;
	}

	public double getAvgSalary() {
		return avgSalary;
	}

	public BigDecimal getMinSalary() {
		return minSalary;
	}

	public BigDecimal getMaxSalary() {
		return maxSalary;
	}
}
