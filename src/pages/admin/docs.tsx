import Search from "@/components/Search";
import { useState } from "react";
import DataTable from "react-data-table-component";
import DocsData from "@/Data/docs.json";
import { PatientsStyles } from "@/styles/table/patient";
import { Doc } from "@/utils/types";
import { cols } from "@/Data/docs-cols";
function Docs() {
  const [data, setData] = useState<Doc[]>(DocsData);

  return (
    <div className="pt-contanier bg">
      <h1 className="title is-2 is-center">List des utilisateurs</h1>
      <Search data={data} setter={setData} type="Doc" />
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
        theme="holako"
      />
    </div>
  );
}

export default Docs;
