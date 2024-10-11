import React from "react";
import { ReactTyped } from "react-typed";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <DotLottieReact
          className="fixed blur-sm"
          src="https://lottie.host/7585aec3-0a17-44d7-b5de-e8b3362475c9/nfciYs6ZCs.json"
          loop
          autoplay
        />
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello, Majestic Techie</h1>
            <p className="py-6 text-xl text-balance font-bold">
              Welcome to our website, How can we make our Techie have a majestic
              tour?
            </p>
            <ReactTyped
              className="md:text-5xl sm:text-4xl text-xl md:pl-4 pl-2"
              strings={[
                "Search <strong>Problem</strong>",
                "Make <strong>Solutions</strong>",
                "Help <strong>solve</strong>",
              ]}
              typeSpeed={100}
              backSpeed={100}
              loop
            />
          </div>
        </div>

        <br />
      </div>
    </>
  );
};

export default Hero;
