import data from "../../Data/data.json";
import DataTable, { createTheme } from "react-data-table-component";
import { cols } from "@/Data/dt-colsfull";
import "./styles/patients.css";
import { PatientsStyles } from "@/styles/table/patient";

// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme("holako", {
  background: {
    default: "transparnt",
  },
});
function Patients() {
  return (
    <div className="pt-contanier bg">
      <h1 className="title is-2 is-center">List Patients</h1>
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
