import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { BiPlusMedical } from 'react-icons/bi';
function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
           
          </div>
        </div>
        
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <BiPlusMedical className='navbar-icon' />
              Hippocratic
            </Link>
          </div>
          <small className='website-rights'>Hippocratic © 2020</small>
          <div className='social-icons'>
            
            
            
            
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;