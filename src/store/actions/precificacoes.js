export const LIST_REQUEST = "precificacoes/LIST_REQUEST";
export const LIST_SUCCESS = "precificacoes/LIST_SUCCESS";
export const LIST_FAILURE = "precificacoes/LIST_FAILURE";

export const CREATE_REQUEST = "precificacoes/CREATE_REQUEST";
export const CREATE_SUCCESS = "precificacoes/CREATE_SUCCESS";
export const CREATE_FAILURE = "precificacoes/CREATE_FAILURE";

export function precificacoesRequest(payload) {
  return { type: LIST_REQUEST, payload };
}

export function precificacoesSuccess(payload) {
  return { type: LIST_SUCCESS, payload };
}

export function precificacoesFailure(error) {
  return { type: LIST_FAILURE, error };
}

export function CreatePrecificacoesRequest(payload) {
  return { type: CREATE_REQUEST, payload};
}

export function CreatePrecificacoesSuccess(payload) {
  return { type: CREATE_SUCCESS, payload };
}

export function CreateFailure(error) {
  return { type: CREATE_FAILURE, error };
}
