import React from "react";
import SideDrawer from "../Shared/SideDrawer/SideDrawer";

const Hero = () => {
  return (
    <>
      <SideDrawer />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello, Majestic traveller</h1>
            <p className="py-6">
              Welcome to our website, How can we make our traveller have a
              majestic tour?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
