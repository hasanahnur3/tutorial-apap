package apap.tutorial.traveloke.controller;

import apap.tutorial.traveloke.model.HotelModel;
import apap.tutorial.traveloke.service.HotelService;
import apap.tutorial.traveloke.model.KamarModel;
import apap.tutorial.traveloke.service.KamarService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class KamarController {
    
    @Qualifier("hotelServiceImpl")

    @Autowired
    private HotelService hotelService;

    @Autowired
    private KamarService kamarService;

    // @GetMapping("/kamar/add/{idHotel}")
    // private String addKamarFormPage(
    //     @PathVariable Long idHotel,
    //     Model model
    // ){
    //     KamarModel kamar = new KamarModel();
    //     HotelModel hotel = hotelService.getHotelByIdHotel(idHotel);
    //     kamar.setHotel(hotel);
    //     model.addAttribute("kamar", kamar);

    //     return "form-add-kamar";
    // }

    // @PostMapping("/kamar/add")
    // private String addKamarSubmit(
    //     @ModelAttribute KamarModel kamar,
    //     Model model
    // ){
    //     kamarService.addKamar(kamar);
    //     model.addAttribute("kamar", kamar);
    //     return "add-kamar";
    // }

    @GetMapping("/kamar/change/{noKamar}")
    public String changeKamarFormPage(
            @PathVariable Long noKamar,
            Model model
    ){
        KamarModel kamar = kamarService.getKamarByNoKamar(noKamar);
        model.addAttribute("kamar", kamar);
        return "form-update-kamar";
    }

    @PostMapping("/kamar/change")
    public String changeKamarFormSubmit(
            @ModelAttribute KamarModel kamar,
            Model model
    ){
//        System.out.println(kamar.getNoKamar());
        KamarModel updateKamar = kamarService.updateKamar(kamar);
        model.addAttribute("kamar", updateKamar);
        return "update-kamar";
    }

    @PostMapping(path = "/kamar/delete")
    public String deleteKamarFormSubmit(
        @ModelAttribute HotelModel hotel,
        Model model
    ){
        // System.out.println(hotel.getListKamar().size());
        // System.out.println("TESSSSSSSSSSSSSSSSS");
        model.addAttribute("kamarCount", hotel.getListKamar().size());
        for(KamarModel kamar: hotel.getListKamar()){
            kamarService.deleteKamar(kamar);
        }

        return "delete-kamar-success";
    }

    @GetMapping({"/kamar/addmultiple/{idHotel}"})
    private String addMultiHotelFormPage(@PathVariable Optional<Long> idHotel, Model model) {
        if (!idHotel.isPresent()) {
                return "kurangParameter-resep";
        }
        HotelModel hotel;
        try {
                hotel = hotelService.getHotelByIdHotel(idHotel.get());
        } catch (Exception e) {
                model.addAttribute("idHotel", idHotel.get());
                return "notfound-resep";
        }
        ArrayList<KamarModel> temp_kamar = new ArrayList<KamarModel>();
        temp_kamar.add(new KamarModel());
        hotel.setListKamar(temp_kamar);
        model.addAttribute("hotel", hotel);
        return "form-add-kamar";
    }

    @PostMapping(value = "/kamar/addmultiple", params = {"simpan"})
    private String simpanMultiKamarSubmit(@ModelAttribute HotelModel hotel, Model model) {
        
            for (KamarModel kamar : hotel.getListKamar()) {
                    kamar.setHotel(hotel);
                    kamarService.addKamar(kamar);
            }
            int jumlah = hotel.getListKamar().size();
            model.addAttribute("jumlah", jumlah);
            return "add-kamar";
    }

    @PostMapping(value="/kamar/addmultiple", params = {"addrow"})
    private String addRowMultiKamarSubmit(@ModelAttribute HotelModel hotel, Model model){
        if(hotel.getListKamar() == null || hotel.getListKamar().size() == 0){
            hotel.setListKamar(new ArrayList<KamarModel>());
        }
        hotel.getListKamar().add(new KamarModel());
        model.addAttribute("hotel", hotel);
        return "form-add-kamar";
    }

    @PostMapping(value = "/kamar/addmultiple", params = {"deleterow"})
    private String deleteRowMultiKamarSubmit(@ModelAttribute HotelModel hotel, final HttpServletRequest req,
            Model model) {
            int rowId = Integer.valueOf(req.getParameter("deleterow"));
            hotel.getListKamar().remove(rowId);
            model.addAttribute("hotel", hotel);
            return "form-add-kamar";
    }


}


