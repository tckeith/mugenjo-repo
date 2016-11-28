package com.limitless.util;

import org.apache.log4j.Logger;

import com.limitless.exceptions.MissingIdentityException;
import com.limitless.httpmodel.RequestIdentityManager;
import com.limitless.models.RequestIdentity;

public class IdentityUtil {
	
	private static Logger log = Logger.getLogger(IdentityUtil.class.getName());
	
	public static String getCurrentUser(){
		
		RequestIdentity ri = null;
		
		try{
			
			 ri = RequestIdentityManager.createRequestIdentity();
			 
			 if(ri == null)
				return new RequestIdentity("Guest").getUser();
			
		}catch(MissingIdentityException e){
			
			log.debug("Unable to identify current user. Returning Guest account");
			return new RequestIdentity(Constants.GUESTID).getUser();
		}
		
		return ri.getUser();
	}

}
