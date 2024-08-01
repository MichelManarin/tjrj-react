import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router-dom";

import { canaisRequest } from "../store/actions/canais";
import {
  precificacoesRequest,
  CreatePrecificacoesRequest,
} from "../store/actions/precificacoes";

const PrecificacaoPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const canaisResponse = useSelector((state) => state.canais);
  const precificacoesResponse = useSelector((state) => state.precificacoes);

  let initForm = {
    Codl: parseInt(id),
    CodCa: null,
    Preco: 0.0,
  };

  const [errors, setErrors] = useState({});

  const [precificacao, setPrecificacao] = useState(initForm);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    let newValue =
      type === "number" ? parseFloat(value.replace(",", ".")) || 0 : value;

    setPrecificacao((prevForm) => ({
      ...prevForm,
      [name]: newValue,
    }));
  };

  const formatNumber = (value) => {
    return value != null ? value.toString().replace(".", ",") : "";
  };

  useEffect(() => {
    dispatch(canaisRequest());
    dispatch(precificacoesRequest());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const localErrors = {};
    if (!precificacao.CodCa)
      localErrors.CodCa = "O código do canal é obrigatório.";
    if (!precificacao.Codl)
      localErrors.Codl = "O código do livro é obrigatório.";
    if (
      !precificacao.Preco ||
      parseFloat(precificacao.Preco.replace(",", ".")) <= 0
    )
      localErrors.Preco = "O preço deve ser maior que zero.";

    if (Object.keys(localErrors).length > 0) {
      setErrors(localErrors);
      return;
    }

    const precoFloat =
      parseFloat(precificacao.Preco.toString().replace(",", ".")) || 0;

    dispatch(
      CreatePrecificacoesRequest({
        ...precificacao,
        Preco: precoFloat,
      })
    );

    setErrors({});
    setPrecificacao(initForm);
  };

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
          {precificacoesResponse?.precificacoes?.map((precificacao) => (
            <tr key={precificacao.codPr}>
              <td>{precificacao?.livro?.titulo}</td>
              <td>{precificacao?.canalVenda?.nome}</td>
              <td>{precificacao?.preco}</td>
              <td>
                {new Date(precificacao?.dataCriacao).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4>Criar Nova Precificação</h4>
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
        <Form.Group controlId="formCanal">
          <Form.Label>Canal de Vendas</Form.Label>
          <Form.Control
            as="select"
            value={precificacao?.codCa}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "CodCa",
                  value: e.target.value,
                  type: "number",
                },
              })
            }
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
            type="text"
            placeholder="Digite o preço"
            name="Preco"
            value={formatNumber(precificacao.Preco)}
            onChange={handleChange}
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
