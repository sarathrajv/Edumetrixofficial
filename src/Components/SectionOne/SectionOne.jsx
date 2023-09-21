import React from "react";
import "../SectionOne/SectionOne.css";
import secOneImg from "./sectionOneImages/sectionOneBusinesscroped.png";
import locationImg from "./sectionOneImages/placeholder.png";
import emLogo from "./sectionOneImages/LogoNFT.png";

function SectionOne() {
  return (
    <div className="sectionOne-wrapper">
      <div className="sectionOne-container">
        <div className="sectionOne-companyNameContainer">
          <h1 className="sectionOne-companyNameHead">EduMetrix</h1>
          <h4 className="sectionOne-CompanyNameSubHead">
            Rebuilding The World From Scratch
          </h4>
        </div>
        <div className="sectionOne-Imgcontainer">
          <img
            src={secOneImg}
            alt="sectionOneImage"
            className="sectionOne-MainImg"
          />
        </div>
      </div>
      <div className="sectionOne-locationWrapper">
        <div className="sectionOne-emLogoContainer">
          <img
            src={emLogo}
            alt="sectionOne-edumetrix-logo"
            className="sectionOne-edumetrixlogo"
          />
          <p className="sectionOne-locationPara">EDUMETRIX</p>
        </div>
        <div className="sectionOne-location">
          <img className="sectionOne-locationImg" alt="" src={locationImg} />
          <p className="sectionOne-locationPara">Bangalore | Kerala</p>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
