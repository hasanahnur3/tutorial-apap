package apap.tutorial.traveloke.service;

import apap.tutorial.traveloke.model.UserModel;

import java.util.List;

import apap.tutorial.traveloke.model.RoleModel;

public interface RoleService {
    List<RoleModel> findAll();
    String defineRole(String username);
    
}
