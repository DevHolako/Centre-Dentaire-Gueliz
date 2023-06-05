import Search from "@/components/Search";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
// import UsersData from "@/Data/users.json";
import { PatientsStyles } from "@/styles/table/patient";
import { cols } from "@/Data/user-cols";
import { useAppDispatch, useAppSelector } from "@/utils/hooks/redux";
import { GetAllUsers, search } from "@/app/features/users/userSlice";

function Users() {
  const { filteredData } = useAppSelector((s) => s.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetAllUsers());
  }, []);

  const HandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(search(e.target.value));
  };
  return (
    <div className="pt-contanier bg">
      <h1 className="title is-2 is-center">Liste des utilisateurs</h1>
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

export default Users;
