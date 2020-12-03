package apap.tutorial.traveloke.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import apap.tutorial.traveloke.model.UserModel;
import apap.tutorial.traveloke.service.UserService;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value="/addUser", method= RequestMethod.POST)
    public String addUserSubmit(@ModelAttribute UserModel user, Model model){
        if(userService.checkPassword(user.getPassword()) == true){
            userService.addUser(user);
            model.addAttribute("user", user);
            model.addAttribute("msg1", "user berhasil ditambahkan");
        }else{
            model.addAttribute("user", user);
            model.addAttribute("msg1", "password harus mengandung angka dan huruf serta memiliki minimal 8 karakter");
            return "home";
        }

        return "redirect:/";
    }

    @RequestMapping(value = "/updatePassword", method = RequestMethod.POST)
    public String changePassword(@ModelAttribute UserModel userModel, String oldPassword, String newPassword, String confirmNewPassword, Model model){
        UserModel myUser = userService.getUserByUsername(userModel.getUsername());
        System.out.println("aaaaa   " + "--------");
        System.out.println("aaaaa   " + oldPassword);
        System.out.println("aaaaa   " + newPassword);
        System.out.println("aaaaa   " + confirmNewPassword);
        if (userService.isMatch(oldPassword, myUser.getPassword())){
            if (newPassword.equals(confirmNewPassword)){
                if(userService.checkPassword(newPassword) == true){
                    myUser.setPassword(newPassword);
                    userService.addUser(myUser);
                    model.addAttribute("msg2", "password berhasil diubah");
                }else{
                    model.addAttribute("msg2", "password harus mengandung angka dan huruf serta memiliki minimal 8 karakter");
                }
            }else {
                model.addAttribute("msg2", "password tidak sama");
            }
        }else {
            model.addAttribute("msg2", "password lama salah");
        }
        // model.addAttribute("user", userModel);
        return "change-password-submit";
    }
}
