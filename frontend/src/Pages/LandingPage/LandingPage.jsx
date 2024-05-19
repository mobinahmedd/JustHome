import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import bannerMain from "../../Assets/Images/bannerMain.png";
import footer from "../../Assets/Images/Footer.png";
import lineWhite from "../../Assets/Images/lineWhite.png";
import dropDownArrow from "../../Assets/Images/dropDownArrow.png";
import logoWhite from "../../Assets/Logo/logo-white.png";
import phoneIcon from "../../Assets/Icons/phoneIcon.png";
import propertyIcon1 from "../../Assets/Icons/propertyIcon1.png";
import homeIcon1 from "../../Assets/Icons/homeIcon1.png";
import trustIcon from "../../Assets/Icons/trustIcon.png";
import bathTubIcon from "../../Assets/Icons/bathTubIcon.png";
import bedIcon from "../../Assets/Icons/bedIcon.png";
import locationIcon from "../../Assets/Icons/locationIcon.png";
import boxIcon from "../../Assets/Icons/boxIcon.png";
import arrowRightIcon from "../../Assets/Icons/arrowRightIcon.png";

const LandingPage = () => {
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
            <div className="link-2">
              <div className="text-wrapper-7">Predict Price</div>
              <img className="img" alt="Svg" src={arrowRightIcon} />
            </div>
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
          <button className="button">
            <div className="text-wrapper-8">See All Listing</div>
            <img className="SVG-2" alt="Svg" src={arrowRightIcon} />
          </button>
          <div className="properties-list">
            <div className="article">
              <div className="overlap">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <div className="before-wrapper">
                      <div className="before" />
                    </div>
                    <div className="for-sale-wrapper">
                      <div className="for-sale">FOR SALE</div>
                    </div>
                    <div className="span-featured">
                      <div className="featured">FEATURED</div>
                    </div>
                  </div>
                </div>
                <div className="heading-link">Diamond Manor Apartment</div>
                <img className="icon" alt="Icon" src={locationIcon} />
                <div className="link-ave">7802 20th Ave, Brooklyn</div>
                <div className="div-property-meta">
                  <img className="icon-2" alt="Icon" src={bedIcon} />
                  <div className="text-wrapper-9">4</div>
                </div>
                <div className="div-property-meta-2">
                  <img className="icon-2" alt="Icon" src={bathTubIcon} />
                  <div className="text-wrapper-9">2</div>
                </div>
                <img className="icon-3" alt="Icon" src={boxIcon} />
                <div className="text-wrapper-10">500</div>
                <div className="text-wrapper-11">$259,000</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <div className="div-wrapper">
                      <div className="before" />
                    </div>
                    <div className="for-rent-wrapper">
                      <div className="for-rent">FOR RENT</div>
                    </div>
                    <div className="featured-wrapper">
                      <div className="featured">FEATURED</div>
                    </div>
                  </div>
                </div>
                <div className="heading-link-new">New Apartment Nice Wiew</div>
                <img className="icon" alt="Icon" src={locationIcon} />
                <div className="link-avenue-o">42 Avenue O, Brooklyn</div>
                <div className="div-property-meta">
                  <img className="icon-2" alt="Icon" src={bedIcon} />
                  <div className="text-wrapper-9">4</div>
                </div>
                <div className="div-property-meta-2">
                  <img className="icon-2" alt="Icon" src={bathTubIcon} />
                  <div className="text-wrapper-9">1</div>
                </div>
                <img className="icon-3" alt="Icon" src={boxIcon} />
                <div className="text-wrapper-10">460</div>
                <div className="text-wrapper-12">$850</div>
                <div className="text-wrapper-13">/month</div>
              </div>
            </div>
            <div className="article-2">
              <div className="overlap">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <div className="link-3">
                      <div className="before" />
                    </div>
                    <div className="for-sale-wrapper">
                      <div className="for-sale">FOR SALE</div>
                    </div>
                    <div className="span-featured">
                      <div className="featured">FEATURED</div>
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-14">Eaton Garth Penthouse</div>
                <img className="icon" alt="Icon" src={locationIcon} />
                <div className="link-ave">7722 18th Ave, Brooklyn</div>
                <div className="div-property-meta">
                  <img className="icon-2" alt="Icon" src={bedIcon} />
                  <div className="text-wrapper-9">4</div>
                </div>
                <div className="div-property-meta-2">
                  <img className="icon-2" alt="Icon" src={bathTubIcon} />
                  <div className="text-wrapper-9">2</div>
                </div>
                <img className="icon-3" alt="Icon" src={boxIcon} />
                <div className="text-wrapper-10">450</div>
                <div className="text-wrapper-11">$180,000</div>
              </div>
            </div>
            <div className="article-3">
              <div className="overlap">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <div className="link-4">
                      <div className="before" />
                    </div>
                    <div className="for-rent-wrapper">
                      <div className="for-rent">FOR RENT</div>
                    </div>
                  </div>
                </div>
                <div className="heading-link-north">North Dillard Street</div>
                <img className="icon" alt="Icon" src={locationIcon} />
                <div className="link-bell">4330 Bell Shoals Rd</div>
                <div className="div-property-meta">
                  <img className="icon-2" alt="Icon" src={bedIcon} />
                  <div className="text-wrapper-9">4</div>
                </div>
                <div className="div-property-meta-2">
                  <img className="icon-2" alt="Icon" src={bathTubIcon} />
                  <div className="text-wrapper-9">2</div>
                </div>
                <img className="icon-3" alt="Icon" src={boxIcon} />
                <div className="text-wrapper-10">400</div>
                <div className="text-wrapper-12">$250</div>
                <div className="text-wrapper-13">/month</div>
              </div>
            </div>
            <div className="article-4">
              <div className="overlap">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <div className="link-5">
                      <div className="before" />
                    </div>
                    <div className="for-sale-wrapper">
                      <div className="for-sale">FOR SALE</div>
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-14">Skyper Pool Apartment</div>
                <img className="icon" alt="Icon" src={locationIcon} />
                <div className="link-6">1020 Bloomingdale Ave</div>
                <div className="div-property-meta">
                  <img className="icon-2" alt="Icon" src={bedIcon} />
                  <div className="text-wrapper-9">4</div>
                </div>
                <div className="div-property-meta-2">
                  <img className="icon-2" alt="Icon" src={bathTubIcon} />
                  <div className="text-wrapper-9">2</div>
                </div>
                <img className="icon-3" alt="Icon" src={boxIcon} />
                <div className="text-wrapper-10">450</div>
                <div className="text-wrapper-11">$280,000</div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <div className="link-7">
                      <div className="before" />
                    </div>
                    <div className="for-sale-wrapper">
                      <div className="for-sale">FOR SALE</div>
                    </div>
                    <div className="span-featured">
                      <div className="featured">FEATURED</div>
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
          </div>
          <div className="list">
            <div className="item-link">
              <div className="text-wrapper-15">All Properties</div>
            </div>
            <div className="item-link-villa">Villa</div>
            <div className="item-link-apartments">Apartments</div>
            <div className="item-link-office">Office</div>
          </div>
          <p className="discover-our">
            &#34;Discover our handpicked selection of premier properties,
            curated just for you.&#34;
          </p>
          <div className="text-wrapper-16">Featured Properties</div>
        </div>
        <div className="areas-categories">
          <div className="categories">
            <div className="link-8">
              <div className="overlap-group-4">
                <div className="heading-new-york">New York</div>
                <div className="text-wrapper-17">8 Properties</div>
              </div>
            </div>
            <div className="link-9">
              <div className="overlap-group-4">
                <div className="heading-chicago">Chicago</div>
                <div className="text-wrapper-17">2 Properties</div>
              </div>
            </div>
            <div className="link-10">
              <div className="overlap-group-4">
                <div className="heading-los">Los Angeles</div>
                <div className="text-wrapper-18">1 Property</div>
              </div>
            </div>
            <div className="link-11">
              <div className="overlap-group-4">
                <div className="heading-miami">Miami</div>
                <div className="text-wrapper-17">2 Properties</div>
              </div>
            </div>
            <div className="link-12">
              <div className="overlap-group-4">
                <div className="text-wrapper-19">Florida</div>
                <div className="text-wrapper-17">3 Properties</div>
              </div>
            </div>
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
              <div className="label-keyword">Area</div>
              <div className="input-wrapper">
                <div className="input">
                  <div className="text-wrapper-21">Enter Keyword</div>
                </div>
              </div>
            </div>
            <div className="div-list-item-2">
              <div className="combobox-menu-wrapper">
                <div className="combobox-menu">
                  <div className="text-wrapper-22">All Status</div>
                  <img src={dropDownArrow} className="presentation" />
                </div>
              </div>
              <div className="label-status">Availability</div>
            </div>
            <div className="label-type">Area-Type</div>
            <div className="overlap-4">
              <div className="combobox-menu-2">
                <div className="text-wrapper-23">All Type</div>
                <img src={dropDownArrow} className="presentation" />
              </div>
            </div>
            <button className="button-2">
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
                <div className="text-wrapper-26">Predict Price</div>
              </div>
              <div className="item-link-4">
                <div className="text-wrapper-27">Categories</div>
              </div>
              <div className="item-link-5">
                <div className="text-wrapper-28">History</div>
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
