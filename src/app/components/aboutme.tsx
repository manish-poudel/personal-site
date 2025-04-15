"use client";

import React from "react";

const sections = [
  {
    title: "The Beginning",
    content: (
      <>
        I have been developing apps for over five years across multiple domains,
        creating solutions for users while working for companies — and often
        for my own sake. It started with learning Java to develop a simple
        Android game called{" "}
        <a href="LINK_TO_THUMBOMB" className="text-red-500 hover:underline">
          <strong>ThumbBomb</strong>
        </a>{" "}
        with one of my brothers. That fun and creative experience propelled me
        into this journey.
      </>
    ),
  },
  {
    title: "Breakthrough",
    content: (
      <>
        The pivotal moment was developing a telemedicine app called{" "}
        <a href="LINK_TO_TALKMYDOC" className="text-red-500 hover:underline">
          <strong>Talk My Doc</strong>
        </a>
        , even before COVID-19. We freshly learned Flutter to build for both
        iOS and Android, which helped us move fast and adapt to the changing
        needs of patients and doctors.
      </>
    ),
  },
  {
    title: "Startup Experience",
    content: (
      <>
        To support the app, we registered a company and I personally handled
        contracts with banks, tax procedures, and third-party integrations like{" "}
        <strong>eSewa</strong>. Although the app didn’t succeed commercially,
        it taught me valuable lessons about solving real-world problems and
        building scalable systems.
      </>
    ),
  },
  {
    title: "Professional Work",
    content: (
      <>
        At <strong>Truenary</strong>, I contributed to several projects using
        both Android Native and Flutter. My responsibilities included feature
        development, debugging, and automating deployment workflows. This role
        helped me solidify my understanding of software architecture and
        real-world project dynamics.
      </>
    ),
  },
  {
    title: "Personal & Freelancing Projects",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a
              href="LINK_TO_TRAVELMOTTO"
              className="text-red-500 hover:underline"
            >
              <strong>Travelmotto</strong>
            </a>
            : A travel gaming app designed to make exploring new places fun and
            interactive.
          </li>
          <li>
            <a href="LINK_TO_IMAGLY" className="text-red-500 hover:underline">
              <strong>Imagly</strong>
            </a>
            : An AI-powered OCR dictionary that helps readers get word meanings
            by scanning text with their phone.
          </li>
          <li>
            <strong>Investment Decisions using LLM & Data Science</strong>: I
            applied Large Language Models and data science techniques to make
            informed investment decisions.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Lifelong Learning",
    content: (
      <>
        I am passionate about continuous learning and have completed several
        courses to expand my knowledge, including:
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a
              href="LINK_TO_DEEPLEARNING"
              className="text-red-500 hover:underline"
            >
              <strong>Deep Learning Specialization</strong>
            </a>
          </li>
          <li>
            <a
              href="LINK_TO_CALCULUS"
              className="text-red-500 hover:underline"
            >
              <strong>Intro to Calculus</strong>
            </a>
          </li>
          <li>
            <a
              href="LINK_TO_MACHINELEARNING"
              className="text-red-500 hover:underline"
            >
              <strong>Intro to Machine Learning</strong>
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

const AboutMe: React.FC = () => {
  return (
    <section
      className="relative bg-black text-white py-16 px-6 overflow-hidden border-t border-b border-gray-700"
      id="about"
    >
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white mb-12 text-center font-serif">
          My Journey
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Glowing Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-gray-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Glowing Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div
                  className={`bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-lg p-6 w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-red-500 mb-4 font-serif">
                    {section.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed font-light">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;