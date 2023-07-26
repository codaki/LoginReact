import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link ,useNavigate} from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-600 max-w-md w-full p-10 rounded-md">
      {registerErrors.map((error, i) => (
        <div key={i} className="bg-red-500 p-2 text-white">
          {error}
        </div>
      ))}
        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border m-3 "
            placeholder="Usuario"
          />
          {errors.username && (
            <p className="text-red-500">El usuario es requerido</p>
          )}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border m-3"
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className="text-red-500">La contraseña es requerida</p>
          )}
          <button type="submit">Login</button>
        </form>
        <p className="flex gap-x-2 justify-between mt-3">
            No tienes una cuenta<Link to="/register" className =" text-sky-500">Registrarse</Link>
        </p>
      </div>
    </div>
  );
}


export default LoginPage;
