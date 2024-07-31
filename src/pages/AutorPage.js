import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { autoresRequest, autoresDeleteRequest } from "../store/actions/autores";
const AutorPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const autoresResponse = useSelector((state) => state.autores);

  useEffect(() => {
    dispatch(autoresRequest());
  }, [dispatch]);

  const onDelete = (id) => {
    dispatch(autoresDeleteRequest(id));
  };

  const goToCreate = () => {
    history.push("/autor/novo");
  };

  const goToEdit = (autor) => {
    history.push("/autor/editar", { autor });
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h4>Autores</h4>
      <Button
        variant="secondary"
        style={{ float: "right", marginBottom: "15px" }}
        onClick={() => goToCreate()}
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
          {autoresResponse?.autores?.map((autor) => (
            <tr key={autor.codAu}>
              <td>{autor.codAu}</td>
              <td colSpan={4}>{autor.nome}</td>
              <td>
                <Button onClick={() => goToEdit(autor)}>Editar</Button>
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
