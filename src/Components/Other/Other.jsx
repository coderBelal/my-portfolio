import html from "../../assets/html.png";
import css from "../../assets/css.png";
import sass from "../../assets/sass.png";
import tailwind from "../../assets/tailwind.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import boot from "../../assets/boot.jpg";
import redux from "../../assets/redux.png";
import next from "../../assets/download.png";
import typescript from "../../assets/type.jpg";

const Other = () => {
  return (
    <div className="skillContainer">
      <h1 className="skillHeading">My Skills</h1>
      <div className="skill">
        <div className="cardOne">
          <img src={html} alt="HTML5" />
          <div className="text">
            <h2>HTML5</h2>
          </div>
        </div>
        <div className="cardOne">
          <img src={css} alt="CSS3" />
          <div className="text">
            <h2>CSS3</h2>
          </div>
        </div>
        <div className="cardOne">
          <img src={boot} alt="Bootstrap" />
          <div className="text">
            <h2>BOOTSTRAP</h2>
          </div>
        </div>
        <div className="cardOne">
          <img src={tailwind} alt="Tailwind" />
          <div className="text">
            <h2>TAILWIND</h2>
          </div>
        </div>

        <>
          <div className="cardOne">
            <img src={sass} alt="Sass" />
            <div className="text">
              <h2>SASS</h2>
            </div>
          </div>
          <div className="cardOne">
            <img src={js} alt="JavaScript" />
            <div className="text">
              <h2>JAVASCRIPT</h2>
            </div>
          </div>
          <div className="cardOne">
            <img src={react} alt="React" />
            <div className="text">
              <h2>REACT</h2>
            </div>
          </div>
          <div className="cardOne">
            <img src={redux} alt="Redux" />
            <div className="text">
              <h2>REDUX</h2>
            </div>
          </div>
          <div className="cardOne">
            <img src={typescript} alt="TypeScript" />
            <div className="text">
              <h2>TYPESCRIPT</h2>
            </div>
          </div>
          <div className="cardOne">
            <img src={next} alt="Next JS" />
            <div className="text">
              <h2>NEXT JS</h2>
              <button className="next">Learning</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Other;
