import { Doc, Acte } from "@/utils/types";
import data from "./docs.json";
import { TableColumn } from "react-data-table-component";
import EditPatients from "@/components/tableActions/Edit";
import Delete from "@/components/tableActions/Delete";
import Edit from "@/components/tableActions/Edit";

export const cols: TableColumn<Acte>[] = [
  {
    name: "Nom",
    selector: (row) => row.nom,
    sortable: true,
    reorder: true,
  },
  {
    name: "Prénom",
    selector: (row) => row.prenom,
    sortable: true,
    reorder: true,
  },
  {
    name: "Doctor",
    selector: (row) => {
      const doc = data.find((obj) => obj.id === row.doc_id) as Doc;
      return doc.fullname;
    },
    sortable: true,
    reorder: true,
  },
  {
    name: "Acte",
    selector: (row) => row.acte,
    sortable: true,
    reorder: true,
  },
  {
    name: "Montant",
    selector: (row) => `${row.montant} DH TTC`,
    sortable: true,
    reorder: true,
  },
  {
    name: "Method",
    selector: (row) => row.method,
    sortable: true,
    reorder: true,
  },
  {
    name: "Date",
    selector: (row) => row.date as string,
    sortable: true,
    reorder: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <>
        <Edit id={row.id} type={1} />
        <Delete id={row.id} />
      </>
    ),
    sortable: true,
    reorder: true,
  },
];
