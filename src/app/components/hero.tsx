import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center px-6 overflow-hidden">
      {/* Subtle Particle Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900 opacity-90"></div>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="particle-container">
            {[...Array(150)].map((_, i) => (
              <div
                key={i}
                className="particle bg-blue-500 opacity-20 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  animationDuration: `${Math.random() * 5 + 3}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Text */}
        <div className="lg:col-span-7 space-y-6">
          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white font-serif">
            Manish Poudel
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-300 font-serif">
            <span>Software Developer</span> /{" "}
            <span>Software Facilitator</span>
          </h2>

          {/* Tagline */}
          <div className="text-sm text-gray-400 font-light tracking-wide mt-0">
            <span className="text-grey-50">Flutter</span> |{" "}
            <span className="text-grey-500">Android Native</span> |{" "}
            <span className="text-grey-500">LLM apps</span> |{" "}
            <span className="text-grey-500">AI Enthusiast</span> |{" "}
            <span className="text-grey-500">Web apps</span>
          </div>

          {/* Stylized Quote */}
          <blockquote className="relative bg-gradient-to-r from-gray-800 to-gray-700 bg-opacity-50 p-6 rounded-lg shadow-lg mt-16 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 opacity-20 blur-md rounded-lg"></div>
            <span className="text-5xl text-red-500 absolute -top-6 left-4">“</span>
            <p className="text-lg text-gray-300 font-medium leading-relaxed relative z-10">
              I see the rise of AI and modern development tools inevitably
              shifting us from pure coding specialization to becoming more
              multidimensional—facilitators who help bring project ideas to
              life. To ride this tide, I’ve coined a term and decided to call
              myself a{" "}
              <span className="font-semibold text-red-500">
                Software Facilitator
              </span>
              —someone who facilitates project ideas by leveraging available
              tools to quickly and efficiently turn stakeholder visions into
              reality.
            </p>
            <span className="text-5xl text-red-500 absolute -bottom-6 right-4">”</span>
          </blockquote>

          {/* Buttons */}
          <div className="flex space-x-4 pt-4">
            <a
              href="/Manish_Resume.pdf"
              download
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center space-x-2 transition transform hover:scale-105 shadow-lg font-serif"
            >
              <span>Download Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4 4m0 0l4-4m-4 4V4"
                />
              </svg>
            </a>
            <a
              href="#works"
              className="border border-white text-white hover:bg-red-600 hover:text-white px-6 py-3 rounded-full text-sm font-medium flex items-center space-x-2 transition transform hover:scale-105 shadow-lg font-serif"
            >
              <span>View My Works</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative">
            {/* Scattered Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-transparent rounded-full blur-2xl opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-transparent to-transparent rounded-full blur-[120px] opacity-10"></div>
            <div className="bg-gray-800 p-1 rounded-full shadow-md">
              <Image
                src="manish.png"
                alt="Manish Poudel"
                width={300}
                height={300}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;