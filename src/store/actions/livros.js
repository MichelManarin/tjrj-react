export const LIST_REQUEST = "livros/LIST_REQUEST";
export const LIST_SUCCESS = "livros/LIST_SUCCESS";
export const LIST_FAILURE = "livros/LIST_FAILURE";

export const DELETE_REQUEST = "livros/DELETE_REQUEST";
export const DELETE_SUCCESS = "livros/DELETE_SUCCESS";
export const DELETE_FAILURE = "livros/DELETE_FAILURE";

export const CREATE_REQUEST = "livros/CREATE_REQUEST";
export const CREATE_SUCCESS = "livros/CREATE_SUCCESS";
export const CREATE_FAILURE = "livros/CREATE_FAILURE";

export const EDIT_REQUEST = "livros/EDIT_REQUEST";
export const EDIT_SUCCESS = "livros/EDIT_SUCCESS";
export const EDIT_FAILURE = "livros/EDIT_FAILURE";

export function livrosRequest() {
  return { type: LIST_REQUEST };
}

export function livrosSuccess(payload) {
  return { type: LIST_SUCCESS, payload };
}

export function livrosFailure(error) {
  return { type: LIST_FAILURE, error };
}

export function livrosDeleteRequest(payload) {
  return { type: DELETE_REQUEST, payload };
}

export function livrosDeleteSuccess(payload) {
  return { type: DELETE_SUCCESS, payload };
}

export function livrosDeleteFailure(error) {
  return { type: DELETE_FAILURE, error };
}

export function livrosCreateRequest(payload) {
  return { type: CREATE_REQUEST, payload };
}

export function livrosCreateSuccess(payload) {
  return { type: CREATE_SUCCESS, payload };
}

export function livrosCreateFailure(error) {
  return { type: CREATE_FAILURE, error };
}

export function livrosEditRequest(payload) {
  return { type: EDIT_REQUEST, payload };
}

export function livrosEditSuccess(payload) {
  return { type: EDIT_SUCCESS, payload };
}

export function livrosEditFailure(error) {
  return { type: EDIT_FAILURE, error };
}