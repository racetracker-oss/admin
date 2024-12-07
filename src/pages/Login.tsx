import LoginForm from "../features/auth/LoginForm";


const Login = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen max-h-[70vh]">
      <h2 className="text-3xl text-lead font-bold pb-16">Sign in</h2>
      <LoginForm />
    </section>
  );
};

export default Login;
