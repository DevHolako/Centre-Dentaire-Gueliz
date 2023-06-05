import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DocSchema } from "@/modules/Doc";
import type { DocForm } from "@/modules/Doc";
import "@styles/card/index.css";
import { useAppDispatch, useAppSelector } from "@/utils/hooks/redux";
import { Createdocs, Updatedocs } from "@/app/features/docs/docSlice";
type Props = {
  method: "Ajouter" | "Modifier";
  id?: number;
};
export default function DocFrom({ method = "Ajouter", id }: Props) {
  const { docs } = useAppSelector((s) => s.doc);
  const dispatch = useAppDispatch();

  const target = docs.find((obj) => obj.id === id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DocForm>({
    resolver: zodResolver(DocSchema),
  });

  const onSubmit: SubmitHandler<DocForm> = (data) => {
    if (method === "Ajouter") {
      dispatch(Createdocs(data));
      reset();
    }
    if (method === "Modifier") {
      const Data = { id: target?.id, doc: data };
      dispatch(Updatedocs(Data));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={method === "Modifier" ? "custom_card " : "custom_card  bg"}
    >
      <h2 className="card_title">{method} un Nouveau Médecins</h2>
      <div className="inputBox">
        <input
          type="text"
          required
          {...register("nomComplete")}
          defaultValue={target?.nomComplete}
        />
        <span className="user">Nom Complete</span>
        {errors.nomComplete && <p>{errors.nomComplete?.message}</p>}
      </div>
      <button type="submit" className="btn">
        {method}
      </button>
    </form>
  );
}
