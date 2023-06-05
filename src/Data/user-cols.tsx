import Delete from "@/components/tableActions/Delete";
import Edit from "@/components/tableActions/Edit";
import { User } from "@/utils/types";
import type { TableColumn } from "react-data-table-component";

export const cols: TableColumn<User>[] = [
  {
    name: "Nom Complete",
    selector: (row) => row.nomComplete,
    sortable: true,
    reorder: true,
  },
  {
    name: "Login",
    selector: (row) => `${row.login}`,
    sortable: true,
    reorder: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <>
        <Edit id={row.id} type={2} />
        <Delete id={row.id} type={3} />
      </>
    ),
    sortable: true,
    reorder: true,
  },
];
