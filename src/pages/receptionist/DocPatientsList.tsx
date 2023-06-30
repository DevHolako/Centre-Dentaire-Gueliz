import { cols } from "@/Data/acte-cols";
import { search } from "@/app/features/actes/acteSlice";
import Search from "@/components/Search";
import { PatientsStyles } from "@/styles/table/patient";
import { useAppDispatch, useAppSelector } from "@/utils/hooks/redux";
import DataTable from "react-data-table-component";
import { Navigate, useParams } from "react-router-dom";

function DocPatientsList() {
  const { id } = useParams();
  if (!id) return <Navigate to={"/dashboard"} />;

  const dispatch = useAppDispatch();

  const { filteredData } = useAppSelector((s) => s.acte);
  const patientData = filteredData.filter((obj) => parseInt(id) === obj.doc_id);
  if (!patientData) return <Navigate to={"/dashboard"} />;
  const HandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(search(e.target.value));
  };

  return (
    <div className="pt-contanier bg">
      <h1 className="title is-2 is-center">Liste Patients</h1>
      <Search fn={HandleSearch} />
      <DataTable
        data={patientData}
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

export default DocPatientsList;
