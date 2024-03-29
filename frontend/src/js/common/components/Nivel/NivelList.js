import React, {Component} from 'react';
import Grid from "../Utils/Grid";
import {standardActions } from '../Utils/Grid/StandardActions';

class NivelList extends Component{
  componentWillMount = () => {
    const {listar} = this.props;
    listar();
  }
  render(){
    const {data, loader, eliminar} = this.props;
    console.log("PROPS: ", this.props );
    return(
      <div >
      <h3>Niveles</h3>
      <div className="d-flex flex-row justify-content-end mt-3">
      <a
        className="btn btn-primary btn-sm"
        href='/#/nivel/crear'
      >
        Registrar nivel
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
                dataField="nombre_nivel"
                dataSort
            >
                Nivel
            </TableHeaderColumn>
            <TableHeaderColumn
                dataField="descripcion_nivel"
                dataSort
            >
                Descripcion
            </TableHeaderColumn>

            <TableHeaderColumn
                isKey
                dataField="id"
                dataAlign="center"
                dataSort
                dataFormat={
                  standardActions({
                    editar: "nivel",
                    visualizar: "nivel",
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

export default NivelList;
