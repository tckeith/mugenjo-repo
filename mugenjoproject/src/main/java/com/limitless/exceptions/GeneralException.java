package com.limitless.exceptions;

public class GeneralException extends RuntimeException{
	
	public GeneralException(String message, Throwable ex){
		super(message, ex);
	}
	
	public GeneralException(String message){
		super(message);
	}
	
	public GeneralException(Throwable ex){
			super(ex);
	}
	
	public GeneralException(){
		super();	
	}

}
