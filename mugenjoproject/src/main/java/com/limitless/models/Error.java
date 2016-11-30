package com.limitless.models;

public class Error {
	
	private String message;
	private Integer code;
	
	
	public Error (String message, Integer code){
		this.message = message;
		this.code = code;
	}
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Integer getCode() {
		return code;
	}
	public void setCode(Integer code) {
		this.code = code;
	}

	
}
