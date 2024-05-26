import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Select } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import bannerMain from "../../Assets/Images/bannerMain.png";
import footer from "../../Assets/Images/Footer.png";
import lineWhite from "../../Assets/Images/lineWhite.png";
import logoWhite from "../../Assets/Logo/logo-white.png";
import phoneIcon from "../../Assets/Icons/phoneIcon.png";
import propertyIcon1 from "../../Assets/Icons/propertyIcon1.png";
import homeIcon1 from "../../Assets/Icons/homeIcon1.png";
import trustIcon from "../../Assets/Icons/trustIcon.png";
import arrowRightIcon from "../../Assets/Icons/arrowRightIcon.png";
import HouseCard from "../../Components/LandingPage/HouseCard";
import Categories from "../../Components/LandingPage/Categories";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const LandingPage = () => {
  const [locations, setLocations] = useState([]);
  const [areas, setAreas] = useState([]);
  const [availabilities, setAvailabilities] = useState([]);
  const [properties, setProperties] = useState([]);
  const [formData, setFormData] = useState({
    location: "",
    area: "",
    availability: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  const handleCategoryClick = async (category) => {
    setFormData((prev) => ({ ...prev, location: category }));
    fetchProperties();
  };

  const fetchProperties = async () => {
    try {
      const response = await axios.post(
        "https://jawad-mohsin-just-home.hf.space/api/get_properties",
        new URLSearchParams({
          location: formData.location,
          area: formData.area,
          availability: formData.availability,
        })
      );
      setProperties(response.data.entries || []);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const handleSearch = () => {
    fetchProperties();
  };

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
    fetchProperties();
  }, []);

  const memoizedLocations = useMemo(() => locations, [locations]);
  const memoizedAreas = useMemo(() => areas, [areas]);
  const memoizedAvailabilities = useMemo(
    () => availabilities,
    [availabilities]
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  // Shuffle locations array and take first 5 items
  const shuffledLocations = useMemo(() => {
    const shuffled = locations.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  }, [locations]);

  console.log(properties);
  console.log(formData);
  return (
    <div className="landing-page">
      <div className="div">
        <img className="footer" alt="Footer" src={footer} />
        <div className="group">
          <div className="group-2">
            <p className="we-use-real-estate">
              We Use Real Estate to Show
              <br />
              Our Appreciation of The
              <br />
              World
            </p>
            <p className="explore-our-passion">
              Explore our passion for real estate, a canvas where we express our
              admiration for the world&#39;s beauty and diversity. Every
              property tells a unique story, and we&#39;re here to help you find
              yours.
            </p>
            <div className="overlap-group">
              <div className="text-wrapper">$</div>
              <div className="text-wrapper-2">18M</div>
            </div>
            <div className="owned-from">Owned From Properties transactions</div>
            <div className="text-wrapper-3">15K+</div>
            <div className="properties-for-sell">Properties For sell</div>
            <div className="text-wrapper-4">26K+</div>
            <div className="properties-for-buy">Properties For buy</div>
            <div className="text-wrapper-5">890</div>
            <div className="daily-completed">
              Daily Completed
              <br />
              transactions.
            </div>
            <div className="link">
              <div className="text-wrapper-6">Get started</div>
              <img className="SVG" alt="Svg" src={arrowRightIcon} />
            </div>
          </div>
          <div className="link-jpg" />
        </div>
        <div className="predict-price">
          <div className="group-3">
            <Link to="/predict-price" className="link-2">
              <div className="text-wrapper-7">Predict Price</div>
              <img className="img" alt="Svg" src={arrowRightIcon} />
            </Link>
            <div className="overlap-group-2">
              <div className="heading">
                <p className="p">Predict the Price of your Property</p>
              </div>
              <p className="unlock-the-potential">
                &#34;Unlock the potential of your property with our AI-driven
                price prediction tool, tailored to give you accurate
                insights.&#34;
              </p>
            </div>
          </div>
        </div>
        <div className="featured-properties">
          {properties.length > 0 && (
            <div style={{ position: "absolute", left: "600px", top: "1200px" }}>
              <Stack spacing={2}>
                <Pagination
                  count={Math.ceil(properties.length / propertiesPerPage)}
                  variant="outlined"
                  shape="rounded"
                  page={currentPage}
                  onChange={handlePageChange}
                />
              </Stack>
            </div>
          )}
          {/* <button className="button">
            <div className="text-wrapper-8">See All Listing</div>
            <img className="SVG-2" alt="Svg" src={arrowRightIcon} />
          </button> */}
          <div className="properties-list" style={{ overflow: "hidden" }}>
            {currentProperties.length > 0 ? (
              currentProperties.map((property, index) => (
                <HouseCard key={index} id={index} property={property} />
              ))
            ) : (
              <h1
                style={{
                  color: "black",
                }}
              >
                No Properties Found
              </h1>
            )}
          </div>
          <div className="list">
            <div className="item-link">
              <div className="text-wrapper-15">All Properties</div>
            </div>
          </div>
          <p className="discover-our">
            &#34;Discover our handpicked selection of premier properties,
            curated just for you.&#34;
          </p>
          <div className="text-wrapper-16">Featured Properties</div>
        </div>
        <div className="areas-categories">
          <div className="categories">
            {shuffledLocations.map((category, index) => (
              <Categories
                key={index}
                id={index}
                category={category}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
          <div className="overlap-2">
            <p className="explore-the">
              &#34;Explore the neighborhoods of your dreams and discover the
              perfect property match in just a click.&#34;
            </p>
            <p className="find-properties-in">Find Properties in These Areas</p>
          </div>
        </div>
        <div className="group-4">
          <div className="group-5">
            <img className="icon-4" alt="Icon" src={propertyIcon1} />
            <div className="link-heading-wide bold">
              Wide Range of Properties
            </div>
            <p className="we-offer-expert">
              We offer expert legal help for all related property
              <br />
              items in Dubai.
            </p>
          </div>
          <div className="group-6">
            <img className="icon-5" alt="Icon" src={homeIcon1} />
            <div className="link-heading-buy bold">Buy or Rent Homes</div>
            <p className="we-sell-your-home-at">
              We sell your home at the best market price and very quickly as
              well.
            </p>
          </div>
          <div className="group-7">
            <img className="icon-6" alt="Icon" src={trustIcon} />
            <div className="link-heading bold">Trusted by Thousands</div>
            <p className="we-offer-you-free">
              We offer you free consultancy to get a loan for your
              <br />
              new home.
            </p>
          </div>
          <p className="text-wrapper-20">Why You Should Work With Us</p>
        </div>
        <div className="overlap-3">
          <img className="banner-main" alt="Banner main" src={bannerMain} />
          <div className="search-bar">
            <div className="div-list-item">
              <div className="label-keyword">Location</div>
              <div className="input-wrapper">
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
            <div className="div-list-item-2">
              <div className="combobox-menu-wrapper">
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
              <div className="label-status">Availability</div>
            </div>
            <div className="label-type">Area-Type</div>
            <div className="overlap-4">
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
            <button className="button-2" onClick={handleSearch}>
              <div className="text-wrapper-24">Search</div>
            </button>
          </div>
          <div className="navbar">
            <img
              className="logo-white-svg"
              alt="Logo white svg"
              src={logoWhite}
            />
            <div className="list-2">
              <div className="item-link-2">
                <div className="text-wrapper-25">Home</div>
              </div>
              <div className="item-link-3">
                <Link
                  to="/predict-price"
                  style={{ textDecoration: "none" }}
                  className="text-wrapper-26"
                >
                  Predict Price
                </Link>
              </div>
              <div className="item-link-4">
                <div className="text-wrapper-27">Categories</div>
              </div>
              <div className="item-link-5">
                <Link
                  to="/history"
                  style={{ textDecoration: "none" }}
                  className="text-wrapper-28"
                >
                  History
                </Link>
              </div>
              <div className="item-link-6">
                <div className="text-wrapper-29">Contact</div>
              </div>
            </div>
            <img className="line" alt="Line" src={lineWhite} />
            <div className="phno">
              <div className="vector-wrapper">
                <img className="vector" alt="Vector" src={phoneIcon} />
              </div>
              <div className="phoneno">+92 349 7142343</div>
            </div>
            <Link to="/predict-price" className="button-3">
              <div className="text-wrapper-30">Predict Price</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
