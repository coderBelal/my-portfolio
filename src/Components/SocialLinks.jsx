import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center mt-12 w-full">
      <div className="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full">
        <a
          href="https://github.com/coderBelal"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 w-full md:w-48 h-24 flex justify-center items-center rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg"
        >
          <FaGithub size={40} className="text-white mr-2" />
          <span className="text-white text-2xl font-semibold">Github</span>
        </a>

        <a
          href="https://www.linkedin.com/in/belal-uddin-99733229a/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 w-full md:w-48 h-24 flex justify-center items-center rounded-lg hover:bg-blue-500 transition duration-300 shadow-lg"
        >
          <FaLinkedin size={40} className="text-white mr-2" />
          <span className="text-white text-2xl font-semibold">LinkedIn</span>
        </a>

        <a
          href="https://twitter.com/your-twitter-profile"
          onClick={() => window.open('https://wa.me/+8801568885065', '_blank')}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#10E956] w-full md:w-48 h-24 flex justify-center items-center rounded-lg hover:bg-green-500 transition duration-300 shadow-lg"
        >
          <FaWhatsapp size={40} className="text-white mr-2" />
          <span className="text-white text-2xl font-semibold">WhatsApp</span>
        </a>

        <a
          href="https://www.facebook.com/devbelal10/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-500 w-full md:w-48 h-24 flex justify-center items-center rounded-lg hover:bg-sky-400 transition duration-300 shadow-lg"
        >
          <FaFacebook size={40} className="text-white mr-2" />
          <span className="text-white text-2xl font-semibold">Facebook</span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
