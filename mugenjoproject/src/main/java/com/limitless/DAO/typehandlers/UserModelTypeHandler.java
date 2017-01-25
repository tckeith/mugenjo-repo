package com.limitless.DAO.typehandlers;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.TypeHandler;
import org.apache.log4j.Logger;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.limitless.models.UserModel;

public class UserModelTypeHandler implements TypeHandler<UserModel>{
	
	private static Logger log = Logger.getLogger(UserModelTypeHandler.class.getName());

	@Override
	public UserModel getResult(ResultSet arg0, String arg1) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserModel getResult(ResultSet arg0, int arg1) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserModel getResult(CallableStatement arg0, int arg1) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void setParameter(PreparedStatement ps, int i, UserModel user, JdbcType jdbcType) throws SQLException {
		
		try {
			
			ps.setString(i, new ObjectMapper().writeValueAsString(user));
			
		} catch (JsonProcessingException e) {
			
			e.printStackTrace();
		}
		
	}

}
