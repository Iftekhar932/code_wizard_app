import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext/UserContext";
import { FaGithubSquare, FaGooglePlusSquare } from "react-icons/fa";

const SignUp = () => {
  const { emailSignUp, collectName, githubSignIn, googleSignIn } =
    useContext(AuthContext);

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;
    emailSignUp(email, password)
      .then((res) => {
        // update profile name
        collectName(name, photoURL)
          .then(() => console.log("name set"))
          .catch((err) =>
            console.error("line 19 update profile", err.code, err.message)
          );
        console.log(res.user);
      })
      .catch((err) => console.error("signup line 12", err.code, err.message));
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((res) => console.log(res.user))
      .catch((err) => console.error("line 20 login", err.code, err.message));
  };

  const handleGithubSignIn = (e) => {
    e.preventDefault();
    githubSignIn()
      .then((res) => console.log(res.user))
      .catch((err) => console.error("line 20 login", err.code, err.message));
  };

  return (
    <div className="hero min-h-screen bg-base-200 bg-hero">
      <div className="hero-content flex-col w-2/4 lg:flex-row-reverse bg-gradient-to-r from-zinc-800 to-transparent">
        <div className="text-center lg:text-left text-zinc-100">
          <h1 className="text-5xl font-bold">Signup now!</h1>
          <p className="py-6">
            Already have an account? Login
            <Link to="/login" className="link">
              {" "}
              here
            </Link>
          </p>
        </div>
        <form
          onSubmit={handleEmailSignIn}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="PhotoURL"
                placeholder="Enter your PhotoURL"
                name="photoURL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="Enter your name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/resetPwd" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <button onClick={githubSignIn} className="btn btn-primary">
              <FaGithubSquare size="2em" className="text-zinc-100" />
              Github Sign In
            </button>
            <button onClick={handleGoogleLogin} className="btn btn-primary">
              <FaGooglePlusSquare size="2em" className="text-zinc-100" />
              Google Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
