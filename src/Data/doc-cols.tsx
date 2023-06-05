// import Details from "../components/tableActions/details/Details";
import Details from "@/components/tableActions/details/Details";
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
    name: "Detail",
    cell: (row) => <Details to={`doc/${row.id}`} />,
    reorder: true,
  },
];
