import { FETCH_PAGE } from "../types";

const initialState = {};

const page = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export default page;