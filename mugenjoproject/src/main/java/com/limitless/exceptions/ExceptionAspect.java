package com.limitless.exceptions;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;

@Aspect
public class ExceptionAspect {
	
	@After("execution(* com.limitless.DAO.mappers.*.*(..))")
	public void handleDBException(JoinPoint jp){
		Object obj = jp.getArgs()[0];
		
		System.out.println("this test");
	}

}
