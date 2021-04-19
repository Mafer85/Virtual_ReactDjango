import { handleActions } from 'redux-actions';
import {createReducer} from "../baseReducer/baseReducer";

export const {reducers, initialState, actions} = createReducer(
  "profesions", //Identificador para usarlo dentro del estado
  "profesion", //endpoint
  "ProfesionForm", //Formulario
  "/profesions",
);



export default handleActions(reducers, initialState);
