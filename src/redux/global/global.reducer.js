import GlobalActionTypes from "./global.types";
import { localeList } from "../../constants/page/layout";

export const initialState = {
  locale: localeList[0].url,
  firstVisit: false,
  urlPath: "/",
  defaultSearch: null,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GlobalActionTypes.SET_LOCALE:
      return {
        ...state,
        locale: action.payload,
      };
    case GlobalActionTypes.SET_FIRST_VISIT:
      return {
        ...state,
        firstVisit: action.payload,
      };
    case GlobalActionTypes.SET_URL_PATH:
      return {
        ...state,
        urlPath: action.payload,
      };
    case GlobalActionTypes.SET_DEFAULT_SEARCH:
      return {
        ...state,
        defaultSearch: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
