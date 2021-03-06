import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";


function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextdesc,
  headline,
  Description,
  buttonLabel,
  buttonLabel1,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
    

      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark "}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextdesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {Description}
                </p>
                <Link to="/register">
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link>
                <Link to="/register">
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel1}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-text-wrapper">
                <img
                  src={
                    "https://i.pinimg.com/564x/fe/0a/90/fe0a90c8608a537105fbf47b1b850550.jpg"
                  }
                  alt={alt}
                  className="home__hero.img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroSection;
