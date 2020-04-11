package com.hassen;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class ErpGrossisteApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(ErpGrossisteApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(ErpGrossisteApplication.class);
	}

}