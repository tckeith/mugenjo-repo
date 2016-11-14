package com.limitless.controllers;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
@RequestMapping(value = "/test")
public class InitController {
	
	private static final Logger logger = Logger.getLogger(InitController.class.getName());

	@RequestMapping(value = "/run", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<?> testing(@RequestParam("data") String data) {
		
		logger.info("Logging param data --- >" + data);

		return new ResponseEntity<String>(data, HttpStatus.OK);
	}

}
