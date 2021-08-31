import "./App.css";
import React from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <Table />
    </div>
  );
}

export default App;
