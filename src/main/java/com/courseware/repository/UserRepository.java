package com.courseware.repository;

import org.springframework.data.repository.CrudRepository;

import com.courseware.model.User;

public interface UserRepository extends CrudRepository<User, String> {

	
	public User findByEmail(String email);
	
	public User findByUsername(String username);
	
	public User findByEmailAndPassword(String email,String password);
}
