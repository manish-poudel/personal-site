import React from "react";

// Dummy data for testing
const works = [
  {
    id: 1,
    image: "/images/work1.jpg", // Replace with actual image URLs from the public folder
    title: "Project 1",
    description: "A brief description of Project 1 showcasing its features.",
  },
  {
    id: 2,
    image: "/images/work2.jpg",
    title: "Project 2",
    description: "A brief description of Project 2 showcasing its features.",
  },
  {
    id: 3,
    image: "/images/work3.jpg",
    title: "Project 3",
    description: "A brief description of Project 3 showcasing its features.",
  },
  {
    id: 4,
    image: "/images/work4.jpg",
    title: "Project 4",
    description: "A brief description of Project 4 showcasing its features.",
  },
  {
    id: 5,
    image: "/images/work5.jpg",
    title: "Project 5",
    description: "A brief description of Project 5 showcasing its features.",
  },
];

const Works: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-800 to-black text-white py-16 px-6" id="works">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white mb-12 text-center font-serif">
          My Works
        </h2>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div
              key={work.id}
              className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
            >
              {/* Image */}
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-48 object-cover"
              />
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-500 mb-4 font-serif">
                  {work.title}
                </h3>
                <p className="text-gray-300 mb-4">{work.description}</p>
                <button className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300 ease-in-out">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;