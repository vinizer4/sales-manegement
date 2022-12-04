package io.github.vinizer4.vendasapi.rest.produtos;

import io.github.vinizer4.vendasapi.model.Produto;
import io.github.vinizer4.vendasapi.model.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/produtos")
@CrossOrigin("*")
public class ProdutoController {

    @Autowired
    private ProdutoRepository repository;

    @PostMapping
    public ProdutoFormRequest salvar( @RequestBody ProdutoFormRequest produto) {
        Produto entidadeProduto = produto.toModel();
        repository.save(entidadeProduto);
        return ProdutoFormRequest.fromModel(entidadeProduto);
    }
}
