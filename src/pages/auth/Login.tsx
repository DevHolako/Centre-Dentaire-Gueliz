import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import "@styles/login/index.css";
import { LoginFrom, LoginSchema } from "@/modules/Login";
import { zodResolver } from "@hookform/resolvers/zod";
import { isLogin, useRole } from "@/auth/utils";
import { LoginRequest } from "@/api/requests";
function Login() {
  const navto = useNavigate();
  const role = useRole();
  useEffect(() => {
    if (isLogin()) {
      if (role == "admin") return navto("/panel");
      if (role == "rece") return navto("/dashboard");
    }
  }, [role, navto]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFrom>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginFrom> = async (data) => {
    await LoginRequest(data);
  };

  return (
    <main className="container login-warrper">
      <header className="container">
        <h1 className="is-center card_title">
          Cabinet <span>Dentaire</span> Gueliz
        </h1>
      </header>
      <section>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="custom_card bg login-form"
        >
          <h2 className="card_title">Login</h2>
          <div className="inputBox">
            <input
              type="text"
              required
              {...register("login")}
              autoComplete="login"
            />
            <span className="user">login</span>
            {errors.login && <p>{errors.login?.message}</p>}
          </div>
          <div className="inputBox">
            <input
              type="password"
              required
              {...register("password")}
              autoComplete="current-password"
            />
            <span className="user">password</span>
            {errors.password && <p>{errors.password?.message}</p>}
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
