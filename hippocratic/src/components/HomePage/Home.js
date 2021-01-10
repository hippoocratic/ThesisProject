import React, { useContext } from "react";
import HeroSection from "../HeroSection";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { homeObjOne } from "./Data";

export default function Home() {
  const { userData } = useContext(UserContext);
  return (
    <div className="page">
      {userData.user ? (
        <h5 style={{fontFamily:"Arima Madurai", color:"#4F4846"}}> Welcome {userData.user.displayName}</h5>
      ) : (
        <>
          <h2 style={{fontFamily:"Arima Madurai", color: "#4F4846"}}>You are not logged In</h2>
          <Link to="/login">log in </Link>
        </>
      )}
      <HeroSection {...homeObjOne} />
    </div>
  );
}
