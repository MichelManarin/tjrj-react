import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import { livrosEditRequest } from "../store/actions/livros";
import { assuntosRequest } from "../store/actions/assuntos";
import { autoresRequest } from "../store/actions/autores";

const EditLivroPage = () => {
  const location = useLocation();
  const { livro: livroProps } = location.state;

  const dispatch = useDispatch();

  let initForm = {
    Codl: livroProps.codl,
    Titulo: livroProps.titulo,
    Editora: livroProps.editora,
    Edicao: livroProps.edicao,
    AnoPublicacao: livroProps.anoPublicacao,
    AutoresIds:
      livroProps?.autores?.map((autor) => {
        return autor.codAu;
      }) ?? [],
    AssuntosIds:
      livroProps?.assuntos?.map((assunto) => {
        return assunto.codAs;
      }) ?? [],
  };

  const autoresResponse = useSelector((state) => state.autores) ?? [];
  const assuntosResponse = useSelector((state) => state.assuntos) ?? [];

  const [livro, setLivro] = useState(initForm);

  useEffect(() => {
    dispatch(assuntosRequest());
    dispatch(autoresRequest());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "AutoresIds" || name === "AssuntosIds") {
      setLivro((prevLivro) => ({
        ...prevLivro,
        [name]: Array.from(e.target.selectedOptions, (option) =>
          Number(option.value)
        ),
      }));
    } else {
      setLivro((prevLivro) => ({
        ...prevLivro,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(livrosEditRequest(livro));
    clearForm();
  };

  const clearForm = () => {
    setLivro(livroProps);
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h4>Editar Livro</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitulo">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o título do livro"
            name="Titulo"
            value={livro.Titulo}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEditora">
          <Form.Label>Editora</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite a editora"
            name="Editora"
            value={livro.Editora}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEdicao">
          <Form.Label>Edição</Form.Label>
          <Form.Control
            type="number"
            placeholder="Digite a edição"
            name="Edicao"
            value={livro.Edicao}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formAnoPublicacao">
          <Form.Label>Ano de Publicação</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o ano de publicação"
            name="AnoPublicacao"
            value={livro.AnoPublicacao}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formAutoresIds">
          <Form.Label>Autores</Form.Label>
          <Form.Control
            as="select"
            name="AutoresIds"
            multiple
            value={livro.AutoresIds}
            onChange={handleChange}
          >
            {autoresResponse.autores?.map((autor) => (
              <option key={autor.codAu} value={autor.codAu}>
                {autor.nome}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formAssuntosIds">
          <Form.Label>Assuntos</Form.Label>
          <Form.Control
            as="select"
            name="AssuntosIds"
            multiple
            value={livro.AssuntosIds}
            onChange={handleChange}
          >
            {assuntosResponse.assuntos?.map((assunto) => (
              <option key={assunto.codAs} value={assunto.codAs}>
                {assunto.descricao}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
          Salvar
        </Button>
      </Form>
    </Container>
  );
};

export default EditLivroPage;
