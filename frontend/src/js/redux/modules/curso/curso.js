import { handleActions } from 'redux-actions';
import {createReducer} from "../baseReducer/baseReducer";

export const {reducers, initialState, actions} = createReducer(
  "curso", //Identificador para usarlo dentro del estado
  "curso", //endpoint
  "CursoForm", //Formulario
  "/curso",
);

export default handleActions(reducers, initialState);
