// import Details from "../components/tableActions/details/Details";
import Delete from "@/components/tableActions/Delete";
import Edit from "@/components/tableActions/Edit";
import { Doc } from "@/utils/types";
import type { TableColumn } from "react-data-table-component";

export const cols: TableColumn<Doc>[] = [
  {
    name: "Nom complet",
    selector: (row) => row.nomComplete,
    sortable: true,
    reorder: true,
  },
  {
    name: "Journalier",
    selector: (row) => `${row.journalier} DH TTC `,
    sortable: true,
    reorder: true,
  },
  {
    name: "Mensuel",
    selector: (row) => `${row.mensuel} DH TTC `,
    sortable: true,
    reorder: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <>
        <Edit id={row.id} type={3} />
        <Delete id={row.id} type={2} />
      </>
    ),
    sortable: true,
    reorder: true,
  },
];
