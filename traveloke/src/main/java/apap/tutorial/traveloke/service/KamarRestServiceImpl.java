package apap.tutorial.traveloke.service;

import apap.tutorial.traveloke.model.KamarModel;
import apap.tutorial.traveloke.repository.KamarDb;
import apap.tutorial.traveloke.rest.HotelDetail;
import apap.tutorial.traveloke.rest.Setting;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;

import javax.transaction.Transactional;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import reactor.core.publisher.Mono;

@Service
@Transactional
public class KamarRestServiceImpl implements KamarRestService {
    // private final WebClient webClient;

    @Autowired
    private KamarDb kamarDb;

    // public HotelRestServiceImpl(WebClient.Builder webClientBuilder) {
    //     this.webClient = webClientBuilder.baseUrl(Setting.hotelUrl).build();
    // }

    // public WebClient getWebClient() {
    //     return webClient;
    // }

    @Override
    public KamarModel createKamar(KamarModel kamar) {
        return kamarDb.save(kamar);
    }

    @Override
    public List<KamarModel> retrieveListKamar() {
        return kamarDb.findAll();
    }

    @Override
    public KamarModel getKamarByIdKamar(Long idKamar) {
        Optional<KamarModel> kamar = kamarDb.findById(idKamar);
        if (kamar.isPresent()) {
            return kamar.get();
        } else {
            throw new NoSuchElementException();
        }
    }

    @Override
    public KamarModel changeKamar(Long idKamar, KamarModel kamarUpdate) {
        KamarModel kamar = getKamarByIdKamar(idKamar);
        kamar.setNamaKamar(kamarUpdate.getNamaKamar());
        kamar.setKapasitasKamar(kamarUpdate.getKapasitasKamar());
        kamar.setTipe(kamarUpdate.getTipe());
        return kamarDb.save(kamar);
    }

    @Override
    public void deleteKamar(Long idKamar) {
        KamarModel kamar = getKamarByIdKamar(idKamar);
        kamarDb.delete(kamar);
    }

    // @Override
    // public Mono<String> getStatus(Long idKamar) {
    //     return this.webClient.get().uri("/rest/hotel/" + idKamar + "/status").retrieve().bodyToMono(String.class);
    // }

    // @Override
    // public Mono<HotelDetail> postStatus() {
    //     MultiValueMap<String, String> data = new LinkedMultiValueMap<>();
    //     data.add("alamat", "JL. X");
    //     data.add("nomorTelepon", "081532453621");
    //     return this.webClient.post().uri("/rest/hotel/full").syncBody(data).retrieve().bodyToMono(HotelDetail.class);

    // }


}
