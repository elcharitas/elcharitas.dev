import React from "react";

const Hero = () => (
  <div className="pt-12 pb-28 md:pb-72">
    <div className="container px-4 mx-auto">
      <div className="mx-auto text-center max-w-3xl">
        <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-white bg-violet-500 uppercase rounded-9xl">
          Hey There👋 My name is Jonathan Irhodia
        </span>
        <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight text-white font-bold tracking-tighter">
          I'm TheGhostMage 💀
        </h1>
        <p className="mb-8 mx-auto text-lg md:text-xl text-coolGray-400 font-medium max-w-3xl">
          A charismatic design centric software developer with a passion for
          working on creative and innovative projects.
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
            <a
              className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-violet-50 font-medium text-center bg-violet-500 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 rounded-md shadow-sm"
              href="#"
            >
              Get in Touch
            </a>
          </div>
          <div className="w-full md:w-auto py-1 md:py-0">
            <a
              className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-100 font-medium text-center bg-coolGray-700 hover:bg-coolGray-800 focus:ring-2 focus:ring-coolGray-700 focus:ring-opacity-50 rounded-md shadow-sm"
              href="#"
            >
              👀 View Links
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
