import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/seccion/seccion';
import SeccionCrear from './SeccionCrear';

const ms2p = (state) => {
  return {
    ...state.seccion, //Definir en rootReducers //Estado inicial que se quiere conectar con el componente
  };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(SeccionCrear);
