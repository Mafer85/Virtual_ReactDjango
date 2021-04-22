import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/curso/curso';
import CursoList from './CursoList';
import {standardActions } from '../Utils/Grid/StandardActions';

const ms2p = (state) => {
  return {
    ...state.curso, //Definir en rootReducers //Estado inicial que se quiere conectar con el componente
  };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(CursoList);
