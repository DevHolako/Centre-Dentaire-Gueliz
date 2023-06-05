import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "@/modules/Users";
import type { UserForm } from "@/modules/Users";
import "@styles/card/index.css";
import { useAppDispatch, useAppSelector } from "@/utils/hooks/redux";
import { CreateUser, UpdateUser } from "@/app/features/users/userSlice";
type Props = {
  method: "Ajouter" | "Modifier";
  id?: number;
};

const Role = ["Admin", "User"];
export default function ReceForm({ method = "Ajouter", id }: Props) {
  const { users } = useAppSelector((s) => s.user);
  const dispatch = useAppDispatch();
  const target = users.find((obj) => obj.id === id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit: SubmitHandler<UserForm> = (data) => {
    if (method === "Ajouter") {
      dispatch(CreateUser(data));
    }
    if (method === "Modifier") {
      const Data = { id: target?.id, user: data };
      dispatch(UpdateUser(Data));
    }
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
      <div className="inputBox">
        <input
          type="text"
          required
          {...register("login")}
          defaultValue={target?.login}
          autoComplete="username"
        />
        <span className="user">Login</span>
        {errors.login && <p>{errors.login?.message}</p>}
      </div>
      <div className="inputBox">
        <input
          type="password"
          required
          {...register("password")}
          defaultValue={target?.password}
          autoComplete="current-password"
        />
        <span className="user">Mote de pass</span>
        {errors.password && <p>{errors.password?.message}</p>}
      </div>
      <div className="inputBox">
        <select
          required
          {...register("isAdmin")}
          defaultValue={!target ? "" : target?.isAdmin ? 1 : 0}
        >
          <option value="" disabled></option>
          <optgroup label="Role">
            {Role.map((isAdmin) => (
              <option key={isAdmin} value={isAdmin === "Admin" ? 1 : 0}>
                {isAdmin}
              </option>
            ))}
          </optgroup>
        </select>
        <span className="user">Role</span>
        {errors.isAdmin && <p>{errors.isAdmin?.message}</p>}
      </div>
      <button type="submit" className="btn">
        {method}
      </button>
    </form>
  );
}
