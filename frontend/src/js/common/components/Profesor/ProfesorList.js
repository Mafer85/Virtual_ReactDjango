import React, {Component} from 'react';
import Grid from "../Utils/Grid";
import {standardActions } from '../Utils/Grid/StandardActions';

class ProfesorList extends Component{
  componentWillMount = () => {
    const {listar} = this.props;
    listar();
  }

  render(){
    const {data, loader, eliminar, editar} = this.props;
    console.log("PROPS: ", this.props );
    return(
      <div >
      <h3>Profesores</h3>
      <div className="d-flex flex-row justify-content-end mt-3">
      <a
        className="btn btn-primary btn-sm"
        href='/#/profesor/crear'
      >
        Registrar profesor
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
                dataField="perfil"
                dataSort
                dataFormat={(cell) => {
                  console.log("Cell: ",cell)
                  return cell.user.username;

                }}
            >
                Username
            </TableHeaderColumn>


            <TableHeaderColumn
                dataField="profesion"
                dataSort
                dataFormat={(cell) => {
                  return cell.titulo;
                }}
            >
                Profesiòn
            </TableHeaderColumn>

            <TableHeaderColumn
                isKey
                dataField="id"
                dataAlign="center"
                dataSort
                dataFormat={
                  standardActions({
                    editar: "profesor",
                    visualizar: "profesor",
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

export default ProfesorList;
