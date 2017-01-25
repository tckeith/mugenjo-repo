package com.limitless.util;

import org.springframework.beans.factory.annotation.Value;

import com.limitless.models.Error;
import com.limitless.models.UserModel;

public class Constants {
	
	public static final String GUESTID = "33e9232989576b5cfaa06654217d7a1a";
	
	public static final UserModel GUESTTACCOUNT = new UserModel(GUESTID, "Guest", "User");
	
	public static final int COOKIEEXPIRY = 86400;
	
	public static final Error LOGINFAILED =  new Error("The email/password combination is invalid", 1001);
	
	public static final Error NOUSER = new Error("User not found", 1001);
	
	public static final String REQUESTHEAD= new String (SYS.PROP().getProperty("limitless.identity.header"));
	
}
