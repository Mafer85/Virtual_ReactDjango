import React, {Component} from 'react';
import {Field,reduxForm } from 'redux-form';
import {renderField} from "../Utils/renderField/renderField";


class Formulario extends Component {
  render(){
    const {handleSubmit, crear} = this.props;
    console.log("Crear: ", crear);
    const ver = window.location.href.includes("ver");

    return(
      <form onSubmit={handleSubmit}>
        <h3>Registrar profesion</h3>
        <label>Titulo</label>
        <Field name='titulo' component={renderField} type="text"/>
        <br/><br/>
        <label>Descripcion</label>
        <Field name='descripcion' component={renderField} type="text"/>
        <div className="d-flexflex-row justify-content-end mt-3">
          <a className="btn btn-secondary btn-sm mr-2" href="/#/profesions">
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
  form: 'ProfesionForm' //Identificador unico del formulario
})(Formulario)
