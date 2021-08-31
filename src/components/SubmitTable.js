import React from "react";
//import "./App.css";
//ag-Grid
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
//bootstrap
class SubmitTable extends React.Component {
  //initialize array variable
  constructor(props) {
    //super is used to access the variables to parent classes
    super(props);
    //ag-Grid columns and rows defining
    this.state = {
      columnDefs: [
        {
          headerName: "Id",
          field: "id",
        },
        {
          headerName: "Name",
          field: "name",
        },
        {
          headerName: "Email",
          field: "email",
        },
        {
          headerName: "Gender",
          field: "gender",
        },
        {
          headerName: "DOB",
          field: "dob",
        },
        {
          headerName: "Country",
          field: "country",
        },
        {
          headerName: "City",
          field: "city",
        },
      ],
      rowData: [],
    };
  }
  //ag-Grid hook ready
  onGridReady = (params) => {
    this.gridApi = params.api;
  };
  //ag-Grid add new row functions

  render() {
    //output for browser
    return (
      <div className="container">
        <div
          className="ag-theme-alpine"
          style={{
            height: "350px",
            width: "100%",
          }}
        >
          <AgGridReact
            onGridReady={this.onGridReady}
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
          ></AgGridReact>
        </div>
      </div>
    );
  }
}
export default SubmitTable;
