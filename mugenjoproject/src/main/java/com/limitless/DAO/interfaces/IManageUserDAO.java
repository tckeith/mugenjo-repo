package com.limitless.DAO.interfaces;

import com.limitless.models.UserModel;

public interface IManageUserDAO {
	
	public UserModel requestUserInfo (String UID);

	public UserModel validateLogin(UserModel user);

	UserModel createUserModel(UserModel user);

}
