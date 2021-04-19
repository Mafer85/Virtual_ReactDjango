import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/profesor/profesor';
import ProfesorList from './ProfesorList';
import {standardActions } from '../Utils/Grid/StandardActions';

const ms2p = (state) => {
  return {
    ...state.profesor, //Definir en rootReducers //Estado inicial que se quiere conectar con el componente
  };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(ProfesorList);
