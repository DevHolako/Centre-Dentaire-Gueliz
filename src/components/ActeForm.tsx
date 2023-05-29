import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActeSchema } from "@/modules/Acte";
import type { ActeFrom } from "@/modules/Acte";
import docs from "@/Data/dock-data.json";
import data from "@/Data/data.json";
import "@styles/card/index.css";
import { Acte } from "@/utils/types";
const PAYMENT_METHODS = ["card", "chéque", "espece"];

type Props = {
  method: "Ajouter" | "Modifier";
  id?: number;
};
export default function ActeForm({ method = "Ajouter", id }: Props) {
  const target = id ? (data.find((obj) => obj.id === id) as Acte) : null;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ActeFrom>({
    resolver: zodResolver(ActeSchema),
  });

  const onSubmit: SubmitHandler<ActeFrom> = (data) => {
    console.log(data);
  };

  console.log(isValid);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={method === "Modifier" ? "custom_card " : "custom_card  bg"}
    >
      <h2 className="card_title">Ajouter un nouvel Acte</h2>
      <div className="inputBox">
        <input
          type="text"
          required
          {...register("nom")}
          value={target ? target.nom : ""}
        />
        <span className="user">Nom</span>
        {errors.nom && <p>{errors.nom?.message}</p>}
      </div>
      <div className="inputBox">
        <input
          type="text"
          required
          {...register("prenom")}
          value={target ? target.prenom : ""}
        />
        <span className="user">Prenom</span>
        {errors.prenom && <p>{errors.prenom?.message}</p>}
      </div>
      <div className="inputBox">
        <input
          type="text"
          required
          {...register("acte")}
          value={target ? target.acte : ""}
        />
        <span className="user">Acte</span>
        {errors.acte && <p>{errors.acte?.message}</p>}
      </div>
      <div className="inputBox">
        <input
          type="number"
          required
          {...register("montan")}
          value={target ? target.montant : ""}
        />
        <span className="user">Montan</span>
        {errors.montan && <p>{errors.montan?.message}</p>}
      </div>
      <div className="inputBox">
        <input
          type="date"
          placeholder=""
          required
          {...register("date")}
          value={target ? target.date : ""}
        />
        <span className="user">Date</span>
        {errors.date && <p>{errors.date?.message}</p>}
      </div>
      <div className="inputBox">
        <select
          required
          {...register("method")}
          value={!target ? "" : target.method}
        >
          <option value="" disabled></option>
          <optgroup label="Méthodes de payement">
            {PAYMENT_METHODS.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </optgroup>
        </select>
        <span>method</span>
        {errors.method && <p>{errors.method?.message}</p>}
      </div>
      <div className="inputBox">
        <select
          required
          {...register("doc_id")}
          value={!target ? "" : target.doc_id}
        >
          <option value="" disabled></option>
          <optgroup label="Medecin">
            {docs.map((doc) => {
              return (
                <option key={doc.id} value={doc.id}>
                  {doc.fullname}
                </option>
              );
            })}
          </optgroup>
        </select>
        <span>Medcien</span>
        {errors.doc_id && <p>{errors.doc_id?.message}</p>}
      </div>

      <button type="submit" className="btn">
        {method}
      </button>
    </form>
  );
}
