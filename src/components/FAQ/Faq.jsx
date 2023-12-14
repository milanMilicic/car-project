import { useState } from 'react'
import './Faq.scss'
import {FaChevronDown} from 'react-icons/fa6'

function Faq() {

    const [ID, setID] = useState('1');
    
    const isActive = (id) => {
        return id === ID ? setID('') : setID(id);
    }

    const makeActiveQuestion = (id) => {
        return id === ID ? 'active-question' : '';
    }

    const makeActiveAnswer = (id) => {
        return id === ID ? 'active-answer' : '';
    }

  return (
    <section id='faq-section'>
        <div className="container">
            <div className="faq-container">
                <div className='faq-title'>
                    <h4>FAQ</h4>
                    <h2>Frequently Asked Questions</h2>
                    <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
                </div>
                <div className='question-answer'>
                    <div className='question-answer-container'>
                        <div className={`question ${makeActiveQuestion('1')}`} id='first-question' onClick={() => isActive('1')}>
                            <p>1. What is special about comparing rental car deals?</p>
                            <FaChevronDown />
                        </div>
                        <div className={`answer ${makeActiveAnswer('1')}`}>
                            <p>Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.</p>
                        </div>
                    </div>
                    <div className='question-answer-container'>
                        <div className={`question ${makeActiveQuestion('2')}`} id='second-question' onClick={() => isActive('2')}>
                            <p>2. How do I find the car rental deals?</p>
                            <FaChevronDown />
                        </div>
                        <div className={`answer ${makeActiveAnswer('2')}`}>
                            <p>You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.</p>
                        </div>
                    </div>
                    <div className='question-answer-container'>
                        <div className={`question ${makeActiveQuestion('3')}`} id='third-question' onClick={() => isActive('3')}>
                            <p>3. How do I find such low rental car prices?</p>
                            <FaChevronDown />
                        </div>
                        <div className={`answer ${makeActiveAnswer('3')}`}>
                            <p>Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Faq