import React, {useContext} from 'react'
import HeroSection from '../HeroSection';
import { Link } from "react-router-dom";
import DoctorContext from "../../context/DoctorContext";
import {homeObjOne} from './Data';
import {homeObjTwo} from './Data';

export default function Home () {
    const { doctorData } = useContext(DoctorContext);
    return (
        
        <div className="page" >
           
            {doctorData.doctor ? (
                <h1> Welcome {doctorData.doctor.displayName}</h1>
            ) : (
                <>
      <h2>You are not logged In</h2>
      <Link to ="/login">log in </Link>
      </>
         )}
           <HeroSection {...homeObjOne}/>
           <HeroSection {...homeObjTwo}/> 
            
        </div>
    );
}

