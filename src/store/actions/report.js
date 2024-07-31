export const LIST_REQUEST = "report/LIST_REQUEST";
export const LIST_SUCCESS = "report/LIST_SUCCESS";
export const LIST_FAILURE = "report/LIST_FAILURE";

export function reportRequest() {
  return { type: LIST_REQUEST };
}

export function reportSuccess(payload) {
  return { type: LIST_SUCCESS, payload };
}

export function reportFailure(error) {
  return { type: LIST_FAILURE, error };
}
