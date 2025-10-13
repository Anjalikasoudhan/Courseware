package com.courseware.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.courseware.model.Chapter;

public interface ChapterRepository extends CrudRepository<Chapter, Integer> {
   public List<Chapter> findByCoursename(String Coursename);
}
