/*Formulario de estudiante*/
import React, {Component} from 'react';
import {Field,reduxForm } from 'redux-form';
import { renderField } from "../Utils/renderField/renderField";
import { AsyncSelectField } from "../Utils/renderField/renderField";

class Formulario extends Component {
  render(){
    const {handleSubmit, crear} = this.props;
    const ver = window.location.href.includes("ver");

    return(
      <form onSubmit={handleSubmit}>
        <h3>Estudiante</h3>

        <label>Carnet</label>
        <Field name='carnet' component={renderField} type="text"/>
        <br/><br/>

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
        { crear &&
        <React.Fragment>
        <label>Nombre de usuario</label>
        <Field name='username' component={renderField} type="text"/>
        <br/><br/>
        </React.Fragment>
        }
        <label>Teléfono </label>
        <Field name='phone' component={renderField} type="text"/>
        <br/><br/>

        <label>Direcciòn</label>
        <Field name='address' component={renderField} type="text"/>
        <br/><br/>

        <label>Contacto</label>
        <Field name='contacto' component={renderField} type="text"/>
        <br/><br/>

        <label>Direcciòn de contacto</label>
        <Field name='direccion_contacto' component={renderField} type="text"/>
        <br/><br/>

        <label>Telèfono de contacto</label>
        <Field name='telefono_contacto' component={renderField} type="text"/>
        <br/><br/>

        <div className="d-flexflex-row justify-content-end mt-3">
          <a className="btn btn-secondary btn-sm mr-2" href="/#/estudiante">
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
  form: 'EstudianteForm' //Identificador unico del formulario
})(Formulario)
