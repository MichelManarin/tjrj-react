import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useDispatch } from "react-redux";
import { autoresCreateRequest } from "../store/actions/autores";

const CreateAutorPage = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const localErrors = {};
    if (!nome.trim())
      localErrors.CodCa = "Nome é obrigatório.";
    
    if (Object.keys(localErrors).length > 0) {
      setErrors(localErrors);
      return;
    }

    dispatch(autoresCreateRequest({ nome }));
    setNome(""); 
    setErrors({});
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h4>Criar Autor</h4>
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
        <Button variant="primary" type="submit" style={{marginTop: "10px"}}>
          Novo
        </Button>
      </Form>
    </Container>
  );
};

export default CreateAutorPage;
