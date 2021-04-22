import { handleActions } from 'redux-actions';
import { push } from "react-router-redux";
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from "react-notifications";
import { api } from "api";

const SET_DATA_GRADO = "SET_DATA_GRADO";
const SET_PAGE_GRADO = "SET_PAGE_GRADO";
const SET_LOADER_GRADO = "SET_LOADER_GRADO";
const SET_ITEM_GRADO = "SET_ITEM_GRADO";
const endpoint = "grado";


export const listar = (page = 1) => (dispatch, getStore) => {
  const resource = getStore().grado;
  const params = { page };
  params.ordering = resource.ordering;
  params.search = resource.search;
  dispatch({type: SET_LOADER_GRADO, loader: true});
  api.get(endpoint, params).then((response) => {
      dispatch({type: SET_DATA_GRADO, data: response});
      dispatch({type: SET_PAGE_GRADO, page: page});
  }).catch((error) => {
    console.log("Error: ", error);
  }).finally(() => {
      dispatch({type: SET_LOADER_GRADO, loader: false});
  });
}

export const crear = (data) => (dispatch, getStore) => {
  const nivel_id = data.nivel.value;
  data.nivel = nivel_id;

  api.post(endpoint, data).then(response => {
    console.log("Response: ", response);
    NotificationManager.success('Grado creado', 'Éxito', 3000);
    dispatch(push("/grado"));
  }).catch((error) => {
    console.log("error: ", error);
    NotificationManager.error('Error en la creación', 'ERROR');
  }).finally(() => {

  });
}

const leer = id => (dispatch) => {
    api.get(`${endpoint}/${id}`).then((response) => {
        dispatch({type: SET_ITEM_GRADO, data: response});
        const nivel = {value: response.nivel.id, label:response.nivel.nombre_nivel};
        response.nivel = nivel;
        console.log("Response: ", response);
        const formName = 'GradoForm';
        dispatch(initializeForm(formName, response));
    }).catch((error) => {
      console.log("error: ", error)
    }).finally(() => {

    });
};

const editar = (id, data) => (dispatch) => {
  const nivel_id = data.nivel.value;
  data.nivel = nivel_id;

  api.put(`${endpoint}/${id}`, data).then(() => {
    NotificationManager.success('Grado actualizado', 'Éxito', 3000);
    dispatch(push("/grado"));
  }).catch((error) => {
    console.log("error: ", error)
    NotificationManager.error('Error en la edición', 'ERROR', 0);
  }).finally(() => {
  });
};

const eliminar = id => (dispatch) => {
    api.eliminar(`${endpoint}/${id}`).then(() => {
        dispatch(push("/grado"))
        NotificationManager.success('Registro eliminado', 'Éxito', 3000);
    }).catch(() => {
        NotificationManager.success('Error en la transacción', 'Éxito', 3000);
    }).finally(() => {

    });
};

export const obtenerNiveles = (search) => (dispatch) => {
  return api.get("nivel", {search}).then(response => {
    console.log("cargando nivel")
    if(response){
      const niveles = [];
      response.results.forEach(nivel => {
        niveles.push({
          value: nivel.id,
          label: nivel.nombre_nivel,
        })
      });
      return niveles;
    }
  }).catch(error => {
    console.log("error: ", error);
    return [];
  })
}

export const actions = {
    listar,
    obtenerNiveles,
    crear,
    leer,
    editar,
    eliminar,
}

export const reducers = {
    [SET_DATA_GRADO]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },
    [SET_PAGE_GRADO]: (state, { page }) => {
        return {
            ...state,
            page,
        };
    },
    [SET_LOADER_GRADO]: (state, { loader }) => {
        return {
            ...state,
            loader,
        };
    },
    [SET_ITEM_GRADO]: (state, { item }) => {
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
