package apap.tutorial.traveloke.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name="role")
public class RoleModel implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

public long getId() {
	return this.id;
}
public void setId(long id) {
	this.id = id;
}


    @NotNull
    @Size(max=50)
    @Column(name="role", nullable = false)
    private String role;

    public String getRole() {
    	return this.role;
    }
    public void setRole(String role) {
    	this.role = role;
    }


    @OneToMany(mappedBy = "role", fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private List<UserModel> userRole;

    public List<UserModel> getUserRole() {
    	return this.userRole;
    }
    public void setUserRole(List<UserModel> userRole) {
    	this.userRole = userRole;
    }


}
