import { userData } from "@/auth/utils";
import { ProfileFrom, ProfileSchema } from "@/modules/Profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
function Settings() {
  const user = userData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFrom>({
    resolver: zodResolver(ProfileSchema),
  });

  const onSubmit: SubmitHandler<ProfileFrom> = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="custom_card bg">
      <h2 className="card_title">Profil</h2>

      <div className="inputBox">
        <input
          type="text"
          required
          {...register("nomComplete")}
          defaultValue={user?.nomComplete}
        />
        <span className="user">Nom Complete</span>
        {errors.nomComplete && <p>{errors.nomComplete?.message}</p>}
      </div>

      <div className="inputBox">
        <input
          type="text"
          required
          {...register("login")}
          defaultValue={user?.login}
        />
        <span className="user">Login</span>
        {errors.login && <p>{errors.login?.message}</p>}
      </div>

      <div className="inputBox">
        <input
          type="password"
          required
          {...register("mdpA")}
          autoComplete="current-password"
        />
        <span className="user">Mot de pass actuel</span>
        {errors.mdpA && <p>{errors.mdpA?.message}</p>}
      </div>

      <div className="inputBox">
        <input type="password" required {...register("Nmdp")} />
        <span className="user">Nouveau mot de passe</span>
        {errors.Nmdp && <p>{errors.Nmdp?.message}</p>}
      </div>

      <div className="inputBox">
        <input type="password" required {...register("Cmdp")} />
        <span className="user">Confirmation de mot de passe</span>
        {errors.Cmdp && <p>{errors.Cmdp?.message}</p>}
      </div>

      <button className="btn">Modifier</button>
    </form>
  );
}

export default Settings;
