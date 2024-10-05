import "./ContactUs.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="us-info">
        <h1>Get In Touch With Us</h1>
        <p>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
      </div>

      <div className="contact-login">
        <div className="contact-info">
          <div className="info1">
            <div className="head">
              <IoLocationSharp className="head-icon"/>
              <h2>Address</h2>
            </div>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          <div className="info1">
            <div className="head">
              <FaPhoneAlt className="head-icon"/>
              <h2>Phone</h2>
            </div>
            <p>Mobile: +(84) 546-6789</p>
            <p>Hotline: +(84) 456-6789</p>
          </div>
          <div className="info1">
            <div className="head">
              <MdAccessTimeFilled className="head-icon"/>
              <h2>Working Time</h2>
            </div>
            <p>Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>
        <div className="contact-inputs">
          <form>
            <label>
              <h3>Your name</h3>
              <input type="text" placeholder="Abc" />
            </label>
            <label>
              <h3>Email address</h3>
              <input type="email" placeholder="Abc@def.com" />
            </label>
            <label>
              <h3>Subject</h3>
              <input type="text" placeholder="This is an optional" />
            </label>
            <label>
              <h3>Message</h3>
              <textarea
                name=""
                id=""
                placeholder="Hi! i’d like to ask about"
              ></textarea>
            </label>
            <button className="contact-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
