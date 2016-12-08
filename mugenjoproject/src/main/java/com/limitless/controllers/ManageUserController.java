package com.limitless.controllers;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.limitless.models.UserModel;
import com.limitless.services.interfaces.IManageUserService;
import com.limitless.util.Constants;

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
	
	@ResponseBody
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public final ResponseEntity<?> login(@RequestBody UserModel user,  HttpServletResponse response){
		
		UserModel validatedUser = userService.validateLogin(user);
		
		if(validatedUser != null && validatedUser.getUID() != null){
			Cookie _identity = new Cookie(Constants.REQUESTHEAD, validatedUser.getUID());
				_identity.setMaxAge(Constants.COOKIEEXPIRY);
			response.addCookie(_identity);
			return new ResponseEntity<UserModel>(validatedUser, HttpStatus.OK);
		}
		else
			return new ResponseEntity<Object>(Constants.LOGINFAILED, HttpStatus.UNAUTHORIZED);
	}

}
