package apap.tutorial.traveloke.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import apap.tutorial.traveloke.model.RoleModel;
import apap.tutorial.traveloke.model.UserModel;
import apap.tutorial.traveloke.repository.RoleDb;

@Service
public class RoleServiceImpl implements RoleService {
    @Autowired
    private RoleDb roleDb;

    @Override
    public List<RoleModel> findAll() {
        return roleDb.findAll();
    }

    


}
