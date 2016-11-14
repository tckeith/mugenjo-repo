package com.limitless.controllers;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.limitless.services.interfaces.ITestService;


@Controller
@RequestMapping(value = "/test")
public class InitController {
	
	@Autowired
	ITestService testservice;
	
	private static final Logger logger = Logger.getLogger(InitController.class.getName());

	@RequestMapping(value = "/run", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<?> testing(@RequestParam("data") String data) {
		
		logger.info("Logging param data --- >" + data);
		
		testservice.simpleSelect();

		return new ResponseEntity<String>(data, HttpStatus.OK);
	}

}
