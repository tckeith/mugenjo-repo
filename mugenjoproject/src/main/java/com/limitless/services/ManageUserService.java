package com.limitless.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.limitless.DAO.interfaces.IManageUserDAO;
import com.limitless.models.UserModel;
import com.limitless.services.interfaces.IManageUserService;
import com.limitless.util.Constants;
import com.limitless.util.IdentityUtil;

@Service
public class ManageUserService implements IManageUserService {
	
	@Autowired
	IManageUserDAO userDAO;

	@Override
	public UserModel requestUserInfo() {

		String currentUser = IdentityUtil.getCurrentUser();
		
		if(currentUser.equals(Constants.GUESTID))
			return Constants.GESTTACCOUNT;
		
		return userDAO.requestUserInfo(currentUser);
		
	}
	
	@Override
	public UserModel validateLogin(UserModel user){
		
		return userDAO.validateLogin(user);
	}

}
