import { CHANGE_ROUTE } from "../../types";

const INTIAL_STATE = {
  route: "home",
};

function routesReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_ROUTE:
      return {
        ...state,
        route: action.payload,
      };

    default:
      return state;
  }
}

export default routesReducer;
