package apap.tutorial.traveloke.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name="hotel")
public class HotelModel implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Size(max=30)
    @Column(name="namaHotel", nullable = false)
    private String namaHotel;

    @NotNull
    @Size(max=30)
    @Column(name="alamat", nullable =  false)
    private String alamat;

    @NotNull
    @Column(name="nomorTelepon", nullable =  false)
    private Integer nomorTelepon;

    @OneToMany(mappedBy = "hotel", fetch = FetchType.LAZY, cascade = CascadeType.ALL )


    public long getId() {
        return this.id;
    }
    public void setId(long idHotel) {
        this.id = idHotel;
    }

    public String getNamaHotel() {
    	return this.namaHotel;
    }
    public void setNamaHotel(String namaHotel) {
    	this.namaHotel = namaHotel;
    }

    public String getAlamat() {
    	return this.alamat;
    }
    public void setAlamat(String alamat) {
    	this.alamat = alamat;
    }

    public Integer getNomorTelepon() {
    	return this.nomorTelepon;
    }
    public void setNomorTelepon(Integer noTelepon) {
    	this.nomorTelepon = noTelepon;
    }

    
}
