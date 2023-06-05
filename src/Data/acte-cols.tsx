import { Acte } from "@/utils/types";
import { TableColumn } from "react-data-table-component";
import Delete from "@/components/tableActions/Delete";
import Edit from "@/components/tableActions/Edit";
import { store } from "@/app/store";

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
      const data = store.getState().doc.docs;
      const doc = data.find((obj) => obj.id === row.doc_id);
      if (!doc) return "Not Found";
      return doc.nomComplete;
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
    name: "Methode",
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
        <Delete id={row.id} type={1} />
      </>
    ),
    sortable: true,
    reorder: true,
  },
];
