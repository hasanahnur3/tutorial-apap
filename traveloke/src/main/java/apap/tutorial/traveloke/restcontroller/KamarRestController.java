package apap.tutorial.traveloke.restcontroller;

import apap.tutorial.traveloke.model.HotelModel;
import apap.tutorial.traveloke.model.KamarModel;
import apap.tutorial.traveloke.rest.HotelDetail;
import apap.tutorial.traveloke.service.KamarRestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;
import javax.validation. Valid;
import java.util.List;
import java.util.NoSuchElementException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/v1")
public class KamarRestController {
    @Autowired
    private KamarRestService kamarRestService;

    @PostMapping(value = "/kamar")
    private ResponseEntity<String> createKamar(@Valid @RequestBody KamarModel kamar, BindingResult bindingResult){
        if(bindingResult.hasFieldErrors()){
            throw new ResponseStatusException(
                HttpStatus.BAD_REQUEST, "Request body has invalid type or missing field"
            );
        }else{
            kamarRestService.createKamar(kamar);
            return ResponseEntity.ok("Add Kamar Success");
        }
    }

    @GetMapping(value = "/kamar/{kamarId}")
    private KamarModel retrieveKamar(@PathVariable("kamarId") Long idKamar){
        try{
            return kamarRestService.getKamarByIdKamar(idKamar);
        }catch(NoSuchElementException e){
            throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "ID Kamar " + String.valueOf(idKamar) + " Not found"
            );
        }
    }

    @DeleteMapping(value = "/kamar/{kamarId}")
    private ResponseEntity<String> deleteKamar(@PathVariable("kamarId") Long idKamar){
        try{
            kamarRestService.deleteKamar(idKamar);
            return ResponseEntity.ok("Kamar has been deleted");
        }catch(NoSuchElementException e){
            throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "ID Kamar " + String.valueOf(idKamar) + " Not found"
            );
        }
    }

    @PutMapping(value = "/kamar/{kamarId}")
    private ResponseEntity<String> updateKamar(
        @PathVariable(value="kamarId") Long idKamar,
        @RequestBody KamarModel kamar
    ){
        try{
            kamarRestService.changeKamar(idKamar, kamar);
            return ResponseEntity.ok("Update Kamar Success");
        }catch(NoSuchElementException e){
            throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "ID Kamar " + String.valueOf(idKamar) + " Not found"
            );
        }
    }

    @GetMapping(value = "/kamar-all")
    private List<KamarModel> retrieveListKamar() {
        return kamarRestService.retrieveListKamar();
    }

    // @GetMapping(value="/hotel/{idKamar}/status")
    // private Mono<String> getStatus(@PathVariable Long idKamar){
    //     return kamarRestService.getStatus(idKamar);
    // }

    // @GetMapping(value="/full")
    // public Mono<HotelDetail> postStatus() {
    //     return kamarRestService.postStatus();
    // }
    
}
