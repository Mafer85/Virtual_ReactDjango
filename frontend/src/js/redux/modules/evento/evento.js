import { handleActions } from 'redux-actions';
import { push } from "react-router-redux";
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from "react-notifications";
import { api } from "api";

const SET_DATA_EVENTO = "SET_DATA_EVENTO";
const SET_PAGE_EVENTO = "SET_PAGE_EVENTO";
const SET_LOADER_EVENTO = "SET_LOADER_EVENTO";
const SET_ITEM_EVENTO = "SET_ITEM_EVENTO";
const endpoint = "evento";


export const listar = (page = 1) => (dispatch, getStore) => {
  const resource = getStore().evento;
  const params = { page };
  params.ordering = resource.ordering;
  params.search = resource.search;
  dispatch({type: SET_LOADER_EVENTO, loader: true});
  api.get(endpoint, params).then((response) => {
      dispatch({type: SET_DATA_EVENTO, data: response});
      dispatch({type: SET_PAGE_EVENTO, page: page});
  }).catch((error) => {
    console.log("Error: ", error);
  }).finally(() => {
      dispatch({type: SET_LOADER_EVENTO, loader: false});
  });
}

export const crear = (data) => (dispatch, getStore) => {
  console.log("Creando...")
  const ciclo_id = data.ciclo_escolar.value;
  data.ciclo_escolar = ciclo_id;

  api.post(endpoint, data).then(response => {
    console.log("Response: ", response);
    NotificationManager.success('Evento creado', 'Éxito', 3000);
    dispatch(push("/evento"));
  }).catch((error) => {
    console.log("error: ", error);
    NotificationManager.error('Error en la creación', 'ERROR');
  }).finally(() => {

  });
}

const leer = id => (dispatch) => {
    api.get(`${endpoint}/${id}`).then((response) => {
        dispatch({type: SET_ITEM_EVENTO, data: response});
        const ciclo = {value: response.ciclo_escolar.id, label:response.ciclo_escolar.anio};
        response.ciclo_escolar = ciclo;
        console.log("Response: ", response);
        const formName = 'EventoForm';
        dispatch(initializeForm(formName, response));
    }).catch((error) => {
      console.log("error: ", error)
    }).finally(() => {

    });
};

const editar = (id, data) => (dispatch) => {
  const ciclo_id = data.ciclo_escolar.value;
  data.ciclo_escolar = ciclo_id;

  api.put(`${endpoint}/${id}`, data).then(() => {
    NotificationManager.success('Evento actualizado', 'Éxito', 3000);
    dispatch(push("/evento"));
  }).catch((error) => {
    console.log("error: ", error)
    NotificationManager.error('Error en la edición', 'ERROR', 0);
  }).finally(() => {
  });
};

const eliminar = id => (dispatch) => {
    api.eliminar(`${endpoint}/${id}`).then(() => {
        dispatch(push("/evento"))
        NotificationManager.success('Evento eliminado', 'Éxito', 3000);
    }).catch(() => {
        NotificationManager.success('Error en la transacción', 'Éxito', 3000);
    }).finally(() => {

    });
};

export const obtenerCiclo = (search) => (dispatch) => {
  return api.get("ciclo", {search}).then(response => {
    console.log("cargando ciclos")
    if(response){
      const ciclos = [];
      response.results.forEach(ciclo => {
        ciclos.push({
          value: ciclo.id,
          label: ciclo.anio,
        })
      });
      return ciclos;
    }
  }).catch(error => {
    console.log("error: ", error);
    return [];
  })
}

export const actions = {
    listar,
    obtenerCiclo,
    crear,
    leer,
    editar,
    eliminar,
}

export const reducers = {
    [SET_DATA_EVENTO]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },
    [SET_PAGE_EVENTO]: (state, { page }) => {
        return {
            ...state,
            page,
        };
    },
    [SET_LOADER_EVENTO]: (state, { loader }) => {
        return {
            ...state,
            loader,
        };
    },
    [SET_ITEM_EVENTO]: (state, { item }) => {
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
