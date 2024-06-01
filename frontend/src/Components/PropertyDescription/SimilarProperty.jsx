import React from "react";
import { useNavigate } from "react-router-dom";
import bathTubIcon from "../../Assets/Icons/bathTubIconBlack.png";
import bedIcon from "../../Assets/Icons/bedIconBlack.png";
import locationIcon from "../../Assets/Icons/locationIconBlack.png";
import boxIcon from "../../Assets/Icons/boxIconBlack.png";
import likeButton from "../../Assets/Icons/likeButton.png";

const SimilarProperty = ({ property, setPropertyData }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setPropertyData(property);
    navigate(`/property/${property.id}`);
  };
  return (
    <div className="tabpanel-article">
      <div className="heading-link-new">{property.area_type}</div>
      <img className="icon-4" alt="Icon" src={locationIcon} />
      <div className="link-avenue-o">{property.location}</div>
      <div className="div-property-meta">
        <img className="icon-5" alt="Icon" src={bedIcon} />
        <div className="text-wrapper-21">{property.bhk}</div>
      </div>
      <div className="div-property-meta-2">
        <img className="icon-5" alt="Icon" src={bathTubIcon} />
        <div className="text-wrapper-21">{property.bath}</div>
      </div>
      <div className="div-property-meta-3">
        <img className="icon-5" alt="Icon" src={boxIcon} />
        <div className="text-wrapper-22">{property.sqft}</div>
      </div>
      <div className="div-d-flex">
        <div className="overlap-group-5">
          <div className="text-wrapper-23">{property.price} Lakhs</div>
        </div>
        <img className="link-2" alt="Link" src={likeButton} />
      </div>
      <div className="div-property" onClick={handleButtonClick} />
    </div>
  );
};

export default SimilarProperty;
