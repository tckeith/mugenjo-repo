package com.limitless.DAO.mappers;

import java.util.Map;

import com.limitless.models.UserModel;

public interface IManageUserMapper {

	public UserModel requestUserInfo(Map<String, Object> request);
}
