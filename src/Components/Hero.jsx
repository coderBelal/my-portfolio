import belal from "../assets/b.jpg";
import cv from "../assets/belaluddin.pdf";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row items-center justify-center lg:justify-start text-center lg:text-left p-5 pt-24">
      {/* Image on the left for large screens */}
      <div
        className="lg:w-1/2 flex justify-center lg:justify-center  lg:mr-16 mb-8 lg:mb-0"
        data-aos="fade-right"
      >
        <div className="bg-gray-800 p-3 lg:p-4 rounded-full shadow-lg transition-transform transform hover:scale-110">
          <img
            src={belal}
            alt="Belal Uddin"
            className="h-44 w-44 lg:h-[500px] lg:w-[500px] rounded-full object-cover shadow-xl"
          />
        </div>
      </div>

      {/* Text on the right for large screens */}
      <div
        className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center space-y-6"
        data-aos="fade-left"
      >
        <p className="text-2xl md:text-3xl lg:text-4xl text-green-500">
          ✌️ Hi There! I'm Belal Uddin
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          A <span className="text-green-500">Front-End Dev</span>
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl mt-2">
          I Help Startups <span className="text-blue-400">Launch</span> and{" "}
          <span className="text-green-500">Grow</span> Their Products
        </h2>

        <p className="max-w-xl text-base md:text-lg lg:text-xl text-gray-300">
          I am a software engineer with over one year of experience, recognized
          as a practical and effective developer. I lead cross-functional teams
          in time-pressured settings to complete projects on schedule and within
          budget.
        </p>

    
        <div className="space-y-4">
          <a
            href= {cv}
            className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
            download
          >
        
            Download CV
          </a>
          <p className="text-base md:text-lg text-gray-300">
            Experience: <span className="text-green-500">6 months</span>,{" "}
            <span className="text-blue-400">6 projects done</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
