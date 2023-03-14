import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext/UserContext";

const Login = () => {
  const { emailLogIn, githubSignIn } = useContext(AuthContext);

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    emailLogIn()
      .then((res) => console.log(res.user))
      .catch((err) => console.error("login line 12", err.code, err.message));
  };

  return (
    <div className="hero min-h-screen bg-base-200 bg-hero bg-no-repeat bg-cover bg-center bg-fixed bg-loginBgImg">
      <div className="hero-content flex-col w-2/4 lg:flex-row-reverse bg-gradient-to-r from-zinc-800 to-transparent">
        <div className="text-center lg:text-left text-zinc-100">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Don't have an account? sign up{" "}
            <Link className="link" to="/signup">
              here
            </Link>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onClick={handleEmailSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <button className="btn btn-primary" onClick={githubSignIn}>
            Github Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
