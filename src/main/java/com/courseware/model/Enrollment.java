package com.courseware.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Enrollment {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private int id;
  private String coursename;
  private String enrollddate;
  private String enrolledusername;
  private String enrolleduserid;
  private String enrolledusertype;
  private String instructorname;
  private String instructorinstitution;
  private String enrolledcount;
  private String youtubeurl;
  private String websiteurl;
  private String skilllevel;
  private String language;
  private String description;
  public int getId() {
	return id;
  }
  public void setId(int id) {
	this.id = id;
  }
  public String getCoursename() {
	return coursename;
  }
  public void setCoursename(String coursename) {
	this.coursename = coursename;
  }
  public String getEnrollddate() {
	return enrollddate;
  }
  public void setEnrollddate(String enrollddate) {
	this.enrollddate = enrollddate;
  }
  public String getEnrolledusername() {
	return enrolledusername;
  }
  public void setEnrolledusername(String enrolledusername) {
	this.enrolledusername = enrolledusername;
  }
  public String getEnrolleduserid() {
	return enrolleduserid;
  }
  public void setEnrolleduserid(String enrolleduserid) {
	this.enrolleduserid = enrolleduserid;
  }
  public String getEnrolledusertype() {
	return enrolledusertype;
  }
  public void setEnrolledusertype(String enrolledusertype) {
	this.enrolledusertype = enrolledusertype;
  }
  public String getInstructorname() {
	return instructorname;
  }
  public void setInstructorname(String instructorname) {
	this.instructorname = instructorname;
  }
  public String getInstructorinstitution() {
	return instructorinstitution;
  }
  public void setInstructorinstitution(String instructorinstitution) {
	this.instructorinstitution = instructorinstitution;
  }
  public String getEnrolledcount() {
	return enrolledcount;
  }
  public void setEnrolledcount(String enrolledcount) {
	this.enrolledcount = enrolledcount;
  }
  public String getYoutubeurl() {
	return youtubeurl;
  }
  public void setYoutubeurl(String youtubeurl) {
	this.youtubeurl = youtubeurl;
  }
  public String getWebsiteurl() {
	return websiteurl;
  }
  public void setWebsiteurl(String websiteurl) {
	this.websiteurl = websiteurl;
  }
  public String getSkilllevel() {
	return skilllevel;
  }
  public void setSkilllevel(String skilllevel) {
	this.skilllevel = skilllevel;
  }
  public String getLanguage() {
	return language;
  }
  public void setLanguage(String language) {
	this.language = language;
  }
  public String getDescription() {
	return description;
  }
  public void setDescription(String description) {
	this.description = description;
  }
  public Enrollment(int id, String coursename, String enrollddate, String enrolledusername, String enrolleduserid,
		String enrolledusertype, String instructorname, String instructorinstitution, String enrolledcount,
		String youtubeurl, String websiteurl, String skilllevel, String language, String description) {
	super();
	this.id = id;
	this.coursename = coursename;
	this.enrollddate = enrollddate;
	this.enrolledusername = enrolledusername;
	this.enrolleduserid = enrolleduserid;
	this.enrolledusertype = enrolledusertype;
	this.instructorname = instructorname;
	this.instructorinstitution = instructorinstitution;
	this.enrolledcount = enrolledcount;
	this.youtubeurl = youtubeurl;
	this.websiteurl = websiteurl;
	this.skilllevel = skilllevel;
	this.language = language;
	this.description = description;
  }
  public Enrollment() {
	super();
	// TODO Auto-generated constructor stub
  }
  
  
  
}
