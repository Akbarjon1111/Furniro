import "./AboutPage.css";
import { FaUser } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { FaTag } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-info">
        <div className="info-cart">
          <div className="cart-img">
            <img src="../../../src/assets/Rectangle 68.png" alt="" />
          </div>
          <div className="cart-icons">
            <div className="ii">
              <FaUser className="iii" />
              <p className="iii">Admin</p>
            </div>
            <div className="ii">
              <CiCalendarDate className="iii" />
              <p className="iii">14 Oct 2022</p>
            </div>
            <div className="ii">
              <FaTag className="iii" />
              <p className="iii">Wood</p>
            </div>
          </div>
          <div className="cart-info">
            <h1>Going all-in with millennial design</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
              Mus mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin <br /> aliquam ultrices. Morbi blandit cursus
              risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
              turpis <br />
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit <br />{" "}
              ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
              ornare aenean euismod elementum.
            </p>
            <button className="about-btn">Read More</button>
          </div>
        </div>
        <div className="info-cart">
          <div className="cart-img">
            <img src="../../../src/assets/Rectangle 68 (1).png" alt="" />
          </div>
          <div className="cart-icons">
            <div className="ii">
              <FaUser className="iii" />
              <p className="iii">Admin</p>
            </div>
            <div className="ii">
              <CiCalendarDate className="iii" />
              <p className="iii">14 Oct 2022</p>
            </div>
            <div className="ii">
              <FaTag className="iii" />
              <p className="iii">Wood</p>
            </div>
          </div>
          <div className="cart-info">
            <h1>Exploring new ways of decorating</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
              Mus mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin <br /> aliquam ultrices. Morbi blandit cursus
              risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
              turpis <br />
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit <br />{" "}
              ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
              ornare aenean euismod elementum.
            </p>
            <button className="about-btn">Read More</button>
          </div>
        </div>
        <div className="info-cart">
          <div className="cart-img">
            <img src="../../../src/assets/Rectangle 68 (2).png" alt="" />
          </div>
          <div className="cart-icons">
            <div className="ii">
              <FaUser className="iii" />
              <p className="iii">Admin</p>
            </div>
            <div className="ii">
              <CiCalendarDate className="iii" />
              <p className="iii">14 Oct 2022</p>
            </div>
            <div className="ii">
              <FaTag className="iii" />
              <p className="iii">Wood</p>
            </div>
          </div>
          <div className="cart-info">
            <h1>Handmade pieces that took time to make</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
              Mus mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin <br /> aliquam ultrices. Morbi blandit cursus
              risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
              turpis <br />
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit <br />{" "}
              ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
              ornare aenean euismod elementum.
            </p>
            <button className="about-btn">Read More</button>
          </div>
        </div>
      </div>
      <div className="about-carts">
        <div className="category">
          <form>
            <input type="text" />
            <IoSearch className="s-icon" />
          </form>
          <div className="categor">
            <h2>Categories</h2>
            <div className="cat">
              <p>Crafts</p>
              <p>2</p>
            </div>
            <div className="cat">
              <p>Design</p>
              <p>8</p>
            </div>
            <div className="cat">
              <p>Handmade</p>
              <p>7</p>
            </div>
            <div className="cat">
              <p>Interior</p>
              <p>1</p>
            </div>
            <div className="cat">
              <p>Wood</p>
              <p>6</p>
            </div>
          </div>
        </div>
        <div className="posts">
            <h2>Recent Posts</h2>
            <div className="post-info">
                <div className="info-img">
                    <img src="../../../src/assets/Rectangle 69.png" alt="" />
                </div>
                <div className="info-info">
                    <h3>Going all-in with millennial design</h3>
                    <p>03 Aug 2022</p>
                </div>
            </div>
            <div className="post-info">
                <div className="info-img">
                    <img src="../../../src/assets/Rectangle 69 (1).png" alt="" />
                </div>
                <div className="info-info">
                    <h3>Exploring new ways of decorating</h3>
                    <p>03 Aug 2022</p>
                </div>
            </div>
            <div className="post-info">
                <div className="info-img">
                    <img src="../../../src/assets/Rectangle 69 (2).png" alt="" />
                </div>
                <div className="info-info">
                    <h3>Handmade pieces that took time to make</h3>
                    <p>03 Aug 2022</p>
                </div>
            </div>
            <div className="post-info">
                <div className="info-img">
                    <img src="../../../src/assets/Rectangle 69 (3).png" alt="" />
                </div>
                <div className="info-info">
                    <h3>Modern home in Milan</h3>
                    <p>03 Aug 2022</p>
                </div>
            </div>
            <div className="post-info">
                <div className="info-img">
                    <img src="../../../src/assets/Rectangle 69 (4).png" alt="" />
                </div>
                <div className="info-info">
                    <h3>Colorful office redesign</h3>
                    <p>03 Aug 2022</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
