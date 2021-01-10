import React, { useState, useEffect} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { BiPlusMedical } from 'react-icons/bi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
// import {useHistory} from "react-router-dom";
// import DocterContext from '../context/DoctorContext'


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
   
 useEffect( () => {
   showButton() 
 },[]);
  
   window.addEventListener('resize', showButton);

  return (
  <>
  <div>



  

          




    {localStorage.getItem("auth-token") !== null && localStorage.getItem("userType") !== "Patient"? 
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav  className="navbar navbar-expand-lg navbar-light ">
        
          <div className='container-fluid'>
          
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <BiPlusMedical className='navbar-icon' />
              Hippocratic
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  to='/create-info'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Add
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/personalDoctor'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Main Page
                </Link>
              </li>
           
           
          
           

            </ul>
          </div>
        </nav>
      </IconContext.Provider>
      :
    
<IconContext.Provider value={{ color: '#fff' }}>
  <nav  className="navbar navbar-expand-lg navbar-light ">
  
    <div className='container-fluid'>
    
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <BiPlusMedical className='navbar-icon' />
        Hippocratic
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/Contact'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </li>
     
        <li className='nav-item'>
          <Link
            to='/doctors'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Doctors
          </Link>
        </li>

        <li className='nav-item'>
          <Link
            to='/profilePage'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            profilePage
          </Link>
        </li>

        <li className='nav-item'>
          <Link
            to='/appointment'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Booking
          </Link>
        </li>
       
       
      </ul>
    </div>
  </nav>
</IconContext.Provider>
}
      </div>
</>
  );
}


export default Navbar;

