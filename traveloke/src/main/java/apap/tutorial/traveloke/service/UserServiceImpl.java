// package apap.tutorial.traveloke.service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.stereotype.Service;

// import apap.tutorial.traveloke.model.UserModel;
// import apap.tutorial.traveloke.repository.UserDb;

// @Service
// public class UserServiceImpl implements UserService{
//     @Autowired
//     private UserDb userDb;

//     @Override
//     public UserModel addUser(UserModel user){
//         String pass = encrypt(user.getPassword());
//         user.setPassword(pass);
//         return userDb.save(user);
//     }

//     @Override
//     public String encrypt(String password) {
//         BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//         String hashedPassword = passwordEncoder.encode(password);
//         return hashedPassword;
//     }
// }

package apap.tutorial.traveloke.service;

import apap.tutorial.traveloke.model.UserModel;
import apap.tutorial.traveloke.repository.UserDb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserDb userDb;

    @Override
    public UserModel addUser(UserModel user) {
        String pass = encrypt(user.getPassword());
        user.setPassword(pass);
        return userDb.save(user);
    }

    @Override
    public String encrypt(String password) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(password);
        return hashedPassword;
    }

    @Override
    public UserModel getUserByUsername(String username) {
        return userDb.findByUsername(username);
    }

    @Override
    public boolean isMatch(String newPassword, String oldPassword) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.matches(newPassword, oldPassword);
    }

    @Override
    public boolean checkPassword(String password) {
        boolean atleastOneAlpha = password.matches(".*[a-zA-Z]+.*");
        boolean atleastOneNumber = password.matches(".*[0-9]+.*");
        boolean atleastEightChar = password.length() >= 8;
        return atleastOneAlpha && atleastOneNumber && atleastEightChar;
    }
}
