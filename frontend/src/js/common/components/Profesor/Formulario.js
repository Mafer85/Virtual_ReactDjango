import React, {Component} from 'react';
import {Field,reduxForm } from 'redux-form';
import { renderField } from "../Utils/renderField/renderField";
import { AsyncSelectField } from "../Utils/renderField/renderField";

class Formulario extends Component {
  render(){
    const {handleSubmit, crear, obtenerProfesiones} = this.props;
    const ver = window.location.href.includes("ver");

    return(
      <form onSubmit={handleSubmit}>
        <h3>Registrar Profesor</h3>

        <label>Nombre</label>
        <Field name='nombre' component={renderField} type="text"/>
        <br/><br/>

        <label>Apellidos</label>
        <Field name='apellidos' component={renderField} type="text"/>
        <br/><br/>

        <label>Correo electrònico</label>
        <Field name='email' component={renderField} type="text"/>
        <br/><br/>
        { crear &&
        <React.Fragment>
        <label>Contraseña</label>
        <Field name='password' component={renderField} type="password"/>
        <br/><br/>
        </React.Fragment>
        }
        <label>Nombre de usuario</label>
        <Field name='username' component={renderField} type="text"/>
        <br/><br/>

        <label>Teléfono </label>
        <Field name='phone' component={renderField} type="text"/>
        <br/><br/>

        <label>Direcciòn</label>
        <Field name='address' component={renderField} type="text"/>
        <br/><br/>

        <label>Profesiòn</label>
        <Field
        name='profesion'
        component={AsyncSelectField}
        loadOptions={obtenerProfesiones}
        isClearable
        />


        <div className="d-flexflex-row justify-content-end mt-3">
          <a className="btn btn-secondary btn-sm mr-2" href="/#/profesor">
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
  form: 'ProfesorForm' //Identificador unico del formulario
})(Formulario)
