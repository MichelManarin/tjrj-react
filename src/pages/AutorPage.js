import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { autoresRequest, autoresDeleteRequest } from "../store/actions/autores";

const AutorPage = () => {
  const dispatch = useDispatch();
  const autoresResponse = useSelector((state) => state.autores);

  useEffect(() => {
    dispatch(autoresRequest());
  }, [dispatch]);

  const onDelete = (id) => {
    dispatch(autoresDeleteRequest(id));
  };
  return (
    <Container style={{ marginTop: "100px" }}>
      <h4>Autores</h4>
      <Link to="/autor/novo">
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
          {autoresResponse?.autores?.map((autor) => (
            <tr key={autor.codAu}>
              <td>{autor.codAu}</td>
              <td colSpan={4}>{autor.nome}</td>
              <td>
                <Link to="/autor/editar" state={{ autor }}>
                  <Button>Editar</Button>
                </Link>
                <Button
                  variant="danger"
                  style={{ marginLeft: "5px" }}
                  onClick={() => onDelete(autor.codAu)}
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

export default AutorPage;
