package apap.tutorial.traveloke.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import apap.tutorial.traveloke.model.UserModel;
import apap.tutorial.traveloke.service.RoleService;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class PageController {

    @Autowired
    RoleService roleService;
    
    @RequestMapping("/")
    public String home(Model model){
        model.addAttribute("listRole", roleService.findAll());
        model.addAttribute("dummy", roleService);
        return "home";
    }

    @RequestMapping("/login")
    public String login(){
        return "login";
    }
}
