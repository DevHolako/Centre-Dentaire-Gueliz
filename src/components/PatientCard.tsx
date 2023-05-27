import React, { useState } from "react";
const PAYMENT_METHODS = ["card", "chéque", "espece"];
import docs from "../Data/dock-data.json";
import "@styles/card/index.css";
import { Acte } from "@/utils/types";

interface PatientCardProps {
  targetPatient: Acte;
  method: "Modifier" | "ajouter";
}

const ActeCard: React.FC<PatientCardProps> = ({ targetPatient, method }) => {
  const [acte, setActe] = useState<Acte>(
    targetPatient || {
      nom: "",
      acte: "",
      date: "",
      doc_id: 0,
      method: "",
      prenom: "",
      montant: "",
    }
  );

  const Title =
    method === "ajouter" ? "AJOUTER UN NOUVEAU ACTE" : "MODIFIER UN ACTE";

  const handleSubmit = () => {
    console.log(acte);
  };

  return (
    <>
      <div className="custom_card bg">
        <h2 className="card_title">{Title}</h2>
        <div className="inputBox">
          <input
            type="text"
            required
            value={acte.nom}
            onChange={(e) => {
              setActe({ ...acte, nom: e.target.value });
            }}
          />
          <span className="user">Nom</span>
        </div>
        <div className="inputBox">
          <input
            type="text"
            required
            value={acte.prenom}
            onChange={(e) => {
              setActe({ ...acte, prenom: e.target.value });
            }}
          />
          <span className="user">Prenom</span>
        </div>

        <div className="inputBox">
          <input
            type="text"
            required
            value={acte.acte}
            onChange={(e) => {
              setActe({ ...acte, acte: e.target.value });
            }}
          />
          <span>Acte</span>
        </div>

        <div className="inputBox">
          <input
            type="number"
            required
            value={acte.montant}
            onChange={(e) => {
              setActe({ ...acte, montant: +e.target.value });
            }}
          />
          <span>Montan</span>
        </div>

        <div className="inputBox">
          <input
            type="date"
            className="custom-date-input"
            onChange={(e) => {
              const selectedDate = e.target.valueAsDate;
              const formattedDate = selectedDate
                ? selectedDate.toLocaleDateString()
                : "";

              setActe({
                ...acte,
                date: formattedDate,
              });
            }}
          ></input>
          <span>Date</span>
        </div>

        <div className="inputBox">
          <select
            required
            value={acte.method}
            onChange={(e) => setActe({ ...acte, method: e.target.value })}
          >
            <optgroup label="Méthodes de payement">
              {PAYMENT_METHODS.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </optgroup>
          </select>
          <span>method</span>
        </div>

        <div className="inputBox">
          <select
            required
            value={acte.doc_id}
            onChange={(e) => setActe({ ...acte, doc_id: +e.target.value })}
          >
            <optgroup label="Medecin">
              {docs.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.fullname}
                </option>
              ))}
            </optgroup>
          </select>
          <span>Medecin</span>
        </div>
        <button className="enter" onClick={handleSubmit}>
          {method}
        </button>
      </div>
    </>
  );
};

export default ActeCard;
