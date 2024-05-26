import React from "react";
import { Link } from "react-router-dom";
import "./HistoryPage.css";
import logoWhite from "../../Assets/Logo/logo-white.png";
import lineWhite from "../../Assets/Images/lineWhite.png";
import phoneIcon from "../../Assets/Icons/phoneIcon.png";
import arrowRightCream from "../../Assets/Icons/arrowRightCream.png";
import footer from "../../Assets/Images/Footer.png";
import PropertyHistoryCard from "../../Components/HistoryPage/PropertyHistoryCard";
import toast, { Toaster } from "react-hot-toast";

const HistoryPage = ({ pricePredictionHistory, setPricePredictionHistory }) => {
  console.log("History Page : ", pricePredictionHistory);

  const handleDelete = (id) => {
    const updatedHistory = pricePredictionHistory.filter(
      (item, index) => index !== id
    );
    setPricePredictionHistory(updatedHistory);
    toast.success("Property Deleted Successfully");
  };

  return (
    <>
      <Toaster />
      <div className="history-page">
        <div className="div">
          <div className="history">
            <div
              className="products"
              style={
                pricePredictionHistory.length === 0
                  ? { overflowY: "hidden", marginLeft: "35%", marginTop: "15%" }
                  : {}
              }
            >
              {pricePredictionHistory.length > 0 ? (
                pricePredictionHistory.map((historyItem, index) => (
                  <PropertyHistoryCard
                    key={index}
                    id={index}
                    historyItem={historyItem}
                    handleDelete={handleDelete}
                  />
                ))
              ) : (
                <h1>No History Found</h1>
              )}
            </div>
            <div className="thead">
              <div
                style={{ fontSize: "15px", fontWeight: "600" }}
                className="text-wrapper-10"
              >
                PROPERTY DESCRIPTION
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                }}
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
              Keep track of all your past price predictions in one place.
              Review, compare, and analyze the estimated values of your
              properties to make informed decisions and stay ahead in the real
              estate market.
            </p>
            <div className="view-histroy-button">
              <div className="view-history"> View History</div>
              <img className="vector-2" alt="Vector" src={arrowRightCream} />
            </div>
          </div>
          <img className="footer" src={footer} alt="" />
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
