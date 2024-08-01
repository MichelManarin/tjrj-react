import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import {
  assuntosRequest,
  assuntosDeleteRequest,
} from "../store/actions/assuntos";

const AssuntoPage = () => {
  const dispatch = useDispatch();
  const assuntosResponse = useSelector((state) => state.assuntos);

  useEffect(() => {
    dispatch(assuntosRequest());
  }, [dispatch]);

  const onDelete = (id) => {
    dispatch(assuntosDeleteRequest(id));
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h4>Assuntos</h4>
      <Link to="/assunto/novo">
        <Button
          variant="secondary"
          style={{ float: "right", marginBottom: "15px" }}
        >
          Adicionar
        </Button>
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Código</th>
            <th colSpan={4}>Descrição</th>
            <th>Ações</th>
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

                <Button
                  variant="danger"
                  style={{ marginLeft: "5px" }}
                  onClick={() => onDelete(assunto.codAs)}
                >
                  Deletar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AssuntoPage;
