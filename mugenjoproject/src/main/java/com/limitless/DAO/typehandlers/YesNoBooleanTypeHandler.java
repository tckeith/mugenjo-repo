package com.limitless.DAO.typehandlers;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;

public class YesNoBooleanTypeHandler extends BaseTypeHandler<Boolean> {

	private static final String YES = "Y";
	private static final String NO = "N";

	@Override
	public void setNonNullParameter(PreparedStatement ps, int i,
			Boolean parameter, JdbcType jdbcType) throws SQLException {
		ps.setString(i, convert(parameter));
	}

	@Override
	public Boolean getNullableResult(ResultSet rs, String columnName)
			throws SQLException {
		return convert(rs.getString(columnName));
	}

	@Override
	public Boolean getNullableResult(ResultSet rs, int columnIndex)
			throws SQLException {
		return convert(rs.getString(columnIndex));
	}

	@Override
	public Boolean getNullableResult(CallableStatement cs, int columnIndex)
			throws SQLException {
		return convert(cs.getString(columnIndex).trim());
	}

	private String convert(Boolean b) {
		if (b == null){
			return null;
		}
		return b ? YES : NO;
	}

	private Boolean convert(String s) {
		if (s == null){
			return null;
		}
		return YES.equals(s);
	}
}