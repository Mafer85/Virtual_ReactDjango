import React, {Component} from 'react';
import Grid from "../Utils/Grid";
import {standardActions } from '../Utils/Grid/StandardActions';

class GradoList extends Component{
  componentWillMount = () => {
    const {listar} = this.props;
    listar();
  }

  render(){
    const {data, loader, eliminar, editar} = this.props;
    console.log("PROPS: ", this.props );
    return(
      <div >
      <h3>Grados</h3>
      <div className="d-flex flex-row justify-content-end mt-3">
      <a
        className="btn btn-primary btn-sm"
        href='/#/grado/crear'
      >
        Registrar Grado
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
                dataField="nombre_grado"
                dataSort
            >
                Grado
            </TableHeaderColumn>

            <TableHeaderColumn
                dataField="descripcion_grado"
                dataSort
            >
                Descripcion
            </TableHeaderColumn>

            <TableHeaderColumn
                dataField="nivel"
                dataSort
                dataFormat={(cell) => {
                  return cell.nombre_nivel;
                }}
            >
                Nivel
            </TableHeaderColumn>

            <TableHeaderColumn
                isKey
                dataField="id"
                dataAlign="center"
                dataSort
                dataFormat={
                  standardActions({
                    editar: "grado",
                    visualizar: "grado",
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

export default GradoList;
