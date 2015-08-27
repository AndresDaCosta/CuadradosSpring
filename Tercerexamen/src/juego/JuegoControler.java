package juego;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class JuegoControler {
	@RequestMapping(path="settiempo", produces="text/plain")
	@ResponseBody
	public ResponseEntity<String> obtenertiempo(@RequestParam (value="tiempo") String tiempo){
		System.out.println(tiempo);
		
		return new ResponseEntity<String>(tiempo,HttpStatus.OK);
	} 
	
	
}
