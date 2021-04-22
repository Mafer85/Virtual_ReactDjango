import React, {Component} from 'react';
import Grid from "../Utils/Grid";
import {standardActions } from '../Utils/Grid/StandardActions';

class CursoList extends Component{
  componentWillMount = () => {
    const {listar} = this.props;
    listar();
  }
  render(){
    const {data, loader, eliminar} = this.props;
    console.log("PROPS: ", this.props );
    return(
      <div >
      <h3>Cursos</h3>
      <div className="d-flex flex-row justify-content-end mt-3">
      <a
        className="btn btn-primary btn-sm"
        href='/#/curso/crear'
      >
        Registrar curso
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
                dataField="nombre_curso"
                dataSort
            >
                Curso
            </TableHeaderColumn>
            <TableHeaderColumn
                dataField="descripcion_curso"
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
                    editar: "curso",
                    visualizar: "curso",
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

export default CursoList;
