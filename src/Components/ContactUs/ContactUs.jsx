import React from "react";
import "./ContactUs.css";
// import backgr from "/images/Background/backgr.png";

const ContactUs = () => {
  return (
    <div className="container-header">
      <div className="header-text" id="header-go">
        <h1>
          Contact us at any time! <br />
        </h1>
        <p>
          JavaScript это язык, который позволяет вам применять сложные вещи
          <br />
          на web странице — каждый раз, когда на web странице происходит что-то
          <br />
          большее, чем просто её статичное отображение — отображение <br />
          периодически обновляемого контента, или интерактивных карт, <br />
          или анимация 2D/3D графики — можете быть уверены, что скорее всего, не
          <br />
          обошлось без JavaScript.
        </p>
      </div>
      <div className="header-mac">
        {/* <img id="mac" src={backgr} alt="BG" /> */}
      </div>
    </div>
  );
};

export default ContactUs;
