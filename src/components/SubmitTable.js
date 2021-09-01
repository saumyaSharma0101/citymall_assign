import React from "react";
//import "./App.css";
//ag-Grid
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
//bootstrap
import { AllCommunityModules } from "ag-grid-react";

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
          sortable: true,
          filter: true,
        },
        {
          headerName: "Name",
          field: "name",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Email",
          field: "email",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Gender",
          field: "gender",
          sortable: true,
          filter: true,
        },
        {
          headerName: "DOB",
          field: "dob",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Country",
          field: "country",
          sortable: true,
          filter: true,
        },
        {
          headerName: "City",
          field: "city",
          sortable: true,
          filter: true,
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
  // componentDidUpdate(){
  //   this.gridApi.updateRowData(this.props.rowdata);
  // }
  componentDidUpdate(previousProps, previousState) {
    console.log(previousProps, this.props.rowData);
    if (previousProps.rowData !== this.props.rowData) {
      this.setState({
        rowData: this.props.rowData,
      });
    }
  }

  render() {
    //console.log(this.props)
    //output for browser
    return (
      <div className="container">
        <h2>Submitted Data</h2>
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
            frameworkComponents={this.state.frameworkComponents}
            context={this.state.context}
            modules={AllCommunityModules}
          ></AgGridReact>
        </div>
      </div>
    );
  }
}
export default SubmitTable;
