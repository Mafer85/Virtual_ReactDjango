import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/nivel/nivel';
import NivelCrear from './NivelCrear';

const ms2p = (state) => {
  return {
    ...state.nivel, //Definir en rootReducers //Estado inicial que se quiere conectar con el componente
  };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(NivelCrear);
