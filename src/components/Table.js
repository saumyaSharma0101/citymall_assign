import React from "react";
//ag-Grid
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AllCommunityModules } from "ag-grid-react";
import GenderDrpdwn from "./GenderDrpdwn";
import Country from "./Country";
//bootstrap
class Table extends React.Component {
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
          editable: true,
          minWidth: 180,
          headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          checkboxSelection: true,
        },
        {
          headerName: "Name",
          field: "name",
          editable: true,
        },
        {
          headerName: "Email",
          field: "email",
          editable: true,
        },
        {
          headerName: "Gender",
          field: "gender",
          editable: true,
          cellRenderer: "genderDrpdwn",
          cellRendererParams: { onGenderChange: this.onGenderChange },
        },
        {
          headerName: "DOB",
          field: "dob",
          editable: true,
        },
        {
          headerName: "Country",
          field: "country",
          editable: true,
          cellRenderer: "country",
          cellRendererParams: { onCountryChange: this.onCountryChange },
        },
        {
          headerName: "City",
          field: "city",
          editable: true,
        },
      ],
      rowData: [{ id: 1, name: "Janie" }],
      frameworkComponents: {
        genderDrpdwn: GenderDrpdwn,
        country: Country,
      },
    };
    this.onGenderChange = this.onGenderChange.bind(this);
    this.onCountryChange = this.onCountryChange.bind(this);
  }

  onGenderChange = (gender) => {
    console.log("Gender Change", gender);
  };
  onCountryChange = (country) => {
    console.log("Country Change", country);
  };
  //ag-Grid hook ready
  onGridReady = (params) => {
    this.gridApi = params.api;
  };
  //ag-Grid add new row functions
  onAddRow = () => {
    this.gridApi.updateRowData({
      add: [
        {
          id: "",
          name: "",
          email: "",
          gender: "",
          dob: "",
          country: "",
          city: "",
        },
      ],
    });
  };
  deleteSelectedRow = () => {
    const selectedRow = this.gridApi.getSelectedRows();
    this.gridApi.updateRowData({ remove: selectedRow });
  };
  deleteNonSelectedRow = () => {
    const selectedRow = this.gridApi.getSelectedRows();
    this.gridApi.updateRowData({ remove: selectedRow });
  };

  render() {
    //output for browser
    return (
      <div className="container">
        <button className="btn btn-primary mb-3" onClick={this.onAddRow}>
          Add Row
        </button>
        <button
          className="btn btn-primary mb-3"
          onClick={this.deleteSelectedRow}
        >
          Delete Selected Rows
        </button>
        <button
          className="btn btn-primary mb-3"
          onClick={this.deleteNonSelectedRow}
        >
          Delete Non Selected Rows
        </button>
        <button>Submit</button>
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
            rowSelection="multiple"
            suppressRowClickSelection="true"
          ></AgGridReact>
        </div>
      </div>
    );
  }
}
export default Table;
