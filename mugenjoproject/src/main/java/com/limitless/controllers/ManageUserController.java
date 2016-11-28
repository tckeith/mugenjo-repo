package com.limitless.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.limitless.models.UserModel;
import com.limitless.services.interfaces.IManageUserService;

@Controller
@RequestMapping(value = "/user")
public class ManageUserController {
	
	@Autowired 
	IManageUserService userService;
	
	@RequestMapping(value = "/requestUserInfo", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<?> requestUserInfo() {
		
		
		UserModel user = userService.requestUserInfo();
		
		
		return new ResponseEntity<UserModel>(user, HttpStatus.OK);
	}

}
