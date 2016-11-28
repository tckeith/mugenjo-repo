package com.limitless.DAO;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.limitless.DAO.interfaces.IManageUserDAO;
import com.limitless.DAO.mappers.IManageUserMapper;
import com.limitless.models.UserModel;

@Repository
public class ManageUserDAO implements IManageUserDAO {
	
	@Autowired 
	IManageUserMapper userMap;
	
	@Override
	public UserModel requestUserInfo(String UID) {
		Map<String, Object> request = new HashMap<String, Object>();
		
		request.put("UID", UID);
		
		userMap.requestUserInfo(request);
		
		return null;
	}

}
