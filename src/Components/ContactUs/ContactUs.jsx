import React from "react";
import "./ContactUs.css";
import background from "../images/background.jpeg";
import CallIcon from "@mui/icons-material/Call";

const ContactUs = () => {
  return (
    <div className="container-header">
      <div className="header-text" id="header-go">
        <div>
          <span>Talk to Sales</span>
          <span>
            Interested in HubSpot’s software? Just pick up the phone to chat
            with a member of our sales team.
          </span>
          <span>
            <a
              href="tel:+996556165565"
              className="sales-number"
              data-sales-number="local"
              data-invoca-number="996 556 165 565"
              aria-hidden="false"
              data-loaded="true"
            >
              <span className="sales-number-number">
                <span className="sales-number-sales">+996 556 165 565</span>
              </span>
            </a>
          </span>
        </div>
      </div>
      <div>
        <div>
          <div>
            {" "}
            <CallIcon />{" "}
          </div>
          <div>
            <h2>Talk to Sales</h2>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
