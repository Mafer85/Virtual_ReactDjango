import React, {Component} from 'react';
import Formulario from './Formulario';

class CicloCrear extends Component{

  state={
    creacion: true,
  }

  componentWillMount = () => {
    const {leer, match} = this.props;
    const id = match.params.id;

    if(id){
      this.setState({creacion: false});
      leer(id);
    }
  }

  actualizar = (data) => {
    const {editar} = this.props;
    const id  = data.id;
    editar(id, data);
  }

  render(){
    const {crear} = this.props;
    const{creacion} = this.state;
    const fun = creacion ? crear : this.actualizar;
    console.log("creacion: ", creacion)

    return(
      <React.Fragment>
        <Formulario
          crear={creacion}
          onSubmit={fun}
        />
      </React.Fragment>
    );
  }
}

export default CicloCrear;
