"use client"; // Mark this as a client component

import React, { useState } from "react";
import Image from "next/image";

// Updated data for projects
const works = [
  {
    id: 1,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/talkmydoc.jpg`,
    title: "Talk My Doc",
    description:
      "A telemedicine app developed pre-COVID era. As part of a startup, I became a multidimensional problem solver. Worked on Flutter, architected and implemented the backend using Node.js, and wrote Python scripts for automation. Also handled non-technical aspects like third-party contracts with eSewa and legalities such as tax filings.",
    link: "https://www.facebook.com/talkmydoc",
  },
  {
    id: 2,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/sven.jpg`,
    title: "Sven",
    description:
      "A Flutter project completed during my tenure at Truenary. Contributed to feature development, bug fixes, and communication with domestic and international teams. Gained experience in system architecture and project automation.",
    link: "https://play.google.com/store/apps/details?id=com.svenglobal.sven&hl=en",
  },
  {
    id: 3,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/zlinky.jpg`,
    title: "Zlinky",
    description:
      "An Android project completed during my tenure at Truenary. Researched and implemented a feature to save links without opening a browser using Android native features. Learned Jetpack Compose and Hilt dependency injection. Assisted and guided junior developers.",
    link: "https://play.google.com/store/apps/details?id=com.zlinky.app&hl=en",
  },
  {
    id: 4,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/imagly.png`,
    title: "Imagly",
    description:
      "An innovative app developed to simplify reading by scanning a list of words from the camera and displaying them using Google ML Kit, Flutter, and Firebase.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6921629497783959552/",
  },
  {
    id: 5,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/travelmotto.jpg`,
    title: "TravelMotto",
    description:
      "A location-based gaming app developed using Flutter. Learned geohashing techniques to search items by location.",
    link: "https://play.google.com/store/apps/details?id=com.travelmotto.androidapp&hl=en",
  },
];

const MyWorks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the previous set of projects
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(works.length - 3, 0) : prevIndex - 3
    );
  };

  // Navigate to the next set of projects
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= works.length ? 0 : prevIndex + 3
    );
  };

  return (
    <section
      className="relative bg-gradient-to-r from-black to-[#1a0a0a] py-16 px-6"
      id="works"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-white mb-12 font-serif">
          My Works
        </h2>

        {/* Projects Grid */}
        <div className="relative flex overflow-hidden">
          {works.map((work) => (
            <div
              key={work.id}
              className={`flex-shrink-0 w-1/3 px-8 relative transition-transform duration-500 ease-in-out`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {/* Image */}
              <Image
                src={work.image}
                alt={work.title}
                width={500} // Adjust width as needed
                height={300} // Adjust height as needed
                className="w-full h-90 object-cover rounded-md mb-4"
              />
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">{work.title}</h3>
              {/* Description */}
              <p className="text-gray-300 text-sm mb-4">{work.description}</p>
              {/* View Project Button */}
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 text-white py-2 px-6 rounded-full hover:from-red-600 hover:to-pink-600 transition duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>

        {/* Slider Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4">
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
            >
              &#8249;
            </button>
          )}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4">
          <button
            onClick={handleNext}
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;