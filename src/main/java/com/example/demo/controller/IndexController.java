package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.form.LoginForm;

@Controller
public class IndexController {
	
	@ModelAttribute
	LoginForm indexForm() {
		return new LoginForm();
	}
	
	@RequestMapping(value={"/", "/index"})
	public String index(Model model) {
		
		
		return "index";
	}
	
	@RequestMapping(value="/taskList")
	public String login(@ModelAttribute() LoginForm loginForm, Model model) {
		
		
		return "taskList";
	}
}
