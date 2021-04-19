import { handleActions } from 'redux-actions';
import { push } from "react-router-redux";
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from "react-notifications";
import { api } from "api";

const SET_DATA_PROFESOR = "SET_DATA_PROFESOR";
const SET_PAGE_PROFESOR = "SET_PAGE_PROFESOR";
const SET_LOADER_PROFESOR = "SET_LOADER_PROFESOR";
const SET_ITEM_PROFESOR = "SET_ITEM_PROFESOR";
const endpoint = "profesor";


export const listar = (page = 1) => (dispatch, getStore) => {
  const resource = getStore().profesor;
  const params = { page };
  params.ordering = resource.ordering;
  params.search = resource.search;
  dispatch({type: SET_LOADER_PROFESOR, loader: true});
  api.get(endpoint, params).then((response) => {
      dispatch({type: SET_DATA_PROFESOR, data: response});
      dispatch({type: SET_PAGE_PROFESOR, page: page});
  }).catch(() => {
  }).finally(() => {
      dispatch({type: SET_LOADER_PROFESOR, loader: false});
  });
}

export const crear = (data) => (dispatch, getStore) => {
  const profesion_id = data.profesion.value;
  data.profesion = profesion_id;

  api.post(endpoint, data).then(response => {
    console.log("Response: ", response);
    NotificationManager.success('Profesor creado', 'Éxito', 3000);
    dispatch(push("/profesor"));
  }).catch((error) => {
    console.log("error: ", error);
    NotificationManager.error('Error en la creación', 'ERROR');
  }).finally(() => {

  });
}

const leer = id => (dispatch) => {
    api.get(`${endpoint}/${id}`).then((response) => {
        console.log("Llamando la funcion leer")
        dispatch({type: SET_ITEM_PROFESOR, data: response});
        response.nombre = response.perfil.nombre;
        response.apellidos = response.perfil.apellidos;
        response.email = response.perfil.user.email;
        response.password = response.perfil.user.password;
        response.username = response.perfil.user.username;
        response.phone = response.perfil.phone;
        response.address = response.perfil.address;
        const profesion = {value: response.profesion.id, label:response.profesion.titulo};
        response.profesion = profesion;
        console.log("Response: ", response);
        const formName = 'ProfesorForm';
        dispatch(initializeForm(formName, response));
    }).catch((error) => {
      console.log("error: ", error)
    }).finally(() => {

    });
};

const editar = (id, data) => (dispatch) => {
  const profesion_id = data.profesion.value;
  data.profesion = profesion_id;

  api.put(`${endpoint}/${id}`, data).then(() => {
    NotificationManager.success('Profesor actualizado', 'Éxito', 3000);
    dispatch(push("/profesor"));
  }).catch((error) => {
    console.log("error: ", error)
    NotificationManager.error('Error en la edición', 'ERROR', 0);
  }).finally(() => {
  });
};

const eliminar = id => (dispatch) => {
    api.eliminar(`${endpoint}/${id}`).then(() => {
        dispatch(listar());
        NotificationManager.success('Registro eliminado', 'Éxito', 3000);
    }).catch(() => {
        NotificationManager.success('Error en la transacción', 'Éxito', 3000);
    }).finally(() => {

    });
};

export const obtenerProfesiones = (search) => (dispatch) => {
  return api.get("profesion", {search}).then(response => {
    if(response){
      const profesiones = [];
      response.results.forEach(profesion => {
        profesiones.push({
          value: profesion.id,
          label: profesion.titulo,
        })
      });
      return profesiones;
    }
  }).catch(error => {
    console.log("error: ", error);
    return [];
  })
}

export const actions = {
    listar,
    obtenerProfesiones,
    crear,
    leer,
    editar,
    eliminar, 
}

export const reducers = {
    [SET_DATA_PROFESOR]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },
    [SET_PAGE_PROFESOR]: (state, { page }) => {
        return {
            ...state,
            page,
        };
    },
    [SET_LOADER_PROFESOR]: (state, { loader }) => {
        return {
            ...state,
            loader,
        };
    },
    [SET_ITEM_PROFESOR]: (state, { item }) => {
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
