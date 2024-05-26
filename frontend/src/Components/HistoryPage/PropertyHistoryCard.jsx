import React from "react";
import deleteIcon from "../../Assets/Icons/deleteIcon.png";
import divider from "../../Assets/Images/divider.png";
import product1 from "../../Assets/Images/product1.png";
import product2 from "../../Assets/Images/product2.png";
import product3 from "../../Assets/Images/product3.png";
import product4 from "../../Assets/Images/product4.png";

const PropertyHistoryCard = ({ id, historyItem, handleDelete }) => {
  const productImages = [product1, product2, product3, product4];
  const randomImage =
    productImages[Math.floor(Math.random() * productImages.length)];

  return (
    <div className="item">
      <img className="divider" alt="Divider" src={divider} />
      <div className="specs">
        <div className="text-wrapper">Square feet:</div>
        <div className="text-wrapper-2">{historyItem.squareFootage}</div>
        <div className="text-wrapper-3">{historyItem.bhk}</div>
        <div className="text-wrapper-4">{historyItem.bathrooms}</div>
        <div className="text-wrapper-5">BHK:</div>
        <div className="text-wrapper-6">Bathrooms:</div>
      </div>
      <div className="element">{historyItem.predictedPrice} lakhs</div>
      <div className="element-2">{historyItem.location}</div>
      <img className="pic" alt="Pic" src={randomImage} />
      <button className="button">
        <div
          className="overlap-group"
          style={
            historyItem.availability === "Ready To Move"
              ? {
                  backgroundColor: "#c1fcc3",
                  width: "165px",
                  marginLeft: "15px",
                }
              : {}
          }
        >
          <div className="text-wrapper-7">{historyItem.availability}</div>
        </div>
      </button>
      <img
        style={{ cursor: "pointer" }}
        className="del"
        alt="Del"
        src={deleteIcon}
        title="Delete Property"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
};

export default PropertyHistoryCard;
