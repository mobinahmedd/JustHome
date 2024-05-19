import React from "react";
import bathTubIcon from "../../Assets/Icons/bathTubIcon.png";
import bedIcon from "../../Assets/Icons/bedIcon.png";
import locationIcon from "../../Assets/Icons/locationIcon.png";
import boxIcon from "../../Assets/Icons/boxIcon.png";

const HouseCard = () => {
  return (
    <div className="overlap-group-wrapper-1">
      <div className="overlap">
        <div className="overlap-group-wrapper">
          <div className="overlap-group-3">
            <div className="link-7">
              <div className="before" />
            </div>
          </div>
        </div>
        <div className="heading-link-2">Luxury Family Home</div>
        <img className="icon" alt="Icon" src={locationIcon} />
        <div className="link-th">1800-1818 79th St</div>
        <div className="div-property-meta">
          <img className="icon-2" alt="Icon" src={bedIcon} />
          <div className="text-wrapper-9">4</div>
        </div>
        <div className="div-property-meta-2">
          <img className="icon-2" alt="Icon" src={bathTubIcon} />
          <div className="text-wrapper-9">1</div>
        </div>
        <img className="icon-3" alt="Icon" src={boxIcon} />
        <div className="text-wrapper-10">400</div>
        <div className="text-wrapper-11">$395,000</div>
      </div>
    </div>
  );
};

export default HouseCard;
