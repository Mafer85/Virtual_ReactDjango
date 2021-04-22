/*Formulario evento*/
import React, {Component} from 'react';
import {Field,reduxForm } from 'redux-form';
import {renderField} from "../Utils/renderField/renderField";
import { AsyncSelectField } from "../Utils/renderField/renderField";
import {renderDatePicker} from "../Utils/renderField/renderField";

class Formulario extends Component {
  render(){
    const {handleSubmit, crear, obtenerCiclo } = this.props;
    console.log("Crear: ", crear);
    const ver = window.location.href.includes("ver");

    return(
      <form onSubmit={handleSubmit}>
        <h3>Crear evento</h3>
        <label>Titulo</label>
        <Field name='titulo_evento' component={renderField} type="text"/>

        <br/><br/>
        <label>Descripcion</label>
        <Field name='decripcion_evento' component={renderField} type="text"/>

        <br/><br/>
        <label>Fecha</label>
        <Field name='fecha' component={renderDatePicker} />

        <br/><br/>
        <label>Hora</label>
        <Field name='hora' component={renderField} type="time"/>

        <label>Ciclo escolar</label>
        <Field
        name='ciclo_escolar'
        component={AsyncSelectField}
        loadOptions={obtenerCiclo}
        isClearable
        />

        <div className="d-flexflex-row justify-content-end mt-3">
          <a className="btn btn-secondary btn-sm mr-2" href="/#/evento">
            Cancelar
          </a>
          {!ver &&
          <button className="btn btn-primary btn-sm" >
            {crear ? "Registrar" : "Actualizar"}
          </button>
          }
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'EventoForm'
})(Formulario)
