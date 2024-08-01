import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useDispatch } from "react-redux";
import { assuntosCreateRequest } from "../store/actions/assuntos";

const CreateAssuntoPage = () => {
  const dispatch = useDispatch();
  const [descricao, setDescricao] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const localErrors = {};
    if (!descricao.trim())
      localErrors.descricao = "O descrição é obrigatório.";
   
    if (Object.keys(localErrors).length > 0) {
      setErrors(localErrors);
      return;
    }

    dispatch(assuntosCreateRequest({ descricao }));
    setDescricao(""); 
    setErrors({});
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h4>Criar Assunto</h4>
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
          <Form.Label>Descrição do Assunto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite a descrição do assunto"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{marginTop: "10px"}}>
          Novo
        </Button>
      </Form>
    </Container>
  );
};

export default CreateAssuntoPage;
