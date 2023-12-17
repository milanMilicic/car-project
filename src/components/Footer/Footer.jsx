import './Footer.scss'
import { Link } from 'react-router-dom'
import {FaPhoneVolume} from 'react-icons/fa6'
import {FaEnvelope} from 'react-icons/fa6'

function Footer() {
  return (
    <section id='footer-section'>
        <div className="container">
            <div className="footer-container">
                <div className='column'>
                    <div className='text-row'>
                        <h4>CAR <span>Rental</span></h4>
                        <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                    </div>
                    <div className='info-row'>
                        <div className='phone-info'>
                            <Link to='/'><FaPhoneVolume /> (123)-456-789</Link>
                        </div>
                        <div className='email-info'>
                            <Link to='mailto:carrental@office.com'><FaEnvelope /> carrental@office.com</Link>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <h4>COMPANY</h4>
                    <Link to='/'>Belgrade</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Mobile</Link>
                    <Link to='/'>Blog</Link>
                    <Link to='/'>How We Work</Link>
                </div>
                <div className='column'>
                    <h4>WORKING HOURS</h4>
                    <p>Mon. - Fri: 9.00 - 17.00h</p>
                    <p>Saturday: 9.00 - 14.00h</p>
                    <p>Sunday: CLOSED</p>
                </div>
                <div className='column'>
                    <h4>SUBSCRIPTION</h4>
                    <p>Subscribe your Email address for latest news & updates.</p>
                    <form>
                        <input type="email" placeholder='Enter Email Address' />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Footer