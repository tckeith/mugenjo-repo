package com.limitless.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.limitless.DAO.mappers.ITestMapper;
import com.limitless.services.interfaces.ITestService;

@Service
public class TestService implements ITestService{
	
	@Autowired
	ITestMapper testDAO;

	@Override
	public void simpleSelect() {
		testDAO.simpleSelect();
		
	}
	

}
