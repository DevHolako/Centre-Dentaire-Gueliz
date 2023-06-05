import DataTable, { createTheme } from "react-data-table-component";
import { cols } from "@/Data/doc-cols";
import "./styles/dash.css";
import { DocStyles } from "@/styles/table/doc";
import ActeForm from "@/components/ActeForm";
import { useAppSelector } from "@/utils/hooks/redux";
createTheme("holako", {
  background: {
    default: "transparnt",
  },
});
function ReceptionistDashboard() {
  const { docs } = useAppSelector((s) => s.doc);
  return (
    <div className="dashboard-container">
      <ActeForm method="Ajouter" />
      <div className="bg section2">
        <h2 className="title is-3">RECETTE MEDECIN</h2>
        <DataTable
          columns={cols}
          data={docs}
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

export default ReceptionistDashboard;
