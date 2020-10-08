package apap.tutorial.traveloke.service;

import java.util.List;

import apap.tutorial.traveloke.model.HotelModel;

public interface HotelService {
    void addHotel(HotelModel hotel);
    List<HotelModel> getHotelList();
    HotelModel getHotelByIdHotel(Long idHotel);
    HotelModel updateHotel(HotelModel hotel);
    
}
