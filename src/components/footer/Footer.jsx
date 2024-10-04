import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer-logo">
          <h1>Funiro.</h1>
          <p>
            400 University Drive Suite 200 Coral <br /> Gables, <br />
            FL 33134 USA
          </p>
        </div>
        <div className="footer-links">
            <h2>Links</h2>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Shop</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </div>
        <div className="footer-help">
            <h2>Helps</h2>
            <ul>
                <li>
                    <a href="/">Payment Options</a>
                </li>
                <li>
                    <a href="/">Returns</a>
                </li>
                <li>
                    <a href="/">Privacy Policies</a>
                </li>
            </ul>
        </div>
        <div className="footer-newsletter">
            <h2>Newsletter</h2>
            <form>
                <input type="email" placeholder="Enter Your Email Address" />
                <button type="submit">SUBSCRIBE</button>
            </form>
        </div>
      </div>

      <div className="footer-copyright">
        <p>2023 furino. All rights reverved</p>
      </div>
    </div>
  );
};

export default Footer;
