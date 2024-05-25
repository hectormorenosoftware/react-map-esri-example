import { CHANGE_ROUTE } from "../../types";

export function changeRoute(route) {
  return {
    type: CHANGE_ROUTE,
    payload: route,
  };
}
