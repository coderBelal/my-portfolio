import "./About.css";
import belal from "../../assets/b3.jpg";
const About = () => {
  return (
    <section className="about">
      <h2>ABOUT ME</h2>
      <p className="description">
        As a front-end developer, I thrive on turning complex design concepts
        into functional, aesthetically pleasing web pages. My attention to
        detail and commitment to user-centric design ensure that every project I
        work on meets both client and user expectations.
      </p>
      <div className="about-content">
        <div className="image">
          <img src={belal} alt="Profile" />
        </div>
        <div className="content">
          <h3>Front End Developer</h3>
          <p className="content-description">
            I am a dedicated front-end developer with a passion for crafting
            intuitive and dynamic user interfaces. My expertise lies in
            translating design mockups into seamless, responsive websites that
            provide an optimal user experience across all devices.
          </p>
          <div className="info">
            <div className="info-item">
              <strong>Birthday:</strong> <span>29 March,2006</span>
            </div>
            <div className="info-item">
              <strong>Language</strong> <span>Bangla,Hindi,English,Urdu</span>
            </div>
            <div className="info-item">
              <strong>Phone:</strong> <span>01568885065</span>
            </div>
            <div className="info-item">
              <strong>City:</strong> <span>Bogura,Bangladesh</span>
            </div>
            <div className="info-item">
              <strong>Age:</strong> <span>18</span>
            </div>
            <div className="info-item">
              <strong>Degree:</strong> <span>HSC</span>
            </div>
            <div className="info-item">
              <strong>Email:</strong> <span>uddinbella473@gmail.com</span>
            </div>
            <div className="info-item">
              <strong>Gender</strong> <span>Male</span>
            </div>
          </div>
          <p className="footer-description">
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
