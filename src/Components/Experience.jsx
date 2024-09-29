import React from 'react';
import { FaBriefcase } from 'react-icons/fa'; // You can use any icon library

const experiences = [
  {
    company: 'Connect Agency',
    role: 'Frontend Developer',
    location: 'Dhaka, Bangladesh',
    duration: 'Aug 2024 - Present',
    description:
      'Developed and maintained user-friendly web applications using React.js and Tailwind CSS. Collaborated closely with back-end developers to integrate APIs and ensure seamless functionality. Worked as part of a cross-functional team including designers and back-end engineers to deliver responsive and performant applications, while improving user experience and ensuring smooth integration of front-end and back-end systems.',
  },
  {
    company: 'Nexus UI',
    role: 'Founder',
    location: 'Dhaka, Bangladesh',
    duration: 'July 2024 - Present',
    description:
      'Led the development of highly reusable and customizable UI components using React.js and Tailwind CSS at Nexus Ui. Designed and implemented a library of responsive, accessible components to streamline front-end development. Worked closely with back-end developers to ensure seamless API integration, and collaborated with designers to maintain a consistent user experience across applications. Focused on enhancing UI performance, scalability, and maintaining clean, maintainable code.'
  }
  
];

const Experience = () => {
  return (
    <section className="py-16  text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#10E956]">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <FaBriefcase className="text-[#10E956] text-3xl mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold text-[#10E956]">
                    {exp.company}
                  </h3>
                  <p className="text-lg text-[#10E956]">{exp.role}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-2">{exp.location}</p>
              <p className="text-gray-500 mb-6">{exp.duration}</p>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
