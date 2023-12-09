import './Steps.scss'
import icon1 from '../../images/plan/icon1.png'
import icon2 from '../../images/plan/icon2.png'
import icon3 from '../../images/plan/icon3.png'

function Steps() {
  return (
    <section id='steps-section'>
        <div className='container'>
            <div className='steps-container'>
                <div className='title-wrapper'>
                    <h5>Plan your trip now</h5>
                    <h3>Quick & easy car rental</h3>
                </div>
                <div className='icons-container'>
                    <div className='icon-container'>
                        <div className='image-wrapper'>
                            <img src={icon1} alt="select-car-icon" />
                        </div>
                        <h4>Select Car</h4>
                        <p>We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                    </div>
                    <div className='icon-container'>
                        <div className='image-wrapper'>
                            <img src={icon2} alt="operator-icon" />
                        </div>
                        <h4>Contact Operator</h4>
                        <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                    </div>
                    <div className='icon-container'>
                        <div className='image-wrapper'>
                            <img src={icon3} alt="drive-icon" />
                        </div>
                        <h4>Let's Drive</h4>
                        <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Steps