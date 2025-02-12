package apap.tutorial.traveloke.controller;

import apap.tutorial.traveloke.model.HotelModel;
import apap.tutorial.traveloke.service.HotelService;
import apap.tutorial.traveloke.model.KamarModel;
import apap.tutorial.traveloke.service.KamarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;


import org.springframework.boot.web.servlet.error.ErrorController;


@Controller
public class HotelController{
    
    @Qualifier("hotelServiceImpl")
    @Autowired
    private HotelService hotelService;

    @Autowired
    private KamarService kamarService;

    // @GetMapping("/")
    // private String home(){
    //     return "home";
    // }

    @GetMapping("/hotel/add")
    public String addHotelFormPage(Model model){
        model.addAttribute("hotel", new HotelModel());
        return "form-add-hotel";
    }


    @PostMapping("/hotel/add")
    public String addHotelSubmit(
        @ModelAttribute HotelModel hotel,
        Model model
    ){
        hotelService.addHotel(hotel);
        model.addAttribute("idHotel", hotel.getId());
        return "add-hotel";
    }

    @GetMapping("hotel/change/{idHotel}")
    public String changeHotelFormPage(
        @PathVariable Long idHotel,
        Model model
    ){
        try{
            HotelModel hotel = hotelService.getHotelByIdHotel(idHotel);
            model.addAttribute("hotel", hotel);
            return "form-update-hotel";
        }catch(Exception e){
            model.addAttribute("id", idHotel);
            return "error";
        }
    }

    @PostMapping("/hotel/change")
    public String changeHotelFormSubmit(
        @ModelAttribute HotelModel hotel,
        Model model
    ){
        HotelModel hotelupdated = hotelService.updateHotel(hotel);
        model.addAttribute("hotel", hotelupdated);
        return "update-hotel";
    }

    @GetMapping("/hotel/view")
    public String viewDetailHotel(
        @RequestParam(value="idHotel") Long idHotel,
        Model model
    ){
        try{
            HotelModel hotel = hotelService.getHotelByIdHotel(idHotel);
            List<KamarModel> listKamar = kamarService.findAllKamarByIdHotel(idHotel);
            boolean hasKamar = false;
            if(listKamar.size()>0) hasKamar = true;
            model.addAttribute("hotel", hotel);
            model.addAttribute("listKamar", listKamar);
            model.addAttribute("hasKamar", hasKamar);
            return "view-hotel";

        }catch(Exception e){
            model.addAttribute("id", idHotel);
            return "error";
        }
    }


    @GetMapping("/hotel/view-all")
    public String viewAllHotel(Model model){
        List<HotelModel> listHotel = hotelService.getHotelList();
        model.addAttribute("listHotel", listHotel);
        return "viewall";
    }

    @GetMapping("/hotel/delete/{idHotel}")
    public String deleteHotel(
        @PathVariable(value="idHotel") Long idHotel,
        Model model
    ){
        try{

            HotelModel hotel = hotelService.getHotelByIdHotel(idHotel);
            List<KamarModel> listKamar = kamarService.findAllKamarByIdHotel(idHotel);
            if (listKamar.size()==0){
                hotelService.deleteHotel(hotel);
                model.addAttribute("hotel", hotel);
                return "delete-hotel-success";
            }
            return "cant-delete-hotel";

        }catch(Exception e){
            model.addAttribute("id", idHotel);
            return "error";
        }
    }

}