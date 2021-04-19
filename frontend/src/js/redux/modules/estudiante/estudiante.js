import { handleActions } from 'redux-actions';
import { push } from "react-router-redux";
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from "react-notifications";
import { api } from "api";

const SET_DATA_ESTUDIANTE = "SET_DATA_ESTUDIANTE";
const SET_PAGE_ESTUDIANTE = "SET_PAGE_ESTUDIANTE";
const SET_LOADER_ESTUDIANTE = "SET_LOADER_ESTUDIANTE";
const SET_ITEM_ESTUDIANTE = "SET_ITEM_ESTUDIANTE";
const endpoint = "estudiante";


export const listar = (page = 1) => (dispatch, getStore) => {
  const resource = getStore().estudiante;
  const params = { page };
  params.ordering = resource.ordering;
  params.search = resource.search;
  dispatch({type: SET_LOADER_ESTUDIANTE, loader: true});
  api.get(endpoint, params).then((response) => {
      dispatch({type: SET_DATA_ESTUDIANTE, data: response});
      dispatch({type: SET_PAGE_ESTUDIANTE, page: page});
  }).catch((error) => {
    console.log("Error: ", error);
  }).finally(() => {
      dispatch({type: SET_LOADER_ESTUDIANTE, loader: false});
  });
}

export const crear = (data) => (dispatch, getStore) => {

  api.post(endpoint, data).then(response => {
    console.log("Response: ", response);
    NotificationManager.success('Estudiante creado', 'Éxito', 3000);
    dispatch(push("/estudiante"));
  }).catch((error) => {
    console.log("error: ", error);
    NotificationManager.error('Error en la creación', 'ERROR');
  }).finally(() => {

  });
}

export const leer = id => (dispatch) => {
    api.get(`${endpoint}/${id}`).then((response) => {
      response.nombre = response.perfil.nombre;
      response.apellidos = response.perfil.apellidos;
      response.email = response.perfil.user.email;
      response.password = response.perfil.user.password;
      response.username = response.perfil.user.username;
      response.phone = response.perfil.phone;
      response.address = response.perfil.address;
        console.log("Response: ", response);
        const formName = 'EstudianteForm';
        dispatch(initializeForm(formName, response));
    }).catch((error) => {
      console.log("error: ", error)
    }).finally(() => {

    });
};

export const editar = (id, data) => (dispatch) => {
    api.put(`${endpoint}/${id}`, data).then(() => {
      NotificationManager.success('Estudiante actualizado', 'Éxito', 3000);
      dispatch(push("/estudiante"));
    }).catch((error) => {
        console.log("Error: ", error);
        NotificationManager.error('Error en la edición', 'ERROR', 0);
    }).finally(() => {

    });
};

export const eliminar = id => (dispatch) => {
    api.eliminar(`${endpoint}/${id}`).then(() => {
        dispatch(listar());
        NotificationManager.success('Registro eliminado', 'Éxito', 3000);
    }).catch(() => {
        NotificationManager.success('Error en la transacción', 'Éxito', 3000);
    }).finally(() => {

    });
};


export const actions = {
    listar,
    crear,
    leer,
    editar,
    eliminar,
}

export const reducers = {
    [SET_DATA_ESTUDIANTE]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },
    [SET_PAGE_ESTUDIANTE]: (state, { page }) => {
        return {
            ...state,
            page,
        };
    },
    [SET_LOADER_ESTUDIANTE]: (state, { loader }) => {
        return {
            ...state,
            loader,
        };
    },
    [SET_ITEM_ESTUDIANTE]: (state, { item }) => {
        return {
            ...state,
            item,
        };
    },
}

export const initialState = {
    loader: false,
    data: {
        results: [],
        count: 0,
    },
    item: {},
    page: 1,
    ordering: '',
    search: '',
};

export default handleActions(reducers, initialState);
