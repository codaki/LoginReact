import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });


  
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <h1>Login</h1>
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
    </div>
  );
}

export default LoginPage;
