import React from "react";
import { Link } from "react-router-dom";

const ResetForm = () => {
  return (
    <div className="hero min-h-screen bg-base-200 bg-hero">
      <div className="hero-content flex-col w-2/4 lg:flex-row-reverse bg-gradient-to-r from-zinc-800 to-transparent">
        <div className="text-center lg:text-left text-zinc-100">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Don't have an account? sign up <Link to="/signup">here</Link>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send Reset Link</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetForm;
