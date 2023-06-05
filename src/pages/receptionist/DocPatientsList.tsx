import { cols } from "@/Data/acte-cols";
import { search } from "@/app/features/actes/acteSlice";
import { store } from "@/app/store";
import Search from "@/components/Search";
import { PatientsStyles } from "@/styles/table/patient";
import { useAppDispatch, useAppSelector } from "@/utils/hooks/redux";
import { Acte } from "@/utils/types";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { type LoaderFunction, Navigate, useLoaderData } from "react-router-dom";

export const GetPatientByDoc: LoaderFunction = async ({ params }) => {
  const data = store.getState().acte.filteredData;
  const id = params.id;
  if (!id) return null;
  const list: Acte[] = data.filter((obj) => parseInt(id) === obj.doc_id);
  if (!list.length) return null;
  return list;
};

function DocPatientsList() {
  const { status } = useAppSelector((s) => s.doc);
  const patientData = useLoaderData() as Acte[];
  const [data] = useState(patientData);
  if (!patientData) return <Navigate to={"/dashboard"} />;
  const dispatch = useAppDispatch();
  const HandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(search(e.target.value));
  };
  return (
    <div className="pt-contanier bg">
      <h1 className="title is-2 is-center">Liste Patients</h1>
      <Search fn={HandleSearch} />
      <DataTable
        data={data}
        columns={cols}
        defaultSortAsc
        pagination
        responsive
        highlightOnHover
        customStyles={PatientsStyles}
        theme="holako"
        progressPending={status === "pending"}
      />
    </div>
  );
}

export default DocPatientsList;
