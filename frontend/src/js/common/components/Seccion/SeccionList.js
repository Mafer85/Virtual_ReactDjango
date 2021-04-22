import React, {Component} from 'react';
import Grid from "../Utils/Grid";
import {standardActions } from '../Utils/Grid/StandardActions';

class SeccionList extends Component{
  componentWillMount = () => {
    const {listar} = this.props;
    listar();
  }
  render(){
    const {data, loader, eliminar} = this.props;
    console.log("PROPS: ", this.props );
    return(
      <div >
      <h3>Secciones</h3>
      <div className="d-flex flex-row justify-content-end mt-3">
      <a
        className="btn btn-primary btn-sm"
        href='/#/seccion/crear'
      >
        Registrar seccion
      </a>
      </div>
      {data &&
        <Grid
        hover striped data={data}
        loading={loader}
        //onPageChange={onPageChange}
        //onSortChange={onSortChange}
        >
            <TableHeaderColumn
                dataField="nombre_seccion"
                dataSort
            >
                Seccion
            </TableHeaderColumn>


            <TableHeaderColumn
                isKey
                dataField="id"
                dataAlign="center"
                dataSort
                dataFormat={
                  standardActions({
                    editar: "seccion",
                    visualizar: "seccion",
                    //eliminar: () => {} ´
                    eliminar: eliminar
                  })
                }
            >
                Acciones
            </TableHeaderColumn>
        </Grid>
       }
      </div>
    );
  }
}

export default SeccionList;
