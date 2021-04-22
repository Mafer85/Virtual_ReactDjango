import { handleActions } from 'redux-actions';
import {createReducer} from "../baseReducer/baseReducer";

export const {reducers, initialState, actions} = createReducer(
  "nivel", //Identificador para usarlo dentro del estado
  "nivel", //endpoint
  "NivelForm", //Formulario
  "/nivel",
);

export default handleActions(reducers, initialState);
