package apap.tutorial.traveloke.service;
import java.util.List;
import apap.tutorial.traveloke.model.KamarModel;

public interface KamarService {
    void addKamar(KamarModel kamar);
    List<KamarModel> findAllKamarByIdHotel(Long idHotel);
    KamarModel updateKamar(KamarModel kamar);
    KamarModel getKamarByNoKamar(Long noKamar);
    void deleteKamar(KamarModel kamar);
}
