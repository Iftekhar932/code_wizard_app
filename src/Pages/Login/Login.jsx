import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext/UserContext";
import { FaGithubSquare, FaGooglePlusSquare } from "react-icons/fa";

const Login = () => {
  const { emailLogIn, githubSignIn, googleSignIn } = useContext(AuthContext);

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    emailLogIn()
      .then((res) => console.log(res.user))
      .catch((err) => console.error("login line 12", err.code, err.message));
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((res) => console.log(res.user))
      .catch((err) => console.error("line 20 login", err.code, err.message));
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
            <button className="btn btn-primary " onClick={githubSignIn}>
              <FaGithubSquare size="2em" className="text-zinc-100" />
              Github Sign In
            </button>
            <button onClick={googleSignIn} className="btn btn-primary">
              <FaGooglePlusSquare size="2em" className="text-zinc-100" />
              Google Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
