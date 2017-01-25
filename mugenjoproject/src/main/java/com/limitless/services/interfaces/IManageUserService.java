package com.limitless.services.interfaces;

import com.limitless.models.UserModel;

public interface IManageUserService {

	public UserModel requestUserInfo();

	UserModel validateLogin(UserModel user);

	UserModel createUserModel(UserModel user);
	
}
