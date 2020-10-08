package apap.tutorial.traveloke.controller;

import apap.tutorial.traveloke.model.HotelModel;
import apap.tutorial.traveloke.service.HotelService;
import apap.tutorial.traveloke.model.KamarModel;
import apap.tutorial.traveloke.service.KamarService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class KamarController {
    
    @Qualifier("hotelServiceImpl")

    @Autowired
    private HotelService hotelService;

    @Autowired
    private KamarService kamarService;

    @GetMapping("/kamar/add/{idHotel}")
    private String addKamarFormPage(
        @PathVariable Long idHotel,
        Model model
    ){
        KamarModel kamar = new KamarModel();
        HotelModel hotel = hotelService.getHotelByIdHotel(idHotel);
        kamar.setHotel(hotel);
        model.addAttribute("kamar", kamar);

        return "form-add-kamar";
    }

    @PostMapping("/kamar/add")
    private String addKamarSubmit(
        @ModelAttribute KamarModel kamar,
        Model model
    ){
        kamarService.addKamar(kamar);
        model.addAttribute("kamar", kamar);
        return "add-kamar";
    }

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

    @GetMapping("/kamar/delete/{noKamar}")
    public String deleteKamar(
        @PathVariable(value="noKamar") Long idHotel,
        Model model
    ){
        KamarModel kamar = kamarService.getKamarByNoKamar(idHotel);
        kamarService.deleteKamar(kamar);
        model.addAttribute("kamar", kamar);
        return "delete-kamar-success";
    }
}
