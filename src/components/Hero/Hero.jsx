import { Link } from "react-router-dom"
import  {FaCheckCircle, FaChevronRight} from 'react-icons/fa'
import carImg from '../../images/hero/main-car.png'
import './Hero.scss'

function Hero() {
  return (
    <section id="hero-section">
        <div className="container">
            <div className="hero-container">
                <div className="hero-text">
                    <h1>Plan your trip now</h1>
                    <h2>Save <span>big</span> with our car rental</h2> <br />
                    <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                    <div className="hero-buttons">
                        <Link to='/vehicle-models' id="book-ride">Book Ride <FaCheckCircle /></Link>
                        <Link to='/' id="learn-more">Learn More <FaChevronRight /></Link>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={carImg} alt="hero-car" />
                </div>
            </div>
        </div>
    </section>
  )
}
export default Hero