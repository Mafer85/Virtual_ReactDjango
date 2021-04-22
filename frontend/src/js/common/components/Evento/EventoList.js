import React, {Component} from 'react';
import Grid from "../Utils/Grid";
import {standardActions } from '../Utils/Grid/StandardActions';

class EventoList extends Component{
  componentWillMount = () => {
    const {listar} = this.props;
    listar();
  }

  render(){
    const {data, loader, eliminar, editar, obtenerCiclo} = this.props;
    console.log("DATA: ", data );
    return(
      <div >
      <h3>Eventos</h3>
      <div className="d-flex flex-row justify-content-end mt-3">
      <a
        className="btn btn-primary btn-sm"
        href='/#/evento/crear'
      >
        Agregar evento
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
                dataField="titulo_evento"
                dataSort
            >
                Evento
            </TableHeaderColumn>

            <TableHeaderColumn
                dataField="decripcion_evento"
                dataSort
            >
                Descripcion
            </TableHeaderColumn>

            <TableHeaderColumn
                dataField="fecha"
                dataSort

            >
                Fecha
            </TableHeaderColumn>

            <TableHeaderColumn
                dataField="hora"
                dataSort
            >
                Hora
            </TableHeaderColumn>

            <TableHeaderColumn
                dataField="ciclo_escolar"
                dataSort
                dataFormat={(cell) => {
                  return cell.anio;
                }}
            >
                Ciclo
            </TableHeaderColumn>

            <TableHeaderColumn
                isKey
                dataField="id"
                dataAlign="center"
                dataSort
                dataFormat={
                  standardActions({
                    editar: "evento",
                    visualizar: "evento",
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

export default EventoList;
