import './Testimonials.scss'
import { register } from 'swiper/element/bundle';
import pfp1 from '../../images/testimonials/pfp1.jpg';
import pfp2 from '../../images/testimonials/pfp2.jpg';
import pfp3 from '../../images/testimonials/user.png';

register();

function Testimonials() {
  return (
    <section id='testimonials-section'>
        <div className="container">
            <div className='testimonials-container'>
                <div className='text-container'>
                    <h4>Reviewed by People</h4>
                    <h2>Client's Testimonials</h2>
                    <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
                </div>
                <div className='testimonials-slider'>
                <swiper-container slides-per-view="1" navigation="true" pagination="true" loop="true">
                    <swiper-slide>
                        <div className='testimonials-text-wrapper'>
                            <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."</p>
                            <div className='testimonials-img-wrapper'>
                                <div className='img-name'>
                                    <img src={pfp1} alt="" />
                                    <div className='name-location'>
                                        <p id='name'>Harry Potter</p>
                                        <p>Hogwarts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='testimonials-text-wrapper'>
                            <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."</p>
                            <div className='testimonials-img-wrapper'>
                                <div className='img-name'>
                                    <img src={pfp2} alt="" />
                                    <div className='name-location'>
                                        <p id='name'>Ron Weasley</p>
                                        <p>Hogwarts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='testimonials-text-wrapper'>
                            <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."</p>
                            <div className='testimonials-img-wrapper'>
                                <div className='img-name'>
                                    <img src={pfp3} alt="" />
                                    <div className='name-location'>
                                        <p id='name'>Jane Doe</p>
                                        <p>Belgrade</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper-container>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Testimonials