import React from "react";
import "./style.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AllCommunityModules } from "ag-grid-react";
import GenderDrpdwn from "./GenderDrpdwn";
import Country from "./Country";
//import CustomDateComponent from "./CustomDateComponent";
import CustomDatePicker from "./CustomDatePicker";

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
          sortable: true,
          filter: true,
        },
        {
          headerName: "Name",
          field: "name",
          editable: true,
          sortable: true,
          filter: true,
        },
        {
          headerName: "Email",
          field: "email",
          editable: true,
          sortable: true,
          filter: true,
        },
        {
          headerName: "Gender",
          field: "gender",
          editable: true,
          sortable: true,
          filter: true,
          cellRenderer: "genderDrpdwn",
          cellRendererParams: { onGenderChange: this.onGenderChange },
        },
        {
          headerName: "DOB",
          field: "date",
          editable: true,
          sortable: true,
          filter: true,
          minWidth: "190",
          // filter: "agDateColumnFilter",
          //cellRenderer: "agDateInput",
          // filterParams: filterParams,
          cellRenderer: "customDatePicker",
        },
        {
          headerName: "Country",
          field: "country",
          editable: true,
          cellRenderer: "country",
          cellRendererParams: { onCountryChange: this.onCountryChange },
          sortable: true,
          filter: true,
        },
        {
          headerName: "City",
          field: "city",
          editable: true,
          sortable: true,
          filter: true,
        },
      ],
      rowData: [
        { id: 1, name: "Janie", email: "janie@gmail.com", gender: "female" },
      ],
      frameworkComponents: {
        genderDrpdwn: GenderDrpdwn,
        country: Country,
        //agDateInput: CustomDateComponent,
        customDatePicker: CustomDatePicker,
      },
    };
    this.onGenderChange = this.onGenderChange.bind(this);
    this.onCountryChange = this.onCountryChange.bind(this);
  }

  componentDidMount() {
    var updatedData = JSON.parse(localStorage.getItem("row"));
    this.setState({ rowData: updatedData });
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
    // for placeholder
    // Array.from(document.getElementsByClassName('ag-cell-wrapper ag-row-odd id-class')).forEach((obj) => {
    //   console.log(obj)
    //   obj.setAttribute('placeholder', 'Filter...');
    // });
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
    const data = this.getAllRows();
    const selectedRow = this.gridApi.getSelectedRows();
    const myArray = data.filter((el) => !selectedRow.includes(el));
    console.log(myArray);
    // const selectedRow = this.gridApi.getSelectedRows();
    this.gridApi.updateRowData({ remove: myArray });
  };
  getAllRows() {
    let rowData = [];
    this.gridApi.forEachNode((node) => rowData.push(node.data));
    return rowData;
  }
  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validate = () => {
    let valid = true;
    const data = this.getAllRows();

    var a = data.map((item) => {
      // if(item.id=="" && item.name=="" && item.email=="" && item.gender=="" && item.dob=="" && item.country=="" && item.city==""){
      //   alert("Error :  Please add all the fields");
      //   valid=false;
      // }
      if (item.name.length < 3) {
        alert("Invalid Name");
        valid = false;
      }
      if (!this.validateEmail(item.email)) {
        alert("Invalid Email");
        valid = false;
      }
      return valid;
    });
    for (let i = 0; i < a.length; i++) {
      if (a[i] == false) {
        return false;
      }
    }
    console.log(a);
    return true;
  };

  submitData = () => {
    if (this.validate()) {
      console.log("vaibhav");
      const data = this.getAllRows();
      console.log(data);
      this.props.submitData(data);
      localStorage.setItem("row", JSON.stringify(data));
    }
  };

  render() {
    //output for browser
    return (
      <>
        <div className="btns">
          <button onClick={this.onAddRow}>Add Row</button>
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
          <button onClick={this.submitData}>Submit</button>
        </div>
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
      </>
    );
  }
}
export default Table;

// const filterParams = {
//   comparator: (filterLocalDateAtMidnight, cellValue) => {
//     const dateAsString = cellValue;
//     const dateParts = dateAsString.split("/");
//     const cellDate = new Date(
//       Number(dateParts[2]),
//       Number(dateParts[1]) - 1,
//       Number(dateParts[0])
//     );
//     if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
//       return 0;
//     }
//     if (cellDate < filterLocalDateAtMidnight) {
//       return -1;
//     }
//     if (cellDate > filterLocalDateAtMidnight) {
//       return 1;
//     }
//   },
// };
