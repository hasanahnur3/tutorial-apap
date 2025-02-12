package apap.tutorial.traveloke.service;

import apap.tutorial.traveloke.model.HotelModel;
import apap.tutorial.traveloke.repository.HotelDb;
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
public class HotelRestServiceImpl implements HotelRestService {
    private final WebClient webClient;

    @Autowired
    private HotelDb hotelDb;

    public HotelRestServiceImpl(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl(Setting.hotelUrl).build();
    }

    public WebClient getWebClient() {
        return webClient;
    }

    @Override
    public HotelModel createHotel(HotelModel hotel) {
        return hotelDb.save(hotel);
    }

    @Override
    public List<HotelModel> retrieveListHotel() {
        return hotelDb.findAll();
    }

    @Override
    public HotelModel getHotelByIdHotel(Long idHotel) {
        Optional<HotelModel> hotel = hotelDb.findById(idHotel);
        if (hotel.isPresent()) {
            return hotel.get();
        } else {
            throw new NoSuchElementException();
        }
    }

    @Override
    public HotelModel changeHotel(Long idHotel, HotelModel hotelUpdate) {
        HotelModel hotel = getHotelByIdHotel(idHotel);
        hotel.setNamaHotel(hotelUpdate.getNamaHotel());
        hotel.setAlamat(hotelUpdate.getAlamat());
        hotel.setNomorTelepon(hotelUpdate.getNomorTelepon());
        return hotelDb.save(hotel);
    }

    @Override
    public void deleteHotel(Long idHotel) {
        HotelModel hotel = getHotelByIdHotel(idHotel);
        if (hotel.getListKamar().size() == 0) {
            hotelDb.delete(hotel);
        } else {
            throw new UnsupportedOperationException();
        }
    }

    @Override
    public Mono<String> getStatus(Long idHotel) {
        return this.webClient.get().uri("/rest/hotel/" + idHotel + "/status").retrieve().bodyToMono(String.class);
    }

    @Override
    public Mono<HotelDetail> postStatus() {
        MultiValueMap<String, String> data = new LinkedMultiValueMap<>();
        data.add("alamat", "JL. X");
        data.add("nomorTelepon", "081532453621");
        return this.webClient.post().uri("/rest/hotel/full").syncBody(data).retrieve().bodyToMono(HotelDetail.class);
    }

    // @Override
    // public Mono<String> findCity(String cityName) {
    //     MultiValueMap<String, String> data = new LinkedMultiValueMap<>();
    //     data.add("cityName", cityName);
    //     data.add("apiKey", "a1fac913b6msh6dd7fc748095b76p153a4bjsnef6f01c14584");
    //     return this.webClient.get().uri("rest/hotel/find/" + cityName).retrieve().bodyToMono(String.class);
    // }


}
