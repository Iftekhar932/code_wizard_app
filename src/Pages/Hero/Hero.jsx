import React from "react";
import { ReactTyped } from "react-typed";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import HeroDesign from "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        {/* 🟪 animation component  🟪*/}
        <DotLottieReact
          className="fixed blur-sm mix-blend-hard-light w-screen"
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

            {/* 🟪 type animation  🟪*/}
            <ReactTyped
              className="md:text-5xl sm:text-4xl text-xl md:pl-4 pl-2"
              strings={[
                "Search <strong>Problems</strong>",
                "Make <strong>Solutions</strong>",
                "Help <strong>solve</strong>",
              ]}
              typeSpeed={100}
              backSpeed={100}
              loop
            />
          </div>
        </div>
      </div>
      {/* 🟪 card 🟪 */}
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
        <div className="cardDesign card h-[500px] px-4 w-96 shadow-xl border border-base-200 hover:bg-base-100 duration-200">
          <figure>
            <img
              src="https://i.ibb.co.com/qYXgtVB/code-svgrepo-com.png"
              alt=""
              border="0"
              className=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title capitalize">Hunt Problems</h2>
            <p>
              Help people solve problems, find the solution for the problem
              you're facing, share with others how you went through it.
            </p>
          </div>
        </div>
        <div className="cardDesign card h-[500px] px-4 w-96 shadow-xl border border-base-200 hover:bg-base-100 duration-200">
          <figure>
            <img
              src="https://i.ibb.co.com/THL5X0R/antigravity-technology-with-elements-min.png"
              alt="antigravity-technology-with-elements-min"
              border="0"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title capitalize">
              Connect With The Community
            </h2>
            <p>
              Share your knowledge, learn from others, and collaborate on
              innovative solutions to real-world challenges within the AWS
              community.
            </p>
          </div>
        </div>
        <div className="cardDesign card h-[500px] px-4 w-96 shadow-xl border border-base-200 hover:bg-base-100 duration-200">
          <figure>
            <img
              src="https://i.ibb.co.com/SntYJdH/rb-2148796510-min.png"
              alt="rb-2148796510-min"
              border="0"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title capitalize">Explore</h2>
            <p>
              Tinker with the latest technologies, a challenging but rewarding
              experience, requiring a combination of technical expertise,
              creativity, and willingness.
            </p>
          </div>
        </div>
      </div>
      <a
        className="bg-base-200 block w-full"
        href="https://www.freepik.com/free-vector/antigravity-technology-with-elements_4082368.htm#fromView=search&page=1&position=8&uuid=ff047f2d-ef1a-4e78-be6f-15425b507482"
      >
        Image by freepik
      </a>
    </>
  );
};

export default Hero;
