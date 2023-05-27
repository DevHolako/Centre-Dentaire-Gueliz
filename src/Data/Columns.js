import doc_data from "../Data/dock-data.json";

export const columnes = [
  {
    Header: "Id",
    accessor: "id",
    disableFilters: true,
    disableSortBy: false,
  },
  {
    Header: "Nom",
    accessor: "nom",
    disableFilters: false,
    disableSortBy: false,
  },
  {
    Header: "Prénom",
    accessor: "prenom",
    disableFilters: false,
    disableSortBy: false,
  },
  {
    Header: "Doctor",
    accessor: (row) => {
      const doc = doc_data.find((obj) => obj.id === row["doc_id"]);
      return doc.fullname;
    },
    disableFilters: false,
    disableSortBy: false,
  },
  {
    Header: "Acte",
    accessor: "acte",
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: "Montant",
    accessor: "montant",
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: "Method",
    accessor: "method",
    disableFilters: true,
    disableSortBy: true,
  },
];
