import { Link } from 'react-router-dom'
import logo from '../../images/logo/logo.png'
import './Navigation.scss'
import {FaBars} from 'react-icons/fa'
import {FaXmark} from 'react-icons/fa6'
import { useState } from 'react'

function Navigation() {
    const [isActive, setIsActive] = useState(false);

    const toggleOverlay = () => {
        setIsActive(!isActive);
    }

  return (
    <>
        <nav>
            {/* full size navbar */}
            <div className='navbar'>
                <div id='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='navigation-links'>
                    <ul>
                        <li><Link to='#hero-section'>Home</Link></li>
                        <li><Link to='#book-section'>Booking</Link></li>
                        <li><Link to='#models-section'>Vehicle Models</Link></li>
                        <li><Link to='#testimonials-section'>Testimonials</Link></li>
                        <li><Link to='#choose-us-section'>About</Link></li>
                        <li><Link to='#footer-section'>Contact</Link></li>
                    </ul>
                </div>
                <div className='menu-buttons'>
                    <Link to='#hero-section' id='sign-in'>Sign In</Link>
                    <Link to='#hero-section' id='register'>Register</Link>
                </div>

                {/* mobile navbar */}
                <div className='hamburger-menu' onClick={toggleOverlay}>
                    <FaBars id='hamburger-icon' size={25}/>
                </div>
            </div>

            {/* mobile menu overlay */}
            <div className={`overlay ${isActive ? 'overlay-active' : ''}`}>
                <div className='overlay_close' onClick={toggleOverlay}>
                    <FaXmark id='close-icon' size={35}/>
                </div>
                <ul className='overlay_mobile-navigation-links'>
                    <li><Link onClick={toggleOverlay} to='#hero-section'>Home</Link></li>
                    <li><Link onClick={toggleOverlay} to='#book-section'>Booking</Link></li>
                    <li><Link onClick={toggleOverlay} to='#models-section'>Vehicle Models</Link></li>
                    <li><Link onClick={toggleOverlay} to='#testimonials-section'>Testimonials</Link></li>
                    <li><Link onClick={toggleOverlay} to='#choose-us-section'>About</Link></li>
                    <li><Link onClick={toggleOverlay} to='#footer-section'>Contact</Link></li>
                    <li><Link onClick={toggleOverlay} to='#hero-section'>Sign In</Link></li>
                    <li><Link onClick={toggleOverlay} to='#hero-section'>Register</Link></li>
                </ul>
            </div>
        </nav> 
    </>
  )
}
export default Navigation