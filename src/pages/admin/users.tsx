import Search from "@/components/Search";
import { useState } from "react";
import DataTable from "react-data-table-component";
import UsersData from "@/Data/users.json";
import { PatientsStyles } from "@/styles/table/patient";
import { cols } from "@/Data/user-cols";
import { User } from "@/utils/types";
function Users() {
  const [data, setData] = useState<User[]>(UsersData);

  return (
    <div className="pt-contanier bg">
      <h1 className="title is-2 is-center">List des utilisateurs</h1>
      <Search data={data} setter={setData} type="User" />
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

export default Users;
