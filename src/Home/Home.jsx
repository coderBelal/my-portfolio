import Contact from "../Components/Contact"
import Hero from "../Components/Hero"
import Project from "../Components/Project"
import Skill from "../Components/Skill"
 import About from "../Components/About"
import Experience from "../Components/Experience"

const Home = () => {
  return (
    <div>
<Hero/>
 <About/>
 <Experience/>
 <Skill/>
 <Project/>
 <Contact/>
    </div>
  )
}

export default Home