export type Doc = {
  id: number;
  nomComplete: string;
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
  date: string;
};

export type User = {
  id: number;
  nomComplete: string;
  login: string;
  mdp: string;
  isAdmin: boolean;
};
