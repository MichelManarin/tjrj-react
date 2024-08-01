export const LIST_REQUEST = "canais/LIST_REQUEST";
export const LIST_SUCCESS = "canais/LIST_SUCCESS";
export const LIST_FAILURE = "canais/LIST_FAILURE";

export function canaisRequest() {
  return { type: LIST_REQUEST };
}

export function canaisSuccess(payload) {
  return { type: LIST_SUCCESS, payload };
}

export function canaisFailure(error) {
  return { type: LIST_FAILURE, error };
}
