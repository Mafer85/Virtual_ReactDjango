import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import login from './modules/cuenta/login';
import register from './modules/cuenta/register';
import profile from './modules/cuenta/profile';
import usuarios from './modules/usuarios/usuarios';
import notificaciones from './modules/notificaciones/notificaciones';
import profesions from './modules/profesion/profesion';
import profesor from './modules/profesor/profesor';
import estudiante from './modules/estudiante/estudiante';
import nivel from './modules/nivel/nivel';
import grado from './modules/grado/grado';
import curso from './modules/curso/curso';
import seccion from './modules/seccion/seccion';
import ciclo from './modules/ciclo/ciclo';
import evento from './modules/evento/evento';


export default combineReducers({
    form: formReducer,
    login,
    register,
    profile,
    usuarios,
    profesions,
    profesor,
    estudiante,
    nivel,
    grado,
    curso,
    seccion,
    ciclo,
    evento,
    routing,
    notificaciones,
});
