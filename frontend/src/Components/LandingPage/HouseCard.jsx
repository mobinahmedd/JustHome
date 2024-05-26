import React from "react";
import bathTubIcon from "../../Assets/Icons/bathTubIcon.png";
import bedIcon from "../../Assets/Icons/bedIcon.png";
import locationIcon from "../../Assets/Icons/locationIcon.png";
import boxIcon from "../../Assets/Icons/boxIcon.png";
import property1 from "../../Assets/Images/property1.png";
import property2 from "../../Assets/Images/property2.png";
import property3 from "../../Assets/Images/property3.png";
import property4 from "../../Assets/Images/property4.png";
import property5 from "../../Assets/Images/property5.png";
import property6 from "../../Assets/Images/property6.png";

const images = [
  property1,
  property2,
  property3,
  property4,
  property5,
  property6,
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const HouseCard = ({ id, property }) => {
  const randomImage = getRandomImage();

  return (
    <div className="overlap-group-wrapper-1">
      <div className="overlap">
        <div className="overlap-group-wrapper">
          <div className="overlap-group-3">
            <div className="link-7">
              <div
                className="before"
                style={{
                  backgroundImage: `url(${randomImage})`,
                  backgroundPosition: "50% 50%",
                  backgroundSize: "cover",
                  height: "447px",
                  left: "0",
                  position: "absolute",
                  top: "0",
                  width: "447px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="heading-link-2">{property.area_type}</div>
        <img className="icon" alt="Icon" src={locationIcon} />
        <div className="link-th">{property.location}</div>
        <div className="div-property-meta">
          <img className="icon-2" alt="Icon" src={bedIcon} />
          <div className="text-wrapper-9">{property.bhk}</div>
        </div>
        <div className="div-property-meta-2">
          <img className="icon-2" alt="Icon" src={bathTubIcon} />
          <div className="text-wrapper-9">{property.bath}</div>
        </div>
        <img className="icon-3" alt="Icon" src={boxIcon} />
        <div className="text-wrapper-10">{property.sqft}</div>
        <div className="text-wrapper-11">{property.price} Lakhs</div>
      </div>
    </div>
  );
};

export default HouseCard;
