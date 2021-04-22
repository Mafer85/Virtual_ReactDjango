/*Ciclo*/
import React, {Component} from 'react';
import {Field,reduxForm } from 'redux-form';
import {renderField} from "../Utils/renderField/renderField";
import { AsyncSelectField } from "../Utils/renderField/renderField";


class Formulario extends Component {
  render(){
    const {handleSubmit, crear,obtenerNiveles } = this.props;
    console.log("Crear: ", crear);
    const ver = window.location.href.includes("ver");

    return(
      <form onSubmit={handleSubmit}>
        <h3>Registrar Ciclo Escolar</h3>
        <label>Ciclo</label>
        <Field name='anio' component={renderField} type="number"/>
        <br/><br/>

        <div className="d-flexflex-row justify-content-end mt-3">
          <a className="btn btn-secondary btn-sm mr-2" href="/#/ciclo">
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
  form: 'CicloForm' //Identificador unico del formulario
})(Formulario)
