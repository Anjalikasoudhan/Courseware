package com.courseware.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Chapter {
 @Id
 @GeneratedValue(strategy=GenerationType.AUTO)
 private int id;
 private String coursename;
 private String chapter1name;
 private String chapter1id;
 private String chapter2name;
 private String chapter3id;
 private String chapter3name;
 private String chapter4id;
 private String chapter4name;
 private String chapter5id;
 private String chapter5name;
 private String chapter6id;
 private String chapter6name;
 private String chapter7id;
 private String chapter7name;
 private String chapter8id;
 private String chapter8name;
 private String chapter9id;
 private String chapter9name;
 private String chapter10id;
 private String chapter10name;
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
 public String getChapter1name() {
	return chapter1name;
 }
 public void setChapter1name(String chapter1name) {
	this.chapter1name = chapter1name;
 }
 public String getChapter1id() {
	return chapter1id;
 }
 public void setChapter1id(String chapter1id) {
	this.chapter1id = chapter1id;
 }
 public String getChapter2name() {
	return chapter2name;
 }
 public void setChapter2name(String chapter2name) {
	this.chapter2name = chapter2name;
 }
 public String getChapter3id() {
	return chapter3id;
 }
 public void setChapter3id(String chapter3id) {
	this.chapter3id = chapter3id;
 }
 public String getChapter3name() {
	return chapter3name;
 }
 public void setChapter3name(String chapter3name) {
	this.chapter3name = chapter3name;
 }
 public String getChapter4id() {
	return chapter4id;
 }
 public void setChapter4id(String chapter4id) {
	this.chapter4id = chapter4id;
 }
 public String getChapter4name() {
	return chapter4name;
 }
 public void setChapter4name(String chapter4name) {
	this.chapter4name = chapter4name;
 }
 public String getChapter5id() {
	return chapter5id;
 }
 public void setChapter5id(String chapter5id) {
	this.chapter5id = chapter5id;
 }
 public String getChapter5name() {
	return chapter5name;
 }
 public void setChapter5name(String chapter5name) {
	this.chapter5name = chapter5name;
 }
 public String getChapter6id() {
	return chapter6id;
 }
 public void setChapter6id(String chapter6id) {
	this.chapter6id = chapter6id;
 }
 public String getChapter6name() {
	return chapter6name;
 }
 public void setChapter6name(String chapter6name) {
	this.chapter6name = chapter6name;
 }
 public String getChapter7id() {
	return chapter7id;
 }
 public void setChapter7id(String chapter7id) {
	this.chapter7id = chapter7id;
 }
 public String getChapter7name() {
	return chapter7name;
 }
 public void setChapter7name(String chapter7name) {
	this.chapter7name = chapter7name;
 }
 public String getChapter8id() {
	return chapter8id;
 }
 public void setChapter8id(String chapter8id) {
	this.chapter8id = chapter8id;
 }
 public String getChapter8name() {
	return chapter8name;
 }
 public void setChapter8name(String chapter8name) {
	this.chapter8name = chapter8name;
 }
 public String getChapter9id() {
	return chapter9id;
 }
 public void setChapter9id(String chapter9id) {
	this.chapter9id = chapter9id;
 }
 public String getChapter9name() {
	return chapter9name;
 }
 public void setChapter9name(String chapter9name) {
	this.chapter9name = chapter9name;
 }
 public String getChapter10id() {
	return chapter10id;
 }
 public void setChapter10id(String chapter10id) {
	this.chapter10id = chapter10id;
 }
 public String getChapter10name() {
	return chapter10name;
 }
 public void setChapter10name(String chapter10name) {
	this.chapter10name = chapter10name;
 }
 public Chapter(int id, String coursename, String chapter1name, String chapter1id, String chapter2name,
		String chapter3id, String chapter3name, String chapter4id, String chapter4name, String chapter5id,
		String chapter5name, String chapter6id, String chapter6name, String chapter7id, String chapter7name,
		String chapter8id, String chapter8name, String chapter9id, String chapter9name, String chapter10id,
		String chapter10name) {
	super();
	this.id = id;
	this.coursename = coursename;
	this.chapter1name = chapter1name;
	this.chapter1id = chapter1id;
	this.chapter2name = chapter2name;
	this.chapter3id = chapter3id;
	this.chapter3name = chapter3name;
	this.chapter4id = chapter4id;
	this.chapter4name = chapter4name;
	this.chapter5id = chapter5id;
	this.chapter5name = chapter5name;
	this.chapter6id = chapter6id;
	this.chapter6name = chapter6name;
	this.chapter7id = chapter7id;
	this.chapter7name = chapter7name;
	this.chapter8id = chapter8id;
	this.chapter8name = chapter8name;
	this.chapter9id = chapter9id;
	this.chapter9name = chapter9name;
	this.chapter10id = chapter10id;
	this.chapter10name = chapter10name;
 }
 public Chapter() {
	super();
	// TODO Auto-generated constructor stub
 }
 
}
