package apap.tutorial.traveloke.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name="review")
public class ReviewModel implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Size(max=10)
    @Column(name="namaReviewer", nullable = false)
    private String namaReviewer;

    @NotNull
    @Size(max=50)
    @Column(name="isiReview", nullable = false)
    private String isiReview;

    @NotNull
    @Size(max=50)
    @Column(name="saran", nullable = false)
    private String saran;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "noKamar", referencedColumnName = "noKamar", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private KamarModel kamar;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // public String getNamaKamar() {
    //     return namaKamar;
    // }

    // public void setNamaKamar(String namaKamar) {
    //     this.namaKamar = namaKamar;
    // }

    // public Integer getTipe() {
    //     return tipe;
    // }

    // public void setTipe(Integer tipe) {
    //     this.tipe = tipe;
    // }

    // public Integer getKapasitasKamar() {
    //     return kapasitasKamar;
    // }

    // public void setKapasitasKamar(Integer kapasitasKamar) {
    //     this.kapasitasKamar = kapasitasKamar;
    // }

    // public HotelModel getHotel() {
    //     return hotel;
    // }

    // public void setHotel(HotelModel hotel) {
    //     this.hotel = hotel;
    // }

}
