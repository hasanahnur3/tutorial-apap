package apap.tutorial.traveloke.service;

import apap.tutorial.traveloke.model.HotelModel;
import apap.tutorial.traveloke.rest.HotelDetail;
import reactor.core.publisher.Mono;
import java.util.List;

public interface APIRestService {
    Mono<String> findCity(String cityName);
}
