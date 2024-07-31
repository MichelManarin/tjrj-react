export const LIST_REQUEST = "assuntos/LIST_REQUEST";
export const LIST_SUCCESS = "assuntos/LIST_SUCCESS";
export const LIST_FAILURE = "assuntos/LIST_FAILURE";

export const DELETE_REQUEST = "assuntos/DELETE_REQUEST";
export const DELETE_SUCCESS = "assuntos/DELETE_SUCCESS";
export const DELETE_FAILURE = "assuntos/DELETE_FAILURE";

export const CREATE_REQUEST = "assuntos/CREATE_REQUEST";
export const CREATE_SUCCESS = "assuntos/CREATE_SUCCESS";
export const CREATE_FAILURE = "assuntos/CREATE_FAILURE";

export const EDIT_REQUEST = "assuntos/EDIT_REQUEST";
export const EDIT_SUCCESS = "assuntos/EDIT_SUCCESS";
export const EDIT_FAILURE = "assuntos/EDIT_FAILURE";

export function assuntosRequest() {
  return { type: LIST_REQUEST };
}

export function assuntosSuccess(payload) {
  return { type: LIST_SUCCESS, payload };
}

export function assuntosFailure(error) {
  return { type: LIST_FAILURE, error };
}

export function assuntosDeleteRequest(payload) {
  return { type: DELETE_REQUEST, payload };
}

export function assuntosDeleteSuccess(payload) {
  return { type: DELETE_SUCCESS, payload };
}

export function assuntosDeleteFailure(error) {
  return { type: DELETE_FAILURE, error };
}

export function assuntosCreateRequest(payload) {
  return { type: CREATE_REQUEST, payload };
}

export function assuntosCreateSuccess(payload) {
  return { type: CREATE_SUCCESS, payload };
}

export function assuntosCreateFailure(error) {
  return { type: CREATE_FAILURE, error };
}

export function assuntosEditRequest(payload) {
  return { type: EDIT_REQUEST, payload };
}

export function assuntosEditSuccess(payload) {
  return { type: EDIT_SUCCESS, payload };
}

export function assuntosEditFailure(error) {
  return { type: EDIT_FAILURE, error };
}