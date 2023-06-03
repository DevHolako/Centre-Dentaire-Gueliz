import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import "@styles/login/index.css";
import { LoginFrom, LoginSchema } from "@/modules/Login";
import { zodResolver } from "@hookform/resolvers/zod";
import { isLogin, useRole } from "@/auth/utils";
function Login() {
  const navto = useNavigate();
  const role = useRole();
  useEffect(() => {
    if (isLogin()) {
      if (role == "admin") return navto("/panel");
      if (role == "rece") return navto("/dashboard");
    }
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFrom>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginFrom> = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    if (data.username === "holako") {
      localStorage.setItem("role", "rece");
      navto("/dashboard");
    }
    if (data.username === "admin") {
      localStorage.setItem("role", "admin");
      navto("/panel");
    }
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
            <input type="text" required {...register("username")} />
            <span className="user">username</span>
            {errors.username && <p>{errors.username?.message}</p>}
          </div>
          <div className="inputBox">
            <input type="password" required {...register("password")} />
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
