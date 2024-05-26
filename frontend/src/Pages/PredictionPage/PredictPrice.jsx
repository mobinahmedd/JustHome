import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PredictPrice.css";
import logoWhite from "../../Assets/Logo/logo-white.png";
import lineWhite from "../../Assets/Images/lineWhite.png";
import phoneIcon from "../../Assets/Icons/phoneIcon.png";
import arrowRightCream from "../../Assets/Icons/arrowRightCream.png";
import footer from "../../Assets/Images/Footer.png";
import SimilarPropertyCard from "../../Components/PredictionPage/SimilarPropertyCard";
import { Select } from "@radix-ui/themes";
import { bhk } from "../../Assets/constants/constants";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const PredictPrice = ({ setPricePredictionHistory }) => {
  const [locations, setLocations] = useState([]);
  const [areas, setAreas] = useState([]);
  const [availabilities, setAvailabilities] = useState([]);
  const [formData, setFormData] = useState({
    location: "",
    area: "",
    availability: "",
    bhk: "",
    bathrooms: "",
    squareFootage: "",
  });
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [similarProperties, setSimilarProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [locationRes, areaRes, availabilityRes] = await Promise.all([
          axios.get(
            "https://jawad-mohsin-just-home.hf.space/api/get_location_names"
          ),
          axios.get(
            "https://jawad-mohsin-just-home.hf.space/api/get_area_names"
          ),
          axios.get(
            "https://jawad-mohsin-just-home.hf.space/api/get_availability_names"
          ),
        ]);

        setLocations(locationRes.data.locations || []);
        setAreas(areaRes.data.area || []);
        setAvailabilities(availabilityRes.data.availability || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    fetchSimilarProperties();
  }, []);

  const memoizedLocations = useMemo(() => locations, [locations]);
  const memoizedAreas = useMemo(() => areas, [areas]);
  const memoizedAvailabilities = useMemo(
    () => availabilities,
    [availabilities]
  );

  const fetchSimilarProperties = async () => {
    try {
      // Fetch similar properties based on the selected location
      const similarResponse = await axios.post(
        "https://jawad-mohsin-just-home.hf.space/api/get_houses_by_location",
        new URLSearchParams({
          location: formData.location || "Whitefield",
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

  const handleEstimatePrice = async () => {
    try {
      const response = await axios.post(
        "https://jawad-mohsin-just-home.hf.space/api/predict",
        new URLSearchParams({
          sqft: formData.squareFootage,
          bhk: formData.bhk,
          bath: formData.bathrooms,
          loc: formData.location,
          area: formData.area,
          avail: formData.availability,
        })
      );

      setPredictedPrice(response.data.predicted_price);
      setPricePredictionHistory((prevHistory) => [...prevHistory, formData]);

      fetchSimilarProperties();
    } catch (error) {
      console.error("Error predicting price:", error);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 4;

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = similarProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleNavigateToHistory = () => {
    navigate("/history", { state: { pricePredictionHistory: formData } });
  };

  return (
    <div className="price-prediction">
      <div className="div">
        <img className="footer" src={footer} alt="" />
        <div className="overlap-2">
          <div className="similar-properties">
            {currentProperties.map((property) => (
              <SimilarPropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="group-6">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(similarProperties.length / propertiesPerPage)}
                variant="outlined"
                shape="rounded"
                page={currentPage}
                onChange={handlePageChange}
              />
            </Stack>
          </div>
        </div>
        <div className="heading-recent">Similar Properties</div>
        <p className="text-wrapper-13">
          “Similar Properties available for Sale and Rent based on predicted
          price”
        </p>

        <div className="img-2 custom" alt="Price prediction">
          <div className="overlap">
            <div className="overlap-group">
              <div className="div">
                <div className="text-wrapper">House Price Prediction</div>
              </div>
              <div className="link-jpg" />
            </div>

            <div className="element">
              <div className="location">Location</div>
              <div className="combobox">
                <Select.Root
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, location: value }))
                  }
                >
                  <Select.Trigger
                    placeholder="Select Location"
                    style={{ width: "100%" }}
                  />
                  <Select.Content>
                    {memoizedLocations.map((location) => (
                      <Select.Item key={location} value={location}>
                        {location}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </div>
            </div>
            <div className="element-4">
              <div className="location">Bathrooms</div>
              <div className="combobox">
                <Select.Root
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, bathrooms: value }))
                  }
                >
                  <Select.Trigger
                    placeholder="Select No. of Bathrooms"
                    style={{ width: "100%" }}
                  />
                  <Select.Content>
                    {bhk.map((item) => (
                      <Select.Item key={item} value={item}>
                        {item}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
                {/* <div className="combobox-menu">
                  <input
                    className="text-wrapper-2 predict-price-input"
                    placeholder="Enter no. of Bathrooms"
                  />
                </div> */}
              </div>
            </div>
            <div className="rectangle">
              {predictedPrice && (
                <span
                  style={{
                    position: "absolute",
                    left: "60px",
                    top: "4px",
                    fontWeight: "500",
                  }}
                >
                  {predictedPrice} Lakhs
                </span>
              )}
            </div>
            <div className="element-3">
              <div className="location">BHK</div>
              <div className="combobox">
                <Select.Root
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, bhk: value }))
                  }
                >
                  <Select.Trigger
                    placeholder="Select No. of BHK"
                    style={{ width: "100%" }}
                  />
                  <Select.Content>
                    {bhk.map((item) => (
                      <Select.Item key={item} value={item}>
                        {item}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
                {/* <div className="combobox-menu">
                  <input
                    className="text-wrapper-2 predict-price-input"
                    placeholder="Enter BHK"
                  />
                </div> */}
              </div>
            </div>

            <div className="element-5">
              <div className="location">Availability</div>
              <div className="combobox">
                <Select.Root
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, availability: value }))
                  }
                >
                  <Select.Trigger
                    placeholder="Select Availability"
                    style={{ width: "100%" }}
                    backgroundColor="rgb(255 255 255)"
                  />
                  <Select.Content>
                    {memoizedAvailabilities.map((availability) => (
                      <Select.Item key={availability} value={availability}>
                        {availability}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </div>
            </div>
            <div className="element-6">
              <div className="location">Area</div>
              <div className="combobox">
                <Select.Root
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, area: value }))
                  }
                >
                  <Select.Trigger
                    placeholder="Select Area"
                    style={{ width: "100%" }}
                  />
                  <Select.Content>
                    {memoizedAreas.map((area) => (
                      <Select.Item key={area} value={area}>
                        {area}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </div>
            </div>
            <div className="element-2">
              <div className="location">Square Footage</div>
              <div className="combobox">
                <div className="combobox-menu">
                  <input
                    type="number"
                    className="text-wrapper-2 predict-price-input"
                    placeholder="Enter Square Footage"
                    value={formData.squareFootage}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        squareFootage: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </div>
            <button className="button" onClick={handleEstimatePrice}>
              <div
                style={{ fontSize: "16px", fontWeight: "500" }}
                className="text-wrapper-3"
              >
                Estimate Price
              </div>
            </button>

            <div className="text-wrapper-4">Estimated Price</div>
          </div>
          <div className="link-h-jpg" />
          <div className="link-png" />
        </div>

        <div className="main-image">
          <div className="side-element">
            <div className="text-wrapper-14">680</div>
            <div className="text-wrapper-15">Award Winning</div>
            <div className="text-wrapper-16">8K+</div>
            <div className="text-wrapper-17">Happy Customer</div>
            <div className="text-wrapper-18">500+</div>
            <div className="text-wrapper-19">Property Ready</div>
          </div>
          <div className="text">
            <div className="the-site-real-wrapper">
              <p className="the-site-real">
                <span className="span">The </span>
                <span className="text-wrapper-20">#1</span>
                <span className="span">
                  site real estate
                  <br />
                  professionals trust*
                </span>
              </p>
            </div>
            <p className="unlock-the-latent">
              &#34;Unlock the latent value of your property through our
              sophisticated AI-driven price prediction tool, meticulously
              crafted to furnish you with precise and insightful
              estimations.&#34;
            </p>
            <div className="link-2">
              <p className="text-wrapper-21">Predict Price of your House</p>
              <img className="SVG-2" alt="Svg" src={arrowRightCream} />
            </div>
          </div>
          <div className="navbar">
            <Link to="/">
              <img
                className="logo-white-svg"
                alt="Logo white svg"
                src={logoWhite}
              />
            </Link>
            <div className="list-4">
              <div className="item-link">
                <Link
                  to="/"
                  style={{ textDecoration: "none" }}
                  className="text-wrapper-22"
                >
                  Home
                </Link>
              </div>
              <div className="item-link-2">
                <div className="text-wrapper-23">Predict Price</div>
                <img className="line" alt="Line" src={lineWhite} />
              </div>
              <div className="item-link-3">
                <div className="text-wrapper-24">Categories</div>
              </div>
              <div className="item-link-4">
                <div
                  style={{ cursor: "pointer", textDecoration: "none" }}
                  onClick={handleNavigateToHistory}
                  to="/history"
                  className="text-wrapper-25"
                >
                  History
                </div>
              </div>
              <div className="item-link-5">
                <div className="text-wrapper-26">Contact</div>
              </div>
            </div>
            <div className="phno">
              <div className="vector-wrapper">
                <img className="vector-2" alt="Vector" src={phoneIcon} />
              </div>
              <div className="phoneno">+92 349 7142343</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictPrice;
