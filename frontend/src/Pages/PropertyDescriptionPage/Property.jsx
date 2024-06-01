import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Property.css";
import { Link } from "react-router-dom";
import logoWhite from "../../Assets/Logo/logo-white.png";
import lineWhite from "../../Assets/Images/lineWhite.png";
import phoneIcon from "../../Assets/Icons/phoneIcon.png";
import propertyMain from "../../Assets/Images/propertyDescriptionImage.png";
import apollo1 from "../../Assets/Images/apollo1.png";
import apollo2 from "../../Assets/Images/apollo2.png";
import apollo3 from "../../Assets/Images/apollo3.png";
import idkIcon1 from "../../Assets/Icons/idkIcon1.png";
import idkIcon2 from "../../Assets/Icons/idkIcon2.png";
import idkIcon3 from "../../Assets/Icons/idkIcon3.png";
import vLine from "../../Assets/Images/verticalLine.png";
import footer from "../../Assets/Images/Footer.png";
import SimilarProperty from "../../Components/PropertyDescription/SimilarProperty";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Product = ({ property, setPropertyData }) => {
  console.log("Mobin : ", property);
  const [similarProperties, setSimilarProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 4;

  useEffect(() => {
    fetchSimilarProperties();
  }, []);

  const fetchSimilarProperties = async () => {
    try {
      // Fetch similar properties based on the selected location
      const similarResponse = await axios.post(
        "https://jawad-mohsin-just-home.hf.space/api/get_houses_by_location",
        new URLSearchParams({
          location: property.location || "Whitefield",
        })
      );

      // Add ID to each property
      const propertiesWithId = similarResponse.data.entries.map(
        (property, index) => ({
          ...property,
          id: index,
        })
      );

      setSimilarProperties(propertiesWithId);
    } catch (error) {
      console.error("Error predicting price:", error);
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = similarProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  return (
    <div className="property-description">
      <div className="div">
        <div className="navbar">
          <Link to="/">
            <img
              className="logo-white-svg"
              alt="Logo white svg"
              src={logoWhite}
            />
          </Link>
          <div className="overlap-group">
            <div className="list">
              <div className="item-link">
                <div className="text-wrapper">Home</div>
              </div>
              <div className="div-wrapper">
                <Link
                  to="/predict-price"
                  style={{ textDecoration: "none" }}
                  className="text-wrapper-2"
                >
                  Predict Price
                </Link>
              </div>
              <div className="item-link-2">
                <div className="text-wrapper-3">Categories</div>
              </div>
              <div className="item-link-3">
                <Link
                  to="/history"
                  style={{ textDecoration: "none" }}
                  className="text-wrapper-4"
                >
                  History
                </Link>
              </div>
              <div className="item-link-4">
                <div className="text-wrapper-5">Contact</div>
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
        <img src={footer} className="footer" alt="" />{" "}
        <div className="overlap-2">
          <div className="group-7">
            <div className="overlap-3">
              <div className="overlap-4">
                <img
                  className="apollo-residence"
                  alt="Apollo residence"
                  src={propertyMain}
                />
                <img className="foto" alt="Foto" src={apollo1} />
                <img className="foto-2" alt="Foto" src={apollo2} />
                <img className="foto-3" alt="Foto" src={apollo3} />
              </div>
            </div>
            <h1 className="text-wrapper-11">
              {property.area_type} - {property.location}
            </h1>
            <div className="group-16">
              <div className="overlap-9">
                <p className="house-price">
                  <span className="text-wrapper-16">House Price: </span>
                  <span className="text-wrapper-17">
                    {property.price} Lakhs
                  </span>
                </p>
                <div className="button-primary">
                  <div className="primary-button">Buy House</div>
                </div>
              </div>
              <div className="overlap-10">
                <div className="rectangle" />
                <p className="at-vero-eos-et-iusto">
                  Located in the heart of {property.location}, this stunning{" "}
                  {property.bhk} BHK apartment offers a perfect blend of luxury
                  and comfort. Ideal for families, the spacious layout and
                  contemporary design provide a modern living space.
                  <br />
                  <br />
                  Spanning {property.sqft} sqft, the apartment features
                  high-quality fixtures and fittings, ensuring a sophisticated
                  living experience. Its thoughtful design caters to both style
                  and functionality, making it a perfect choice for those
                  seeking a comfortable yet elegant lifestyle.
                  <br />
                  <br />
                  With easy access to amenities such as schools, hospitals, and
                  shopping malls, this apartment offers the convenience of urban
                  living. Its prime location, combined with its modern design
                  and ample space, makes it a desirable choice for those looking
                  for a luxurious home in {property.location}.
                </p>
                <div className="rectangle-2" />
                <div className="text-wrapper-18">Description</div>
              </div>
            </div>
          </div>

          <div className="features">
            <div className="element">
              <div className="overlap-group-4">
                <div className="text-wrapper-19">{property.bhk} BHK</div>
                <img className="line-2" alt="Line" src={vLine} />
                <img className="icon" alt="Icon" src={idkIcon1} />
              </div>
            </div>
            <div className="element">
              <div className="overlap-group-4">
                <div className="text-wrapper-19">{property.bath} Baths</div>
                <img className="line-2" alt="Line" src={vLine} />
                <img className="icon-2" alt="Icon" src={idkIcon2} />
              </div>
            </div>

            <div className="element-2">
              <div className="overlap-group-4" style={{ width: "230px" }}>
                <div className="overlap-11">
                  <div className="text-wrapper-20">{property.availability}</div>
                </div>
              </div>
            </div>
            <div className="element-2">
              <div
                className="overlap-group-4"
                style={{ width: "150px", marginLeft: "100px" }}
              >
                <div className="text-wrapper-19">{property.sqft} sqft</div>
                <img className="line-2" alt="Line" src={vLine} />
                <img className="icon-3" alt="Icon" src={idkIcon3} />
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-12">
          <div className="similar-properties">
            {currentProperties.map((property) => (
              <SimilarProperty
                key={property.id}
                property={property}
                setPropertyData={setPropertyData}
              />
            ))}
          </div>
          <div className="tablist-wrapper">
            <div className="tablist">
              <Stack spacing={2}>
                <Pagination
                  count={Math.ceil(
                    similarProperties.length / propertiesPerPage
                  )}
                  variant="outlined"
                  shape="rounded"
                  page={currentPage}
                  onChange={handlePageChange}
                />
              </Stack>
            </div>
          </div>
        </div>
        <div className="heading-recent">Similar Properties</div>
        <p className="text-wrapper-29">
          “Similar Properties available for Sale and Rent based on above
          property”
        </p>
      </div>
    </div>
  );
};
export default Product;
