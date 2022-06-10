package com.example.demo.entity;

import lombok.Data;

@Data
public class Todo {

	private Integer id;
	private Integer userId;
	private String todoName;
	private String detail;
	private String taskColor;
	private String createdAt;
	private String updatedAt;
	private String deletedAt;

}
