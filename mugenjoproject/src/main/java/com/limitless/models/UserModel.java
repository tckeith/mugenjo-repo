package com.limitless.models;

import java.sql.Date;

public class UserModel {
	
	private String UID;
	private String displyId;
	private String fname;
	private String lname;
	private String email;
	private Integer roleId;
	private String password;
	private Integer statusId;
	private Date createDate;
	private Date lastModifiedDate;
	
	
	public UserModel(){
		super();
	}
	
	public UserModel(String uid, String fname, String lname){
		this.UID = uid;
		this.fname = fname;
		this.lname = lname;
	}
	
	public String getUID() {
		return UID;
	}
	public void setUID(String uID) {
		UID = uID;
	}
	public String getDisplyId() {
		return displyId;
	}
	public void setDisplyId(String displyId) {
		this.displyId = displyId;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Integer getRoleId() {
		return roleId;
	}
	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Integer getStatusId() {
		return statusId;
	}
	public void setStatusId(Integer statusId) {
		this.statusId = statusId;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
	public Date getLastModifiedDate() {
		return lastModifiedDate;
	}
	public void setLastModifiedDate(Date lastModifiedDate) {
		this.lastModifiedDate = lastModifiedDate;
	}
	
}
