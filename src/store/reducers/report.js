import {
  LIST_REQUEST,
  LIST_SUCCESS,
  LIST_FAILURE
} from "../actions/report";

const initialState = {
  report: null,
  error: null,
  loading: false,
};

function reportReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case LIST_FAILURE:
      return { ...state, loading: false, error: action.error };
    case LIST_SUCCESS:
      return { ...state, loading: false, report: action.payload };
  default:
      return state;
  }
}

export default reportReducer;
