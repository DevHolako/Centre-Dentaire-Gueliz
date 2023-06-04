import { cols } from "@/Data/acte-cols";
import Search from "@/components/Search";
import { PatientsStyles } from "@/styles/table/patient";
import { Acte } from "@/utils/types";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { type LoaderFunction, Navigate, useLoaderData } from "react-router-dom";
import acteData from "@/Data/actes.json";

export const GetPatientByDoc: LoaderFunction = async ({ params }) => {
  const id = params.id;
  if (!id) return null;
  const list: Acte[] = acteData.filter((obj) => parseInt(id) === obj.doc_id);
  if (!list.length) return null;
  return list;
};

function DocPatientsList() {
  const patientData = useLoaderData() as Acte[];
  const [data, setData] = useState(patientData);
  if (!patientData) return <Navigate to={"/dashboard"} />;
  return (
    <div className="pt-contanier bg">
      <h1 className="title is-2 is-center">List Patients</h1>
      <Search data={data} setter={setData} type="Acte" />
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
