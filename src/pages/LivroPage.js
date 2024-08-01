import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { livrosRequest, livrosDeleteRequest } from "../store/actions/livros";
import { Link } from "react-router-dom";

const LivroPage = () => {
  const dispatch = useDispatch();
  const livrosResponse = useSelector((state) => state.livros);

  useEffect(() => {
    dispatch(livrosRequest());
  }, [dispatch]);

  const onDelete = (id) => {
    dispatch(livrosDeleteRequest(id));
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h4>Livros</h4>
      <Link to="/livro/novo">
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
                <Link to="/livro/editar" state={{ livro }}>
                  <Button>Editar</Button>
                </Link>
                <Link to={`/livro/${livro.codl}/precificacao`}>
                  <Button style={{ marginLeft: "5px" }}>Precificação</Button>
                </Link>
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
