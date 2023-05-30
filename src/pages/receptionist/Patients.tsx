import Actedata from "../../Data/data.json";
import DataTable, { createTheme } from "react-data-table-component";
import { cols } from "@/Data/dt-colsfull";
import "./styles/patients.css";
import { PatientsStyles } from "@/styles/table/patient";
import Search from "@/components/Search";
import { useState } from "react";

// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme("holako", {
  background: {
    default: "transparnt",
  },
});
function Patients() {
  const [data, setData] = useState(Actedata);
  return (
    <div className="pt-contanier bg">
      <h1 className="title is-2 is-center">List Patients</h1>
      <Search data={data} setter={setData} />
      <div className="arrows">
        <div className="scroll-left-arrow"></div>
        <div className="scroll-rghit-arrow"></div>
      </div>
      <DataTable
        data={data}
        columns={cols}
        defaultSortAsc
        pagination
        responsive
        highlightOnHover
        customStyles={PatientsStyles}
        theme="holako"
      />
    </div>
  );
}

export default Patients;
