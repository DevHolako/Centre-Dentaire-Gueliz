import ActeData from "@/Data/data.json";
import { cols } from "@/Data/dt-colsfull";
import Search from "@/components/Search";
import { PatientsStyles } from "@/styles/table/patient";
import { Acte } from "@/utils/types";
import { useDebouncedState } from "@mantine/hooks";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { Navigate, useLoaderData } from "react-router-dom";

export const GetPatientByDoc = async ({ params }: any) => {
  const List: Acte[] = ActeData.filter((obj) => params.id == obj.doc_id);
  if (!List) return <Navigate to={"/dashbord"} />;
  return List;
};
function DocPatientsList() {
  const patientData = useLoaderData();
  if (!patientData) return <Navigate to={"/dashbord"} />;
  const [data, setData] = useState<Acte[]>(patientData as Acte[]);

  return (
    <div className="pt-contanier bg">
      <h1 className="title is-2 is-center">List Patients</h1>
      <Search data={data} setter={setData} />
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

export default DocPatientsList;
