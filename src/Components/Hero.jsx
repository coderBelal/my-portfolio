import { CodeBracketIcon, DeviceTabletIcon } from '@heroicons/react/24/outline'; 
import belal from "../assets/b.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-900   text-white flex flex-col items-center justify-center text-center space-y-8 p-5 pt-24">
      
      <p className="text-2xl md:text-3xl text-green-500" data-aos="fade-left">✌️ Hi There! I'm Belal Uddin</p>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" data-aos="fade-left">
        A <span className="text-green-500  ">Front-End Dev</span>
      </h1>

      <h2 className="text-2xl md:text-3xl lg:text-4xl mt-2">
        I Help Startups <span className="text-blue-400">Launch</span> and 
        <span className="text-green-500"> Grow</span> Their Products
      </h2>

      <p className="max-w-xl text-base md:text-lg lg:text-xl text-gray-300" data-aos="fade-left">
        I am a software engineer with over one year of experience, recognized as a practical 
        and effective developer. I lead cross-functional teams in time-pressured settings to 
        complete projects on schedule and within budget.
      </p>

      <div className="flex flex-col items-center space-y-6" data-aos="fade-right">
        <div className="  bg-gray-800 p-2 rounded-full shadow-lg transition-transform transform hover:scale-110" data-aos="fade-down">
          <img src={belal} alt="Belal Uddin" className="h-44 w-44 rounded-full object-cover shadow-xl" />
        </div>

        <div className="flex flex-wrap justify-center items-center space-x-6 md:space-x-10">
          <div className="flex items-center space-x-3">
            <CodeBracketIcon className="h-7 w-7 text-green-500" />
            <span className="text-lg md:text-xl">Writing Frontend Code</span>
          </div>

          <div className="flex items-center space-x-3">
            <DeviceTabletIcon className="h-7 w-7 text-yellow-500" />
            <span className="text-lg md:text-xl">Fueled by Coffee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
