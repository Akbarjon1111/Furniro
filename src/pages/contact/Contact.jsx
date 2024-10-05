import "./Contact.css"
import { FaChevronRight } from "react-icons/fa";
import ContactUs from "../contactUs/ContactUs";
import ShopServices from "../shopServices/ShopServices";


const Conatct = () => {
  return (
    <div>
      <div className="contact-home">
        <h1>Contact</h1>
        <div className="home-div">
          <p>Home</p>
          <FaChevronRight />
          <span>Contact</span>
        </div>
      </div>
      <ContactUs />
      <ShopServices />
    </div>
  )
}

export default Conatct
