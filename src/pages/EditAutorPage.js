import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { autoresEditRequest } from "../store/actions/autores";

const CreateAutorPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { autor } = location.state;
  const [nome, setNome] = useState(autor?.nome ?? "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim()) {
      dispatch(autoresEditRequest({ codAu: autor.codAu, nome }));
      setNome("");
    }
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h4>Editar Autor</h4>
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
        <Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
          Editar
        </Button>
      </Form>
    </Container>
  );
};

export default CreateAutorPage;
