export const LIST_REQUEST = "autores/LIST_REQUEST";
export const LIST_SUCCESS = "autores/LIST_SUCCESS";
export const LIST_FAILURE = "autores/LIST_FAILURE";

export const DELETE_REQUEST = "autores/DELETE_REQUEST";
export const DELETE_SUCCESS = "autores/DELETE_SUCCESS";
export const DELETE_FAILURE = "autores/DELETE_FAILURE";

export const CREATE_REQUEST = "autores/CREATE_REQUEST";
export const CREATE_SUCCESS = "autores/CREATE_SUCCESS";
export const CREATE_FAILURE = "autores/CREATE_FAILURE";

export const EDIT_REQUEST = "autores/EDIT_REQUEST";
export const EDIT_SUCCESS = "autores/EDIT_SUCCESS";
export const EDIT_FAILURE = "autores/EDIT_FAILURE";

export function autoresRequest() {
  return { type: LIST_REQUEST };
}

export function autoresSuccess(payload) {
  return { type: LIST_SUCCESS, payload };
}

export function autoresFailure(error) {
  return { type: LIST_FAILURE, error };
}

export function autoresDeleteRequest(payload) {
  return { type: DELETE_REQUEST, payload };
}

export function autoresDeleteSuccess(payload) {
  return { type: DELETE_SUCCESS, payload };
}

export function autoresDeleteFailure(error) {
  return { type: DELETE_FAILURE, error };
}

export function autoresCreateRequest(payload) {
  return { type: CREATE_REQUEST, payload };
}

export function autoresCreateSuccess(payload) {
  return { type: CREATE_SUCCESS, payload };
}

export function autoresCreateFailure(error) {
  return { type: CREATE_FAILURE, error };
}

export function autoresEditRequest(payload) {
  return { type: EDIT_REQUEST, payload };
}

export function autoresEditSuccess(payload) {
  return { type: EDIT_SUCCESS, payload };
}

export function autoresEditFailure(error) {
  return { type: EDIT_FAILURE, error };
}