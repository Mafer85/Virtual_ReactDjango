import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/profesion/profesion';
import ProfesionList from './ProfesionList';
import {standardActions } from '../Utils/Grid/StandardActions';

const ms2p = (state) => {
  return {
    ...state.profesions, //Definir en rootReducers //Estado inicial que se quiere conectar con el componente
  };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(ProfesionList);
