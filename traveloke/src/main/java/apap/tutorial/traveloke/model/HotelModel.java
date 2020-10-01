package apap.tutorial.traveloke.model;

public class HotelModel {
    private String idHotel;
    private String namaHotel;
    private String alamat;
    private String noTelepon;

    public HotelModel(String idHotel, String namaHotel, String alamat, String noTelepon){
        this.idHotel = idHotel;
        this.namaHotel = namaHotel;
        this.alamat = alamat;
        this.noTelepon = noTelepon;;
    }

    public String getIdHotel() {
        return this.idHotel;
    }
    public void setIdHotel(String idHotel) {
        this.idHotel = idHotel;
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

    public String getNoTelepon() {
    	return this.noTelepon;
    }
    public void setNoTelepon(String noTelepon) {
    	this.noTelepon = noTelepon;
    }

    
}
