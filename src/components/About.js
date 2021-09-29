import React from "react";

export default function About() {
  return (
    <section id="about" style={{ scrollMarginTop: "72px"}}>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I'm Chris.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a UX Designer &amp; Frontend Developer from Springboro, Ohio. I
            provide systemic design solutions—from wireframes and workflows to
            prototypes and production-ready assets for product development.
          </p>
          <div className="flex justify-center">
            <a
              href="#experience"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              View My Timeline
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Explore My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-center"
            alt="hero"
            src="./critter_coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
