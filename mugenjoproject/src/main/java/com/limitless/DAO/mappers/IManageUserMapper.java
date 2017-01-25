package com.limitless.DAO.mappers;

import java.util.Map;

import com.limitless.models.UserModel;

public interface IManageUserMapper {

	public UserModel requestUserInfo(Map<String, Object> request);
	
	public UserModel validateLogin(Map<String, Object> request);
	
	public UserModel createUpdateUserModel(Map<String, Object> request);
}
