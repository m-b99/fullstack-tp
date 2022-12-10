package ma.ensias.springbackend.service;


import ma.ensias.springbackend.module.Module;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ModuleService {

    private List<Module> modules = new ArrayList<>( Arrays.asList( new Module(1L, "java Standard Edition Platform" , "javaSE"),
            new Module(2L , "java Enterprise Edition Platform" , "Java EE") ) ) ;


    public List<Module> getAllModules() {
        return
                modules
                ;
    }


    public Module getModule(Long id) {
        for ( Module module : modules  ) {
            if ( id.equals(module.getId()) ) {
                return module ;
            }
        }

        return null ;
    }

    public Module addModule( Module module ) {
        if ( module == null ) return null ;
        modules.add(module) ;

        return module ;
    }

    public void modifierModule(Long id, Module module) {
        for (int i=0; i<modules.size(); i++) {
            Module m = modules.get(i);
            if (id.equals(m.getId())) {
                modules.set(i, module);
                return;
            }
        }
    }

    public void supprimerModule(Long id) {
        modules.removeIf(m -> id.equals(m.getId()));
    }


}
