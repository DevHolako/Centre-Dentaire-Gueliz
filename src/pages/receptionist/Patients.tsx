import DataTable from "react-data-table-component";
import { cols } from "@/Data/acte-cols";
import "./styles/patients.css";
import { PatientsStyles } from "@/styles/table/patient";
import Search from "@/components/Search";
import { useState } from "react";
import ActeData from "@/Data/actes.json";
function Patients() {
  const [data, setData] = useState(ActeData);
  return (
    <div className="pt-contanier bg">
      <h1 className="title is-2 is-center">List Patients</h1>
      <Search data={data} setter={setData} type="Acte" />
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
      />
    </div>
  );
}

export default Patients;
