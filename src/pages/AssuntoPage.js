import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

import {
  assuntosRequest,
  assuntosDeleteRequest,
} from "../store/actions/assuntos";
import { Link } from "react-router-dom/cjs/react-router-dom";

const AssuntoPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const assuntosResponse = useSelector((state) => state.assuntos);

  useEffect(() => {
    dispatch(assuntosRequest());
  }, [dispatch]);

  const onDelete = (id) => {
    dispatch(assuntosDeleteRequest(id));
  };

  const goToCreate = () => {
    history.push("/assunto/novo");
  };

  const goToEdit = (assunto) => {
    history.push("/assunto/editar", { assunto });
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h4>Assuntos</h4>
      <Link>
      </Link>
      <Button
        variant="secondary"
        onClick={() => goToCreate()}
        style={{ float: "right", marginBottom: "15px" }}
      >
        Adicionar
      </Button>
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
                <Button onClick={() => goToEdit(assunto)}>Editar</Button>
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
