import "./App.css";
import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Table from "./components/Table";
import SubmitTable from "./components/SubmitTable";

function App() {
  const [finalrowdata, setFinalRowData] = useState([]);

  const submitData = (rowdata) => {
    console.log("saumya", rowdata);
    setFinalRowData(rowdata);
  };

  useEffect(() => {
    var updatedData = JSON.parse(localStorage.getItem("row"));
    setFinalRowData(updatedData);
  }, []);
  console.log(finalrowdata);
  return (
    <div>
      <Table submitData={submitData} />
      <SubmitTable rowData={finalrowdata} />
    </div>
  );
}

export default App;
