import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { autoresEditRequest } from "../store/actions/autores";

const CreateAutorPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { autor } = location.state;
  const [errors, setErrors] = useState({});
  const [nome, setNome] = useState(autor?.nome ?? "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const localErrors = {};
    if (!nome.trim())
      localErrors.nome = "Nome é obrigatório.";
    
    if (Object.keys(localErrors).length > 0) {
      setErrors(localErrors);
      return;
    }

    dispatch(autoresEditRequest({ codAu: autor.codAu, nome }));
    setNome("");
    setErrors({});
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h4>Editar Autor</h4>
      {Object.keys(errors).length > 0 && (
        <Alert variant="danger">
          <ul>
            {Object.values(errors).map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </Alert>
      )}
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
