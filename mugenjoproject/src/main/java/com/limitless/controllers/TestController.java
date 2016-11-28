package com.limitless.controllers;

import java.util.List;

import javax.ws.rs.QueryParam;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.limitless.services.interfaces.ITestService;
import com.limitless.util.IdentityUtil;


@Controller
@RequestMapping(value = "/test")
public class TestController {
	
	@Autowired
	ITestService testservice;
	
	private static final Logger logger = Logger.getLogger(TestController.class.getName());

	@RequestMapping(value = "/run", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<?> testing(@RequestParam("callback") String data) {
		
		logger.info("Logging param data --- >" + data);
		
		testservice.simpleSelect();

		return new ResponseEntity<String>(data, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/user", method = RequestMethod.GET)
	@ResponseBody
	public Object getUser( @QueryParam(value = "callback") String callback)   {
		if(callback != null && callback.length()>0){
			return new JSONPObject(callback, IdentityUtil.getCurrentUser());
		}else{
			return "fail";
		 }
	}

}
