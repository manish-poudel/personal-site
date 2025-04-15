"use client"; // Mark this as a client component

import React, { useState, useEffect } from "react";

// Dummy data for testing
const works = [
  {
    id: 1,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/globe.svg`, // Replace with actual image URLs from the public folder
    title: "Project 1",
    description: "A sleek and modern project showcasing innovation.",
    link: "/project-1", // Add links for each project
  },
  {
    id: 2,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/vercel.svg`,
    title: "Project 2",
    description: "A creative and scalable project for the future.",
    link: "/project-2",
  },
  {
    id: 3,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/globe.svg`, 
    title: "Project 3",
    description: "A bold and impactful project with great design.",
    link: "/project-3",
  },
  {
    id: 4,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/vercel.svg`,
    title: "Project 4",
    description: "A minimal and efficient project for modern needs.",
    link: "/project-4",
  },
  {
    id: 5,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/globe.svg`, 
    title: "Project 5",
    description: "A futuristic project with cutting-edge features.",
    link: "/project-5",
  },
];

const MyWorks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-gradient-to-r from-black to-gray-900 py-16 px-6"
      id="works"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-white mb-8 font-serif">
          My Works
        </h2>

        {/* Content */}
        <div className="relative">
          {/* Project Display */}
          <div className="flex justify-center items-center">
            <a
              href={works[currentIndex].link}
              className="block w-[90%] md:w-[60%] mx-auto transition-all duration-500 ease-in-out"
            >
              {/* Image */}
              <img
                src={works[currentIndex].image}
                alt={works[currentIndex].title}
                className="w-full h-64 object-cover rounded-md mb-6 shadow-lg hover:scale-105 transition-transform duration-300"
              />
              {/* Content */}
              <h3 className="text-2xl font-semibold text-white mb-1">
                {works[currentIndex].title}
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                {works[currentIndex].description}
              </p>
            </a>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {works.map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === currentIndex ? "bg-red-500" : "bg-gray-500"
                } transition-all duration-300`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;