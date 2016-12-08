package com.limitless.DAO;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.limitless.DAO.interfaces.IManageUserDAO;
import com.limitless.DAO.mappers.IManageUserMapper;
import com.limitless.models.UserModel;
import com.limitless.util.RequestUtil;

@Repository
public class ManageUserDAO implements IManageUserDAO {
	
	@Autowired 
	IManageUserMapper userMap;
	
	@Autowired
	RestTemplate restTemplate;
	
	@Override
	public UserModel requestUserInfo(String UID) {
		Map<String, Object> request = new HashMap<String, Object>();
		
		request.put("UID", UID);
		
		return userMap.requestUserInfo(request);
	}
	
	@Override
	public UserModel validateLogin(UserModel user){
		Map<String, Object> request = new HashMap<String, Object>();
		
		request.put("email", user.getEmail());
		request.put("pwd", user.getPassword());
		
		return userMap.validateLogin(request);
	}
	
	
	private URI buildeURI(String method){
		
		HttpServletRequest request = RequestUtil.getHttpRequest();
		
		String absoluteURL = null;
		String baseURI = null;
		baseURI = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();
		absoluteURL = baseURI + method;
		
		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(absoluteURL);
		
		return builder.build().encode().toUri();
	}

}
