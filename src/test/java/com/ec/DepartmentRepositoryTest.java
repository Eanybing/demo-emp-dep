package com.ec;

import static org.junit.Assert.assertEquals;

import javax.sql.DataSource;

import org.hibernate.SessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.jdbc.JdbcTestUtils;
import org.springframework.transaction.annotation.Transactional;

import com.ec.empdep.jpa.entities.Department;
import com.ec.empdep.jpa.repositories.DepartmentRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration
@Transactional
public class DepartmentRepositoryTest {
	@Autowired
	private ApplicationContext applicationContext;

	@Autowired
	private DepartmentRepository repository;

	@Autowired
	private SessionFactory sessionFactory;

	JdbcTemplate jdbcTemplate;

	@Autowired
	public void setDataSource(DataSource ds) {
		this.jdbcTemplate = new JdbcTemplate(ds);
	}

	@Test
	public void createDepartment() {
		final int initialRowCount = countRows("department");

		Department dep = new Department("TEST-DEPARTMENT");
		repository.save(dep);

		int endingRowCount = countRows("department");
		// Manual flush is required to avoid false positive in test
		sessionFactory.getCurrentSession().flush();

		assertEquals("Expected of rows in department table", initialRowCount, countRows("department"));
	}

	protected int countRows(String tableName) {
		return JdbcTestUtils.countRowsInTable(jdbcTemplate, tableName);
	}
}
