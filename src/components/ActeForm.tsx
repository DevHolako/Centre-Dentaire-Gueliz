import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActeSchema } from "@/modules/Acte";
import type { ActeFrom } from "@/modules/Acte";
import "@styles/card/index.css";
import { useAppDispatch, useAppSelector } from "@/utils/hooks/redux";
import {
  CreateActe,
  GetAllActes,
  UpdateActe,
} from "@/app/features/actes/acteSlice";
import { Acte } from "@/utils/types";
import { GetAllDocs } from "@/app/features/docs/docSlice";
const PAYMENT_METHODS = ["card", "chéque", "espece"];

type Props = {
  method: "Ajouter" | "Modifier";
  id?: number;
};
export default function ActeForm({ method = "Ajouter", id }: Props) {
  const { Actes } = useAppSelector((s) => s.acte);
  const { docs } = useAppSelector((s) => s.doc);
  const dispatch = useAppDispatch();
  const target = Actes.find((obj) => obj.id === id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ActeFrom>({
    resolver: zodResolver(ActeSchema),
  });

  const onSubmit: SubmitHandler<ActeFrom> = async (data) => {
    if (method === "Ajouter") {
      console.log("Ajouter");
      await dispatch(CreateActe(data as Acte));
      await dispatch(GetAllActes());
      await dispatch(GetAllDocs());
      reset();
    }
    if (method === "Modifier") {
      const acte = data;
      const Data = { id: target?.id, acte };
      dispatch(UpdateActe(Data));
      dispatch(GetAllActes());
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={method === "Modifier" ? "custom_card " : "custom_card  bg"}
    >
      <h2 className="card_title">Ajouter un Nouveau Acte</h2>
      <div className="inputBox">
        <input
          type="text"
          required
          {...register("nom")}
          defaultValue={target ? target.nom : ""}
        />
        <span className="user">Nom</span>
        {errors.nom && <p>{errors.nom?.message}</p>}
      </div>
      <div className="inputBox">
        <input
          type="text"
          required
          {...register("prenom")}
          defaultValue={target ? target.prenom : ""}
        />
        <span className="user">Prenom</span>
        {errors.prenom && <p>{errors.prenom?.message}</p>}
      </div>
      <div className="inputBox">
        <input
          type="text"
          required
          {...register("acte")}
          defaultValue={target ? target.acte : ""}
        />
        <span className="user">Acte</span>
        {errors.acte && <p>{errors.acte?.message}</p>}
      </div>
      <div className="inputBox">
        <input
          type="number"
          required
          {...register("montant")}
          defaultValue={target ? target.montant : ""}
        />
        <span className="user">Montant</span>
        {errors.montant && <p>{errors.montant?.message}</p>}
      </div>
      <div className="inputBox">
        <input
          type="date"
          placeholder=""
          required
          {...register("date")}
          defaultValue={target ? target.date : ""}
        />
        <span className="user">Date</span>
        {errors.date && <p>{errors.date?.message}</p>}
      </div>
      <div className="inputBox">
        <select
          required
          {...register("method")}
          defaultValue={!target ? "" : target.method}
        >
          <option defaultValue="" disabled></option>
          <optgroup label="Méthodes de payement">
            {PAYMENT_METHODS.map((method) => (
              <option key={method} defaultValue={method}>
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
          defaultValue={!target ? "" : target.doc_id}
        >
          <option defaultValue="" disabled></option>
          <optgroup label="Medecin">
            {docs.map((doc) => {
              return (
                <option key={doc.id} value={doc.id}>
                  {doc.nomComplete}
                </option>
              );
            })}
          </optgroup>
        </select>
        <span>Medcien</span>
        {errors.doc_id && <p>{errors.doc_id?.message}</p>}
      </div>

      <button type="submit" className="btn">
        {isSubmitting ? "submiting ..." : method}
      </button>
    </form>
  );
}
