package ma.ensias.springbackend.module;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class Module {
    private Long id ;
    private String nom ;
    private String description ;
}
