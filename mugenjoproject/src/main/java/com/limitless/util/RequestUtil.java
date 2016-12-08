package com.limitless.util;

import javax.servlet.http.HttpServletRequest;

import com.limitless.httpmodel.ServletExternalContext;
import com.limitless.httpmodel.filter.HeaderInitFilter;

public class RequestUtil {
	
	public static HttpServletRequest getHttpRequest(){
		
		ServletExternalContext context = HeaderInitFilter.getServletExternalContext();
		
		return context.getHttpServletRequest();
	}

}
