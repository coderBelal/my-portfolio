import { Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Home/Home";
import About from "./Components/About/About";
import Card from "./Components/Card/Card";
import Skill from "./Components/Skill/Skill";
import ContactForm from "./Components/ContactForm/ContactForm";
import Certificate from "./Components/Certificate/Certificate";
SideBar;
const containerStyle = {
  display: "flex",
};
const App = () => {
  return (
    <div style={containerStyle}>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Card />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </div>
  );
};

export default App;
