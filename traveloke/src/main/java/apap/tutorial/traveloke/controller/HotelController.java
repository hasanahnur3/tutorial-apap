package apap.tutorial.traveloke.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import apap.tutorial.traveloke.model.HotelModel;
import apap.tutorial.traveloke.service.HotelService;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class HotelController implements ErrorController{
    @Autowired
    private HotelService hotelService;

    @RequestMapping("/hotel/add")
    public String addHotel(
        @RequestParam(value= "idHotel", required = true)String idHotel,
        @RequestParam(value= "namaHotel", required = true)String namaHotel,
        @RequestParam(value= "alamat", required = true)String alamat,
        @RequestParam(value= "noTelepon", required = true)String noTelepon,
        Model model
    ){
        //Membuat objek HotelModel
        HotelModel  hotel = new HotelModel(idHotel, namaHotel, alamat, noTelepon);

        //Memanggil service addHotel
        hotelService.addHotel(hotel);

        //Add variabel id hotel ke'idHotel' untuk dirender pada thymeleaf
        model.addAttribute("idHotel", idHotel);

        //Return view template yang digunakan
        return "add-hotel";

    }


    @RequestMapping("/hotel/viewall")
    public String listHotel(Model model){
        //Mendapatkan semua HotelModel
        List<HotelModel> listHotel = hotelService.getHotelList();

        //Add variabel semua HotelModel ke 'listHotel' untuk dirender pada thymeleaf
        model.addAttribute("listHotel", listHotel);

        //Return template yang diinginkan
        return "viewall-hotel";
    }


    @RequestMapping("/hotel/view")
    public String detailHotel(
        @RequestParam(value= "idHotel") String idHotel,
        Model model){
        
            HotelModel hotel = hotelService.getHotelByIdHotel(idHotel);

            model.addAttribute("hotel", hotel);

            return "view-hotel";
        }
    
    @RequestMapping("/hotel/view/id-hotel/{idHotel}")
    public String detailHotelWithPathVariable(
        @PathVariable(value = "idHotel") String idHotel,
        Model model){
        HotelModel hotel = hotelService.getHotelByIdHotel(idHotel);

        model.addAttribute("hotel", hotel);

        return "view-hotel";
    }

    @RequestMapping("/hotel/update/id-hotel/{idHotel}/no-telepon/{noTelepon}")
    public String changeTelephoneNumber(
        @PathVariable(value = "idHotel") String idHotel,
        @PathVariable(value = "noTelepon") String noTelepon,
        Model model){

        HotelModel hotel = hotelService.getHotelByIdHotel(idHotel);
        hotel.setNoTelepon(noTelepon);

        model.addAttribute("hotel", hotel);

        return "change-telephone-number-success";
    }

    @RequestMapping("/hotel/delete/id-hotel/{idHotel}")
    public String deleteHotelWithPathVariable(
        @PathVariable(value = "idHotel") String idHotel,
        Model model){

        HotelModel hotel = hotelService.getHotelByIdHotel(idHotel);
        hotelService.deleteHotelByIdHotel(idHotel);

        model.addAttribute("hotel", hotel);

        return "delete-hotel-success";
    }

    private static final String PATH = "/error";

    @RequestMapping(value = PATH)
    public String error() {
        return "error.html";
    }

    @Override
    public String getErrorPath() {
        return PATH;
    }
    

}