import React from "react";
import { Link } from "react-router-dom";
import "./HistoryPage.css";
import logoWhite from "../../Assets/Logo/logo-white.png";
import lineWhite from "../../Assets/Images/lineWhite.png";
import phoneIcon from "../../Assets/Icons/phoneIcon.png";
import arrowRightCream from "../../Assets/Icons/arrowRightCream.png";
import deleteIcon from "../../Assets/Icons/deleteIcon.png";
import divider from "../../Assets/Images/divider.png";
import product1 from "../../Assets/Images/product1.png";
import product2 from "../../Assets/Images/product2.png";
import product3 from "../../Assets/Images/product3.png";
import product4 from "../../Assets/Images/product4.png";
import footer from "../../Assets/Images/Footer.png";

const HistoryPage = ({ pricePredictionHistory }) => {
  console.log("History Page : ", pricePredictionHistory);
  return (
    <div className="history-page">
      <div className="div">
        <div className="history">
          <div className="products">
            <div className="item">
              <img className="divider" alt="Divider" src={divider} />
              <div className="specs">
                <div className="text-wrapper">Square feet:</div>
                <div className="text-wrapper-2">1268</div>
                <div className="text-wrapper-3">12</div>
                <div className="text-wrapper-4">4</div>
                <div className="text-wrapper-5">BHK:</div>
                <div className="text-wrapper-6">Bathrooms:</div>
              </div>
              <div className="element">4000 lakhs</div>
              <div className="element-2">Electronic City Phase II</div>
              <img className="pic" alt="Pic" src={product1} />
              <button className="button">
                <div className="overlap-group">
                  <div className="text-wrapper-7">Ready To Move</div>
                </div>
              </button>
              <img className="del" alt="Del" src={deleteIcon} />
            </div>
            <div className="item-2">
              <img className="img" alt="Divider" src={divider} />
              <div className="specs-2">
                <div className="text-wrapper">Square feet:</div>
                <div className="text-wrapper-2">1268</div>
                <div className="text-wrapper-3">12</div>
                <div className="text-wrapper-4">4</div>
                <div className="text-wrapper-5">BHK:</div>
                <div className="text-wrapper-6">Bathrooms:</div>
              </div>
              <div className="element-3">4000 lakhs</div>
              <div className="element-4">Electronic City Phase II</div>
              <img className="pic-2" alt="Pic" src={product2} />
              <button className="overlap-group-wrapper">
                <div className="div-wrapper">
                  <div className="text-wrapper-8">Soon to be Vacated</div>
                </div>
              </button>
              <img className="del" alt="Del" src={deleteIcon} />
            </div>
            <div className="item-3">
              <img className="img" alt="Divider" src={divider} />
              <div className="specs-2">
                <div className="text-wrapper">Square feet:</div>
                <div className="text-wrapper-2">1268</div>
                <div className="text-wrapper-3">12</div>
                <div className="text-wrapper-4">4</div>
                <div className="text-wrapper-5">BHK:</div>
                <div className="text-wrapper-6">Bathrooms:</div>
              </div>
              <div className="element-3">4000 lakhs</div>
              <div className="element-4">Electronic City Phase II</div>
              <img className="pic-2" alt="Pic" src={product3} />
              <button className="button-2">
                <div className="overlap-group">
                  <div className="text-wrapper-7">Ready To Move</div>
                </div>
              </button>
              <img className="del" alt="Del" src={deleteIcon} />
            </div>
            <div className="item-4">
              <img className="divider-2" alt="Divider" src={divider} />
              <div className="specs-3">
                <div className="text-wrapper">Square feet:</div>
                <div className="text-wrapper-2">1268</div>
                <div className="text-wrapper-3">12</div>
                <div className="text-wrapper-4">4</div>
                <div className="text-wrapper-5">BHK:</div>
                <div className="text-wrapper-6">Bathrooms:</div>
              </div>
              <div className="element-5">4000 lakhs</div>
              <div className="element-6">Electronic City Phase II</div>
              <img className="pic-3" alt="Pic" src={product4} />
              <img className="del" alt="Del" src={deleteIcon} />
              <button className="button-3">
                <div className="div-wrapper">
                  <div className="text-wrapper-9">Soon to be Vacated</div>
                </div>
              </button>
            </div>
          </div>
          <div className="thead">
            <div
              style={{ fontSize: "15px", fontWeight: "600" }}
              className="text-wrapper-10"
            >
              PROPERTY DESCRIPTION
            </div>
            <div
              style={{ fontSize: "15px", fontWeight: "600" }}
              className="text-wrapper-11"
            >
              PREDICTED PRICE
            </div>
            <div
              style={{ fontSize: "15px", fontWeight: "600" }}
              className="text-wrapper-12"
            >
              AVAILABILITY
            </div>
            <div
              style={{ fontSize: "15px", fontWeight: "600" }}
              className="text-wrapper-13"
            >
              LOCATION
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              width: "85vw",
              margin: "auto",
              borderBottom: "2px solid gray",
            }}
          >
            <h1>Property Price Prediction History</h1>
            <h2>{pricePredictionHistory.length} Items</h2>
          </div>
        </div>
        <div className="main-image">
          <p className="your-property-price">
            <span className="span">Your </span>
            <span className="text-wrapper-14">Property</span>
            <span className="span"> Price Prediction History</span>
          </p>
          <div className="navbar">
            <Link to="/">
              <img
                className="logo-white-svg"
                alt="Logo white svg"
                src={logoWhite}
              />
            </Link>
            <div className="overlap-group-2">
              <div className="list">
                <div className="item-link">
                  <Link
                    to="/"
                    style={{ textDecoration: "none" }}
                    className="text-wrapper-15"
                  >
                    Home
                  </Link>
                </div>
                <div className="item-link-2">
                  <Link
                    to="/predict-price"
                    style={{ textDecoration: "none" }}
                    iv
                    className="text-wrapper-16"
                  >
                    Predict Price
                  </Link>
                </div>
                <div className="item-link-3">
                  <div className="text-wrapper-17">Categories</div>
                </div>
                <div className="item-link-4">
                  <Link
                    to="/history"
                    style={{ textDecoration: "none" }}
                    className="text-wrapper-18"
                  >
                    History
                  </Link>
                </div>
                <div className="item-link-5">
                  <div className="text-wrapper-19">Contact</div>
                </div>
              </div>
              <img className="line" alt="Line" src={lineWhite} />
            </div>
            <div className="phno">
              <div className="link">
                <img className="vector" alt="Vector" src={phoneIcon} />
              </div>
              <div className="phoneno">+92 349 7142343</div>
            </div>
          </div>
          <p className="p">
            Keep track of all your past price predictions in one place. Review,
            compare, and analyze the estimated values of your properties to make
            informed decisions and stay ahead in the real estate market.
          </p>
          <div className="view-histroy-button">
            <div className="view-history"> View History</div>
            <img className="vector-2" alt="Vector" src={arrowRightCream} />
          </div>
        </div>
        <img className="footer" src={footer} alt="" />
      </div>
    </div>
  );
};
export default HistoryPage;
