import DataTable, { createTheme } from "react-data-table-component";
import { cols } from "@/Data/doc-cols";
import "./styles/dash.css";
import { DocStyles } from "@/styles/table/doc";
import ActeForm from "@/components/ActeForm";
import { useAppDispatch, useAppSelector } from "@/utils/hooks/redux";
import { randomId } from "@mantine/hooks";
import { useEffect } from "react";
import { GetAllDocs } from "@/app/features/docs/docSlice";
import { GetAllActes } from "@/app/features/actes/acteSlice";
createTheme("holako", {
  background: {
    default: "transparnt",
  },
});
function ReceptionistDashboard() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetAllDocs());
    dispatch(GetAllActes());
  }, [dispatch]);

  const { docs } = useAppSelector((s) => s.doc);
  return (
    <div className="dashboard-container">
      <ActeForm method="Ajouter" key={randomId()} />
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
          key={randomId()}
          pagination
          progressPending={docs.length === 0}
        />
      </div>
    </div>
  );
}

export default ReceptionistDashboard;
