import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { livrosRequest, livrosDeleteRequest } from "../store/actions/livros";

const LivroPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const livrosResponse = useSelector((state) => state.livros);

  useEffect(() => {
    dispatch(livrosRequest());
  }, [dispatch]);

  const onDelete = (id) => {
    dispatch(livrosDeleteRequest(id));
  };

  const goToCreate = () => {
    history.push("/livro/novo");
  };

  const goToEdit = (livro) => {
    history.push("/livro/editar", { livro });
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h4>Livros</h4>
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
            <th>Título</th>
            <th>Editora</th>
            <th>Edição</th>
            <th>Ano publicação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livrosResponse?.livros?.map((livro) => (
            
            <tr key={livro.codl}>
              <td>{livro.codl}</td>
              <td>{livro.titulo}</td>
              <td>{livro.editora}</td>
              <td>{livro.edicao}</td>
              <td>{livro.anoPublicacao}</td>
              <td>
                <Button onClick={() => goToEdit(livro)}>Editar</Button>
                <Button
                  variant="danger"
                  style={{ marginLeft: "5px" }}
                  onClick={() => onDelete(livro.codl)}
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

export default LivroPage;
