import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { autoresCreateRequest } from "../store/actions/autores";

const CreateAutorPage = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim()) {
      dispatch(autoresCreateRequest({ nome }));
      setNome(""); 
    }
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h4>Criar Autor</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formAutorNome">
          <Form.Label>Nome do Autor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o nome do autor"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{marginTop: "10px"}}>
          Novo
        </Button>
      </Form>
    </Container>
  );
};

export default CreateAutorPage;
