import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";
import Home from "./Home/Home";
import About from "./Components/About";
import SocialLinks from "./Components/SocialLinks";
import Loading from "./Components/Loading";  
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Certificate from "./Components/Certificate";
import Skill from "./Components/Skill";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);  
  }, [location]);

  return (
    <div>
      {loading ? (
        <Loading />  
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Project/>}  />
            <Route path="/skill" element={<Skill/>}  />
            <Route path="/contact" element={<Contact/>}  />
            <Route path="/certificate" element={<Certificate/>}  />
          </Routes>
          <SocialLinks />
        </>
      )}
    </div>
  );
}

 
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
