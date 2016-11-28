package com.limitless.httpmodel;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;

import com.limitless.exceptions.MissingIdentityException;
import com.limitless.httpmodel.filter.HeaderInitFilter;
import com.limitless.models.RequestIdentity;

public class RequestIdentityManager {

	private static Logger log = Logger.getLogger(RequestIdentityManager.class.getName());

	public static RequestIdentity createRequestIdentity() {
		log.debug("Processing caller's identity in NTLMIdentityCreator");

		ServletExternalContext context = HeaderInitFilter.getServletExternalContext();
		if (context == null) {
			log.info(
					"No 'ServletExternalContext' found in the 'HeaderInitFilter'. The application may not be configured with the filter");
			return null;
		}

		HttpServletRequest request = context.getHttpServletRequest();

		Cookie[] cookies = request.getCookies();

		String principal = null;
		String roles = null;

		if (cookies != null) {
			for (Cookie co : cookies) {
				if (co.getName().equals("_identity")) {
					principal = co.getValue().toUpperCase();
				}
			}
		}

		log.debug("Principal read from authentication request header is '" + principal + "'");

		RequestIdentity info = null;

		if (principal == null) {
			throw new MissingIdentityException();
		} else {
			info = new RequestIdentity();
			info.setUser(principal);
			info.setHost(request.getRemoteHost());
			info.setIpAddress(request.getRemoteAddr());

			log.debug("IdentityInfo is '" + info + "'");
		}

		return info;
	}

}
