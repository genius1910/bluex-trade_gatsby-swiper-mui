import GlobalActionTypes from "./global.types"

export const setLocale = locale => ({
  type: GlobalActionTypes.SET_LOCALE,
  payload: locale,
});

export const setFirstVisit = firstVisit => ({
  type: GlobalActionTypes.SET_FIRST_VISIT,
  payload: firstVisit,
});

export const setUrlPath = urlPath => ({
  type: GlobalActionTypes.SET_URL_PATH,
  payload: urlPath,
});

export const setDefaultSearch = search => ({
  type: GlobalActionTypes.SET_DEFAULT_SEARCH,
  payload: search,
});