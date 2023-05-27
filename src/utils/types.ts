export type Doc = {
  id: number;
  fullname: string;
  journalier: number;
  mensuel: number;
};
export type Acte = {
  id: number;
  nom: string;
  prenom: string;
  acte: string;
  montant: number;
  method: string;
  doc_id: number;
  date: Date | string;
};
