import "./About.css"
import { FaChevronRight } from "react-icons/fa";
import AboutPage from "../aboutPage/AboutPage";
import ShopServices from "../shopServices/ShopServices";


const About = () => {
  return (
    <div>
      <div className="about-home">
        <h1>Blog</h1>
        <div className="home-div">
          <p>Home</p>
          <FaChevronRight />
          <span>Blog</span>
        </div>
      </div>

      <AboutPage />
      <ShopServices />
    </div>
  )
}

export default About
