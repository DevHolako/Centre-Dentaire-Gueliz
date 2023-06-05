import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "@/modules/Users";
import type { UserForm } from "@/modules/Users";
import "@styles/card/index.css";
import data from "@/Data/docs.json";
type Props = {
  method: "Ajouter" | "Modifier";
  id?: number;
};
export default function UserFrom({ method = "Ajouter", id }: Props) {
  const target = data.find((obj) => obj.id === id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit: SubmitHandler<UserForm> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={method === "Modifier" ? "custom_card " : "custom_card  bg"}
    >
      <h2 className="card_title">{method} un Nouveau utilisateur</h2>
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
