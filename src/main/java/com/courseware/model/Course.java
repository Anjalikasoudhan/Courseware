package com.courseware.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Course {
   @Id
   @GeneratedValue(strategy=GenerationType.AUTO)
   private int id;
   private String coursename;
   private String courseid;
   private String enrolleddate;
   private String instructorname;
   private String instructorinstituion;
   private String enrolledcount;
   private String youtubeurl;
   private String websiteurl;
   private String coursetype;
   private String skillevel;
   private String language;
   private String descrpition;
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
   public String getCourseid() {
	return courseid;
   }
   public void setCourseid(String courseid) {
	this.courseid = courseid;
   }
   public String getEnrolleddate() {
	return enrolleddate;
   }
   public void setEnrolleddate(String enrolleddate) {
	this.enrolleddate = enrolleddate;
   }
   public String getInstructorname() {
	return instructorname;
   }
   public void setInstructorname(String instructorname) {
	this.instructorname = instructorname;
   }
   public String getInstructorinstituion() {
	return instructorinstituion;
   }
   public void setInstructorinstituion(String instructorinstituion) {
	this.instructorinstituion = instructorinstituion;
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
   public String getCoursetype() {
	return coursetype;
   }
   public void setCoursetype(String coursetype) {
	this.coursetype = coursetype;
   }
   public String getSkillevel() {
	return skillevel;
   }
   public void setSkillevel(String skillevel) {
	this.skillevel = skillevel;
   }
   public String getLanguage() {
	return language;
   }
   public void setLanguage(String language) {
	this.language = language;
   }
   public String getDescrpition() {
	return descrpition;
   }
   public void setDescrpition(String descrpition) {
	this.descrpition = descrpition;
   }
   public Course() {
	super();
	// TODO Auto-generated constructor stub
   }
   public Course(int id, String coursename, String courseid, String enrolleddate, String instructorname,
		String instructorinstituion, String enrolledcount, String youtubeurl, String websiteurl, String coursetype,
		String skillevel, String language, String descrpition) {
	super();
	this.id = id;
	this.coursename = coursename;
	this.courseid = courseid;
	this.enrolleddate = enrolleddate;
	this.instructorname = instructorname;
	this.instructorinstituion = instructorinstituion;
	this.enrolledcount = enrolledcount;
	this.youtubeurl = youtubeurl;
	this.websiteurl = websiteurl;
	this.coursetype = coursetype;
	this.skillevel = skillevel;
	this.language = language;
	this.descrpition = descrpition;
   }
   
   
}
