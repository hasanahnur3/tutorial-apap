package apap.tutorial.traveloke.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import apap.tutorial.traveloke.model.HotelModel;

@Service
public class HotelInMemoryService implements HotelService {
    private List<HotelModel> listHotel;

    //Constructor
    public HotelInMemoryService(){
        listHotel = new ArrayList<>();
    }

    @Override
    public void addHotel(HotelModel hotel){
        listHotel.add(hotel);
    }

    @Override
    public List<HotelModel> getHotelList(){
        return listHotel;
    }

    @Override
    public HotelModel getHotelByIdHotel(String idHotel) {
        // TODO Auto-generated method stub
        for(HotelModel hotel : listHotel){
            if (hotel.getIdHotel().contentEquals(idHotel)){
                return hotel;
            }
        }
        return null;
    }

    @Override
    public HotelModel deleteHotelByIdHotel(String idHotel){
        for(HotelModel hotel : listHotel){
            if (hotel.getIdHotel().contentEquals(idHotel)){
                listHotel.remove(hotel);
                return hotel;
            }
        }
        return null;
    }


    
}
