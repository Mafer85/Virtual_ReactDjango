import React, {Component} from 'react';
import Grid from "../Utils/Grid";
import {standardActions } from '../Utils/Grid/StandardActions';

class EstudianteList extends Component{
  componentWillMount = () => {
    const {listar} = this.props;
    listar();
  }

  render(){
    const {data, loader, eliminar, editar} = this.props;
    return(
      <div >
      <h3>Estudiantes</h3>
      <div className="d-flex flex-row justify-content-end mt-3">
      <a
        className="btn btn-primary btn-sm"
        href='/#/estudiante/crear'
      >
        Registrar estudiante
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
              dataField="carnet"
              dataSort
            >
              Carnet
            </TableHeaderColumn>

            <TableHeaderColumn
                dataField="perfil"
                dataSort
                dataFormat={(cell) => {
                  return cell.nombre;
                }}
            >
                Nombre
            </TableHeaderColumn>

            <TableHeaderColumn
                dataField="perfil"
                dataSort
                dataFormat={(cell) => {
                  return cell.apellidos;
                }}
            >
                Apellidos
            </TableHeaderColumn>

            <TableHeaderColumn
                dataField="perfil"
                dataSort
                dataFormat={(cell) => {
                  console.log("Cell: ",cell)
                  return cell.user.email;

                }}
            >
                Correo electrònico
            </TableHeaderColumn>

            <TableHeaderColumn
                isKey
                dataField="id"
                dataAlign="center"
                dataSort
                dataFormat={
                  standardActions({
                    editar: "estudiante",
                    visualizar: "estudiante",
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

export default EstudianteList;
