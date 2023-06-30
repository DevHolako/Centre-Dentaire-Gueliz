import DataTable from "react-data-table-component";
import { cols } from "@/Data/acte-cols";
import "./styles/patients.css";
import { PatientsStyles } from "@/styles/table/patient";
import Search from "@/components/Search";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/utils/hooks/redux";
import { GetAllActes, search } from "@/app/features/actes/acteSlice";
import { GetAllDocs } from "@/app/features/docs/docSlice";
function Patients() {
  const { filteredData } = useAppSelector((s) => s.acte);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetAllDocs());
    dispatch(GetAllActes());
  }, []);

  const HandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(search(e.target.value));
  };
  return (
    <div className="pt-contanier bg">
      <h1 className="title is-2 is-center">Liste Patients</h1>
      <Search fn={HandleSearch} />
      <div className="arrows">
        <div className="scroll-left-arrow"></div>
        <div className="scroll-rghit-arrow"></div>
      </div>
      <DataTable
        data={filteredData}
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
