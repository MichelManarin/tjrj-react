import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { canaisRequest } from "../store/actions/canais";

const PrecificacaoPage = () => {
  const { id } = useParams();

  console.log("id ", id)

  const dispatch = useDispatch();
  const canaisResponse = useSelector((state) => state.canais);

  // const dispatch = useDispatch();
  // const assuntosResponse = useSelector((state) => state.assuntos);

  useEffect(() => {
    dispatch(canaisRequest());
  }, [dispatch]);

  // const onDelete = (id) => {
  //   dispatch(assuntosDeleteRequest(id));
  // };

  const handleSubmit = () => {};

  const assuntosResponse = [];

  return (
    <Container style={{ marginTop: "100px" }}>
      <h4>Precificação</h4>

      <Table striped bordered hover style={{ minHeight: "350px" }}>
        <thead>
          <tr>
            <th>Livro</th>
            <th>Canal de Vendas</th>
            <th>Valor</th>
            <th>Data registro</th>
          </tr>
        </thead>
        <tbody>
          {assuntosResponse?.assuntos?.map((assunto) => (
            <tr key={assunto.codAs}>
              <td>{assunto.codAs}</td>
              <td colSpan={4}>{assunto.descricao}</td>
              <td>
                <Link to="/assunto/editar" state={{ assunto }}>
                  <Button>Editar</Button>
                </Link>

                <Button variant="danger" style={{ marginLeft: "5px" }}>
                  Deletar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4>Criar Nova Precificação</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCanal">
          <Form.Label>Canal de Vendas</Form.Label>
          <Form.Control
            as="select"
            // value={canal}
            // onChange={(e) => setCanal(e.target.value)}
          >
            <option value="">Selecione um canal</option>
            {canaisResponse?.canais?.map((canal) => (
              <option key={canal.codCa} value={canal.codCa}>
                {canal.nome}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formPreco">
          <Form.Label>Preço</Form.Label>
          <Form.Control
            type="number"
            placeholder="Digite o preço"
            // value={preco}
            // onChange={(e) => setPreco(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
          Novo
        </Button>
      </Form>
    </Container>
  );
};

export default PrecificacaoPage;
