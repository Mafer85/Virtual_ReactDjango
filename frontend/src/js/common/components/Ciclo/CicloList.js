import React, {Component} from 'react';
import Grid from "../Utils/Grid";
import {standardActions } from '../Utils/Grid/StandardActions';

class CicloList extends Component{
  componentWillMount = () => {
    const {listar} = this.props;
    listar();
  }
  render(){
    const {data, loader, eliminar} = this.props;
    console.log("PROPS: ", this.props );
    return(
      <div >
      <h3>Ciclo</h3>
      <div className="d-flex flex-row justify-content-end mt-3">
      <a
        className="btn btn-primary btn-sm"
        href='/#/ciclo/crear'
      >
        Registrar ciclo
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
                dataField="anio"
                dataSort
            >
                Ciclo escolar
            </TableHeaderColumn>


            <TableHeaderColumn
                isKey
                dataField="id"
                dataAlign="center"
                dataSort
                dataFormat={
                  standardActions({
                    editar: "ciclo",
                    visualizar: "ciclo",
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

export default CicloList;
