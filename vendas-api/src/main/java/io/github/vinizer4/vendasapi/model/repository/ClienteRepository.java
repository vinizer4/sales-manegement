package io.github.vinizer4.vendasapi.model.repository;

import io.github.vinizer4.vendasapi.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

}
