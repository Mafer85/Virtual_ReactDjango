import { handleActions } from 'redux-actions';
import {createReducer} from "../baseReducer/baseReducer";

export const {reducers, initialState, actions} = createReducer(
  "ciclo", //Identificador para usarlo dentro del estado
  "ciclo", //endpoint
  "CicloForm", //Formulario
  "/ciclo",
);

export default handleActions(reducers, initialState);
