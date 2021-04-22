import { handleActions } from 'redux-actions';
import {createReducer} from "../baseReducer/baseReducer";

export const {reducers, initialState, actions} = createReducer(
  "seccion", //Identificador para usarlo dentro del estado
  "seccion", //endpoint
  "SeccionForm", //Formulario
  "/seccion",
);

export default handleActions(reducers, initialState);
