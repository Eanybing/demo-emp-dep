package com.ec.empdep.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * 
 * @author ecartaxo
 *
 */
@Configuration
@EnableJpaRepositories(basePackages = { "com.ec.empdep.jpa.repositories" })
public class EmpDepConfig {

}
