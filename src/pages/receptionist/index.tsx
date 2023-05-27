import DataTable, { createTheme } from "react-data-table-component";
import { cols } from "@/Data/dt-cols";
import data from "@/Data/dock-data.json";
import "./styles/dash.css";
import { DocStyles } from "@/styles/table/doc";
import ActeForm from "@/components/ActeForm";
createTheme("holako", {
  background: {
    default: "transparnt",
  },
});
function ReceptionistDashbord() {
  return (
    <div className="dashbord-container">
      <ActeForm />
      {/* <PatientCard method={"ajouter"} /> */}
      <div className="bg section2">
        <h2 className="title is-3">RECETTE MEDECIN</h2>
        <DataTable
          columns={cols}
          data={data}
          customStyles={DocStyles}
          defaultSortAsc
          responsive
          highlightOnHover
          theme="holako"
        />
      </div>
    </div>
  );
}

export default ReceptionistDashbord;
