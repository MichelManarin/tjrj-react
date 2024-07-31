import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { assuntosCreateRequest } from "../store/actions/assuntos";

const CreateAssuntoPage = () => {
  const dispatch = useDispatch();
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descricao.trim()) {
      dispatch(assuntosCreateRequest({ descricao }));
      setDescricao(""); 
    }
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h4>Criar Assunto</h4>
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
