import React from "react";
import "./Property.css";
import { Link } from "react-router-dom";
import logoWhite from "../../Assets/Logo/logo-white.png";
import lineWhite from "../../Assets/Images/lineWhite.png";
import phoneIcon from "../../Assets/Icons/phoneIcon.png";
import tickIcon from "../../Assets/Icons/tickIcon.png";
import propertyMain from "../../Assets/Images/propertyDescriptionImage.png";
import apollo1 from "../../Assets/Images/apollo1.png";
import apollo2 from "../../Assets/Images/apollo2.png";
import apollo3 from "../../Assets/Images/apollo3.png";
import idkIcon1 from "../../Assets/Icons/idkIcon1.png";
import idkIcon2 from "../../Assets/Icons/idkIcon2.png";
import idkIcon3 from "../../Assets/Icons/idkIcon3.png";
import vLine from "../../Assets/Images/verticalLine.png";
import arrowRightCream from "../../Assets/Icons/arrowRightCream.png";
import bathTubIcon from "../../Assets/Icons/bathTubIconBlack.png";
import bedIcon from "../../Assets/Icons/bedIconBlack.png";
import locationIcon from "../../Assets/Icons/locationIconBlack.png";
import boxIcon from "../../Assets/Icons/boxIconBlack.png";
import buttonLeft from "../../Assets/Icons/leftButton.png";
import buttonRight from "../../Assets/Icons/rightButton.png";
import likeButton from "../../Assets/Icons/likeButton.png";
import footer from "../../Assets/Images/Footer.png";
import dropDownArrow from "../../Assets/Images/dropDownArrow.png";

const Product = () => {
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
            <h1 className="text-wrapper-11">Luxury Family House</h1>
            <div className="overlap-wrapper">
              <div className="overlap-5">
                <div className="text-wrapper-12">Contact us</div>
                <div className="group-10">
                  <div className="search-bar">
                    <div className="group-11">
                      <div className="overlap-6">
                        <div className="text-wrapper-13">Your full name</div>
                      </div>
                      <div className="text-wrapper-14">Full name</div>
                      <div className="group-12">
                        <div className="overlap-group-3">
                          <div className="text-wrapper-13">Your E-mail</div>
                        </div>
                        <div className="text-wrapper-14">E-mail</div>
                      </div>
                      <div className="group-13">
                        <div className="overlap-7">
                          <div className="text-wrapper-13">Your message</div>
                        </div>
                        <div className="text-wrapper-14">Your Message</div>
                      </div>
                      <div className="group-14">
                        <div className="overlap-8">
                          <div className="text-wrapper-13">Phone number</div>
                        </div>
                        <div className="text-wrapper-14">Phone number</div>
                      </div>
                    </div>
                  </div>
                  <div className="group-15">
                    <div className="checkbox-filled">
                      <img className="vector-2" alt="Vector" src={tickIcon} />
                    </div>
                    <p className="i-agree-to-the">
                      <span className="span">
                        I agree to the processing of{" "}
                      </span>
                      <span className="text-wrapper-15">personal data.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-16">
              <div className="overlap-9">
                <p className="house-price">
                  <span className="text-wrapper-16">House Price: </span>
                  <span className="text-wrapper-17">4000000000 PKR</span>
                </p>
                <div className="button-primary">
                  <div className="primary-button">Buy House</div>
                </div>
              </div>
              <div className="overlap-10">
                <div className="rectangle" />
                <p className="at-vero-eos-et-iusto">
                  At vero eos et iusto odio dignissimos ducimus, qui haec putat,
                  ut ipsi auctori huius disciplinae placet: constituam, quid sit
                  numeranda nec me ab illo inventore veritatis et expedita
                  distinctio nam libero tempore, cum memoriter, tum etiam ac
                  ratione.
                  <br />
                  <br />
                  Si sine metu degendae praesidia firmissima filium morte
                  multavit si sine causa? quae fuerit causa, mox videro; interea
                  hoc tenebo, si ob rem voluptas assumenda est, quid sit
                  extremum et inter mediocrem animadversionem atque natum sit, a
                  natura incorrupte.
                  <br />
                  <br />
                  Omne animal, simul atque in sanguinem suum tam inportuno
                  tamque crudeli; sin, ut earum motus is imperii
                </p>
                <div className="rectangle-2" />
                <div className="text-wrapper-18">Description</div>
              </div>
            </div>
          </div>
          <div className="button-secondary">
            <div className="secondary-button-wrapper">
              <div className="secondary-button">Send Message</div>
            </div>
          </div>
          <div className="features">
            <div className="element">
              <div className="overlap-group-4">
                <div className="text-wrapper-19">12 BHK</div>
                <img className="line-2" alt="Line" src={vLine} />
                <img className="icon" alt="Icon" src={idkIcon1} />
              </div>
            </div>
            <div className="element">
              <div className="overlap-group-4">
                <div className="text-wrapper-19">4 Baths</div>
                <img className="line-2" alt="Line" src={vLine} />
                <img className="icon-2" alt="Icon" src={idkIcon2} />
              </div>
            </div>
            <div className="overlap-group-4">
              <div className="overlap-group-wrapper">
                <div className="overlap-11">
                  <div className="text-wrapper-20">Available</div>
                </div>
              </div>
            </div>
            <div className="element-2">
              <div className="overlap-group-4">
                <div className="text-wrapper-19">1200sqft</div>
                <img className="line-2" alt="Line" src={vLine} />
                <img className="icon-3" alt="Icon" src={idkIcon3} />
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-12">
          <div className="similar-properties">
            <div className="tabpanel-article">
              <div className="heading-link-new">New Apartment Nice Wiew</div>
              <img className="icon-4" alt="Icon" src={locationIcon} />
              <div className="link-avenue-o">42 Avenue O, Brooklyn</div>
              <div className="div-property-meta">
                <img className="icon-5" alt="Icon" src={bedIcon} />
                <div className="text-wrapper-21">4</div>
              </div>
              <div className="div-property-meta-2">
                <img className="icon-5" alt="Icon" src={bathTubIcon} />
                <div className="text-wrapper-21">1</div>
              </div>
              <div className="div-property-meta-3">
                <img className="icon-5" alt="Icon" src={boxIcon} />
                <div className="text-wrapper-22">460</div>
              </div>
              <div className="div-d-flex">
                <div className="overlap-group-5">
                  <div className="text-wrapper-23">$850</div>
                  <div className="text-wrapper-24">/month</div>
                </div>
                <img className="link-2" alt="Link" src={likeButton} />
              </div>
              <div className="div-property">
                <div className="link-3">
                  <div className="text-wrapper-25">FOR SALE</div>
                </div>
                <div className="span-featured">
                  <div className="featured">FEATURED</div>
                </div>
              </div>
            </div>
            <div className="tabpanel-article-2">
              <div className="heading-link-villa">Villa Garden With Pool</div>
              <img className="icon-4" alt="Icon" src={locationIcon} />
              <div className="link-bay-pkwy">6822 Bay Pkwy, Brooklyn</div>
              <div className="div-property-meta">
                <img className="icon-5" alt="Icon" src={bedIcon} />
                <div className="text-wrapper-21">3</div>
              </div>
              <div className="div-property-meta-2">
                <img className="icon-5" alt="Icon" src={bathTubIcon} />
                <div className="text-wrapper-21">1</div>
              </div>
              <div className="div-property-meta-3">
                <img className="icon-5" alt="Icon" src={boxIcon} />
                <div className="text-wrapper-22">350</div>
              </div>
              <div className="div-d-flex">
                <div className="overlap-group-5">
                  <div className="text-wrapper-23">$350</div>
                  <div className="text-wrapper-24">/month</div>
                </div>
                <img className="link-2" alt="Link" src={likeButton} />
              </div>
              <div className="div-property-2">
                <div className="link-3">
                  <div className="text-wrapper-25">FOR SALE</div>
                </div>
                <div className="span-featured">
                  <div className="featured">FEATURED</div>
                </div>
              </div>
            </div>
            <div className="tabpanel-article-3">
              <div className="heading-link-ely">Ely Parkway Apartment</div>
              <img className="icon-4" alt="Icon" src={locationIcon} />
              <div className="link-ave">7203 20th Ave, Brooklyn</div>
              <div className="div-property-meta">
                <img className="icon-5" alt="Icon" src={bedIcon} />
                <div className="text-wrapper-21">4</div>
              </div>
              <div className="div-property-meta-2">
                <img className="icon-5" alt="Icon" src={bathTubIcon} />
                <div className="text-wrapper-21">1</div>
              </div>
              <div className="div-property-meta-3">
                <img className="icon-5" alt="Icon" src={boxIcon} />
                <div className="text-wrapper-22">560</div>
              </div>
              <div className="div-d-flex">
                <div className="overlap-group-6">
                  <div className="text-wrapper-26">$5,800</div>
                  <div className="text-wrapper-27">/month</div>
                </div>
                <img className="link-2" alt="Link" src={likeButton} />
              </div>
              <div className="div-property-3">
                <div className="link-3">
                  <div className="text-wrapper-25">FOR RENT</div>
                </div>
                <div className="span-featured">
                  <div className="featured">FEATURED</div>
                </div>
              </div>
            </div>
            <div className="tabpanel-article-4">
              <div className="heading-link">Modern Elegant Apartment</div>
              <img className="icon-4" alt="Icon" src={locationIcon} />
              <div className="link-w-taylor">1458 W Taylor St</div>
              <div className="div-property-meta">
                <img className="icon-5" alt="Icon" src={bedIcon} />
                <div className="text-wrapper-21">4</div>
              </div>
              <div className="div-property-meta-2">
                <img className="icon-5" alt="Icon" src={bathTubIcon} />
                <div className="text-wrapper-21">1</div>
              </div>
              <div className="div-property-meta-3">
                <img className="icon-5" alt="Icon" src={boxIcon} />
                <div className="text-wrapper-22">300</div>
              </div>
              <div className="div-d-flex">
                <div className="overlap-group-5">
                  <div className="text-wrapper-23">$590</div>
                  <div className="text-wrapper-24">/month</div>
                </div>
                <img className="link-2" alt="Link" src={likeButton} />
              </div>
              <div className="link-wrapper">
                <div className="for-SALE-wrapper">
                  <div className="text-wrapper-25">FOR SALE</div>
                </div>
              </div>
            </div>
          </div>
          <div className="tablist-wrapper">
            <div className="tablist">
              <div className="tab-of">
                <div className="text-wrapper-28">1</div>
              </div>
              <div className="presentation-slick">
                <div className="overlap-group-7">
                  <div className="tab-of-2">
                    <div className="text-wrapper-28">2</div>
                  </div>
                  <div className="before" />
                </div>
              </div>
              <div className="tab-of-3">
                <div className="text-wrapper-28">3</div>
              </div>
              <div className="tab-of-4">
                <div className="text-wrapper-28">4</div>
              </div>
              <div className="tab-of-5">
                <div className="text-wrapper-28">5</div>
              </div>
              <div className="tab-of-6">
                <div className="text-wrapper-28">6</div>
              </div>
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
