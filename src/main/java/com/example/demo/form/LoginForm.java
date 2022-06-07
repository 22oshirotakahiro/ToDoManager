package com.example.demo.form;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class LoginForm {
	
	// フィールド
	@NotBlank
	private String loginId;
	
	@NotBlank
	private String password;
	
}
