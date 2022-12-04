package io.github.vinizer4.vendasapi.model.repository;

import io.github.vinizer4.vendasapi.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {

}
