package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.TodoDao;
import com.example.demo.entity.Todo;

@RestController
public class TodoController {

	@Autowired
	TodoDao todoDao;
	
	@GetMapping("/getGreen")
	public List<Todo> getGreen() {
		return todoDao.find(1, "green");
	}

}
