import Search from "@/components/Search";
import DataTable from "react-data-table-component";
import { PatientsStyles } from "@/styles/table/patient";
import { useEffect } from "react";
import { cols } from "@/Data/docs-cols";
import { useAppDispatch, useAppSelector } from "@/utils/hooks/redux";
import { GetAllDocs, search } from "@/app/features/docs/docSlice";
function Docs() {
  const { filteredData } = useAppSelector((s) => s.doc);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetAllDocs());
  }, []);

  const HandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(search(e.target.value));
  };
  return (
    <div className="pt-contanier bg">
      <h1 className="title is-2 is-center">Liste des Médecins</h1>
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
        theme="holako"
      />
    </div>
  );
}

export default Docs;
