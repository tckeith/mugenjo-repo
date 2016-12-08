package com.limitless.util;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.apache.log4j.Logger;

public class SYS {
	
	
	public static String propPath;
	
	private static Logger log = Logger.getLogger(SYS.class);
	
	public static Properties PROP(){
		
		Properties p = null;
		
		try{
			log.info("fetching system property for use...");
			
			p = new Properties();
			
			InputStream is = new FileInputStream(propPath);
			p.load(is);
			
		} catch(IOException io){
			log.error("Exception loading system properties with the following path: "+ propPath+"\n"+ io.getMessage());
		}
		
		return p;
	}

	public static String getPropPath() {
		return propPath;
	}

	public static void setPropPath(String propPath) {
		SYS.propPath = propPath;
	}
	
	

}
