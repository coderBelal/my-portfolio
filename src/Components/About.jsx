 
import belal from  "../assets/b3.jpg"
const About = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4   ">
      <h2 className="text-3xl text-center text-[#10E956] mb-4">ABOUT ME</h2>
      <p className="text-white text-center mb-8">
        As a front-end developer, I thrive on turning complex design concepts
        into functional, aesthetically pleasing web pages. My attention to
        detail and commitment to user-centric design ensure that every project I
        work on meets both client and user expectations.
      </p>
      <div className="flex flex-wrap gap-5 items-start justify-center">
        <div className="w-full sm:w-80">
          <img
            src=  {belal}
            alt="Profile"
            className="w-full rounded-lg transition-transform duration-100 ease-in  hover:scale-90 hover:rotate-6"
          />
        </div>
        <div className="flex-1 min-w-[300px]">
          <h3 className="text-xl text-[#10E956] mb-4">Front End Developer</h3>
          <p className="text-white mb-6">
            I am a dedicated front-end developer with a passion for crafting
            intuitive and dynamic user interfaces. My expertise lies in
            translating design mockups into seamless, responsive websites that
            provide an optimal user experience across all devices.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="w-full sm:w-1/2 flex justify-between">
              <strong className="text-gray-500">Birthday:</strong>
              <span className="text-white">29 March, 2006</span>
            </div>
            <div className="w-full sm:w-1/2 flex justify-between">
              <strong className="text-gray-500">Language:</strong>
              <span className="text-white">Bangla, Hindi, English, Urdu</span>
            </div>
            <div className="w-full sm:w-1/2 flex justify-between">
              <strong className="text-gray-500">Phone:</strong>
              <span className="text-white">01568885065</span>
            </div>
            <div className="w-full sm:w-1/2 flex justify-between">
              <strong className="text-gray-500">City:</strong>
              <span className="text-white">Bogura, Bangladesh</span>
            </div>
            <div className="w-full sm:w-1/2 flex justify-between">
              <strong className="text-gray-500">Age:</strong>
              <span className="text-white">18</span>
            </div>
            <div className="w-full sm:w-1/2 flex justify-between">
              <strong className="text-gray-500">Degree:</strong>
              <span className="text-white">HSC</span>
            </div>
            <div className="w-full sm:w-1/2 flex justify-between">
              <strong className="text-gray-500">Email:</strong>
              <span className="text-white">uddinbella473@gmail.com</span>
            </div>
            <div className="w-full sm:w-1/2 flex justify-between">
              <strong className="text-gray-500">Gender:</strong>
              <span className="text-white">Male</span>
            </div>
          </div>
          <p className="text-white mt-6">
            Proficient in HTML, CSS, and JavaScript, I excel at creating
            interactive and engaging web applications. I continually stay
            updated with the latest industry trends and technologies, ensuring
            that my work remains cutting-edge and effective in solving modern
            web development challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
