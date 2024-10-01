import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
 
import 'swiper/css';
import 'swiper/css/navigation'; // Import Navigation styles
import { Navigation } from 'swiper/modules';

 
const myProjects = [
  {
    title: 'কুরআনুল কারীম',
    description: 'This project is a digital Quran platform with easy navigation for reading and understanding the Quran in an interactive and user-friendly interface.',
    image: 'https://i.postimg.cc/rmm2bfVY/Screenshot-2024-09-27-203711.png',
    liveLink: 'https://the-islamic-bd.vercel.app/',
    codeLink: 'https://github.com/dev-hmyousuf/the_islamic_bd',
    technologies: ['React', "Tailwind Css"],
  },
  {
    title: 'Expense Tracker',
    description: ' The Expense Tracker is a simple and user-friendly application that allows users to easily track their daily expenses. In this project, users can log in to add, edit, and delete their expenses. For each expense, users can specify a name, amount, and date.The application displays the information in the form of cards, helping users to view and manage their expenses easily. With various filter and search features, users can quickly and effectively navigate through their list of expenses.',
    image: 'https://i.postimg.cc/3RzPSGzc/Screenshot-2024-09-30-000257.png ',
    liveLink: 'https://expense-tracker-one-pink-15.vercel.app/',
    codeLink: ' https://github.com/coderBelal/Expense-Tracker/tree/main',
    technologies: ['React', "Tailwind Css", "Firebase"],
  },
  {
    title: 'Sheba Care',
    description: 'A healthcare platform designed to offer services related to wellness and medical care with a focus on user experience and efficiency.',
    image: 'https://i.postimg.cc/KzvmbZNf/Screenshot-2024-09-27-203347.png',
    liveLink: 'https://sheba-care.vercel.app/',
    codeLink: 'https://github.com/coderBelal/sheba-care/tree/main',
    technologies: ['React', "Tailwind Css"],
  },
  {
    title: 'Crypto Web',
    description: 'Join our cutting-edge crypto platform for secure trading, instant transactions, and real-time market insights. Start your crypto journey today!',
    image: 'https://i.postimg.cc/BQ2Mm407/Screenshot-2024-09-27-105126.png',
    liveLink: 'https://crypto-word-ruby.vercel.app/',
    codeLink: 'https://github.com/coderBelal/crypto-word.git',
    technologies: ['React', "Tailwind Css"],
  },
  {
    title: 'Food Web',
    description: 'Savor exquisite flavors and impeccable service at our restaurant. Indulge in culinary delights and create unforgettable dining memories with us.',
    image: 'https://i.postimg.cc/Qt4hxRY3/Screenshot-2024-09-03-100139.png',
    liveLink: 'https://tomato-app-opal.vercel.app/',
    codeLink: 'https://github.com/coderBelal/tomato-web',
    technologies: ['React', 'Context API'],
  },
];

const teamProjects = [
  {
    title: 'Spaajman',
    description: 'A luxury spa and wellness service platform that offers a range of treatments and booking features, designed with modern web technologies.',
    image: 'https://i.postimg.cc/dQyM7WyP/Screenshot-2024-09-30-000210.png',
    liveLink: 'https://sparlax.com/',
    technologies: ['Node.js', 'Express', 'MongoDB', "React"],
  },
  
];
const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('myWork');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const projectsToShow = selectedCategory === 'myWork' ? myProjects : teamProjects;

  return (
    <div className="w-full mx-auto py-12 px-4 pt-16 md:px-8  ">
      <h1 className="text-[#10E956] text-4xl text-center mb-10 tracking-wide">My Work</h1>
      
      <div className="flex justify-center mb-8 space-x-4">
        <button
          className={`px-6 py-3 font-bold rounded-full ${
            selectedCategory === 'myWork' ? 'bg-[#10E956] text-gray-900' : 'bg-gray-700 text-white'
          } hover:bg-green-400 transition-all duration-300 ease-in-out shadow-md`}
          onClick={() => handleCategoryChange('myWork')}
        >
          My Work
        </button>
        <button
          className={`px-6 py-3 font-bold rounded-full ${
            selectedCategory === 'teamWork' ? 'bg-[#10E956] text-gray-900' : 'bg-gray-700 text-white'
          } hover:bg-green-400 transition-all duration-300 ease-in-out shadow-md`}
          onClick={() => handleCategoryChange('teamWork')}
        >
          Team Work
        </button>
      </div>

      <Swiper 
        spaceBetween={50} 
        slidesPerView={1} 
        navigation // Enable navigation
        modules={[Navigation]} // Add Navigation module
        className="w-full lg:w-3/4 lg:h-3/4"
      >
        {projectsToShow.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center bg-gradient-to-b from-[#0D1B2A] to-[#1B263B] text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover rounded-lg shadow-lg mb-6"
              />
              <h2 className="text-2xl font-semibold mb-3 text-[#10E956]">{project.title}</h2>
              <p className="text-gray-300 mb-6 text-center">{project.description}</p>
              <div className="flex space-x-6 mb-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#10E956] text-gray-900 font-bold rounded-full hover:bg-green-400 transition-all duration-300 ease-in-out shadow-md transform hover:scale-105"
                >
                  Live
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-700 font-bold text-white rounded-full hover:bg-gray-900 transition-all duration-300 ease-in-out shadow-md transform hover:scale-105"
                >
                  Code
                </a>
              </div>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all duration-300 ease-in-out shadow-md transform hover:scale-105">
                Technologies Used
              </button>
              <ul className="mt-4 flex gap-3 bg-[#10E956] py-2 px-2 rounded-lg">
                {project.technologies.map((tech, idx) => (
                  <li key={idx} className="text-center">{tech}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Project;
