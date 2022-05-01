import React from "react";
import "./index.scss";
import { socialLink } from "../../components/footer full";

function Hire(props) {
  return (
    <div class="hire_page">
      <div className="message">
        <h1>Thank you for choosing us</h1>
        <p>
          We are here to break boundaries and make the impossible possible for
          you! Get in touch with us or kindly request a free consultation or an
          instant quote through our contact form.
        </p>
      </div>

      <div className="form">
        <div className="entries">
          <div className="entry">
            <p>
              What is your <span>budget</span>
            </p>
            <div className="input">
              <input type="number" placeholder="$1000" />
              <span>-</span>
              <input type="number" placeholder="$2000" />
            </div>
            <span>Input your budget range</span>
          </div>
          <div className="entry">
            <p>
              Your <span>E -mail address</span>
            </p>
            <div className="input">
              <input type="email" placeholder="exmaple@example.com" />
            </div>
            <span>Input your email address so we can contact you</span>
          </div>
          <div className="entry">
            <p>
              What <span>service</span> do you require?
            </p>
            <div className="input">
              <input type="text" placeholder="UI Design" />
            </div>
            <span>
              UI Design, Web development, consultation, others, etc...
            </span>
          </div>
        </div>

        <div className="button">Send</div>
      </div>
      <div className="socials">
          {socialLink.map(logo=>(
              <div>
                  {logo.svg}
              </div>
          ))}
      </div>
      <div className="bottom">
      <span>© DDHub. All rights reserved</span>
                <a href="">Terms and condition</a>
                <a href="">Privacy</a>
      </div>
    </div>
  );
}

export default Hire;
