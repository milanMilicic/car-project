import { FaCircleInfo, FaLocationDot, FaRegCalendarMinus, FaRegCalendarPlus, FaXmark } from "react-icons/fa6";

function Modal({activeClass, setActiveClass, submitFormModal, pickUpDate, dropOffDate, pickUpLocation, dropOffLocation, img, carType}) {
  return (
    <div className={`modal-container ${activeClass ? 'active' : ''}`}>
            <div className='modal-title'>
                <h3>COMPLETE RESERVATION</h3>
                <FaXmark onClick={() => {
                    setActiveClass(false);
                    document.getElementsByTagName('body')[0].style.removeProperty('overflow-y');
                }} id='close-icon-modal' size={25}/>
            </div>
            <div className='modal-info-message'>
                <p><FaCircleInfo /> Upon completing this reservation enquiry, you will receive:</p>
                <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
            </div>
            <div className='basic-info'>
                <div className='location-date-info'>
                    <h4>Location & Date</h4>
                    <div className='small-info-boxes'>
                        <span>
                            <FaRegCalendarPlus size={20} />
                            <div>
                                <label>Pick-Up Date & Time</label>
                                <p>{pickUpDate} / <input type="time"/></p>
                            </div>
                        </span>
                    </div>
                    <div className='small-info-boxes'>
                        <span>
                            <FaRegCalendarMinus size={20} />
                            <div>
                                <label>Drop-Off Date & Time</label>
                                <p>{dropOffDate} / <input type="time"/></p>
                            </div>
                        </span>
                    </div>
                    <div className='small-info-boxes'>
                        <span>
                            <FaLocationDot size={20} />
                            <div>
                                <label>Pick-Up Location</label>
                                <p>{pickUpLocation}</p>
                            </div>
                        </span>
                    </div>
                    <div className='small-info-boxes'>
                        <span>
                            <FaLocationDot size={20} />
                            <div>
                                <label>Drop-Off Location</label>
                                <p>{dropOffLocation}</p>
                            </div>
                        </span>
                    </div>
                </div>
                <div className='car-info'>
                    <h4>Car - <span>{carType}</span></h4>
                    <div className='car-image'>
                        <img src={img} alt={carType} />
                    </div>
                </div>
            </div>
            <div className='personal-information'>
                <h4>Personal Information</h4>
                <form onSubmit={submitFormModal} id="modal-form">
                    <div className='input-fields'>
                        <label htmlFor="firstName">First Name <span>*</span></label>
                        <input placeholder='Enter Your First Name' type="text" id='firstName'/>
                        <p>This field is required.</p>
                    </div>
                    <div className='input-fields'>
                        <label htmlFor="lastName">Last Name <span>*</span></label>
                        <input placeholder='Enter Your Last Name' type="text" id='lastName'/>
                        <p>This field is required.</p>
                    </div>
                    <div className='input-fields'>
                        <label htmlFor="phone">Phone Number <span>*</span></label>
                        <input placeholder='Enter Your Phone Number' type="tel" id='phone'/>
                        <p>This field is required.</p>
                    </div>
                    <div className='input-fields'>
                        <label htmlFor="age">Age <span>*</span></label>
                        <input placeholder='Enter Your Age' type="number" id='age' min={18} max={70}/>
                        <p>This field is required.</p>
                    </div>
                    <div className='input-fields'>
                        <label htmlFor="email">Email <span>*</span></label>
                        <input placeholder='Enter Your Email' type="email" id='email'/>
                        <p>This field is required.</p>
                    </div>
                    <div className='input-fields'>
                        <label htmlFor="address">Address <span>*</span></label>
                        <input placeholder='Enter Your Street Address' type="text" id='address'/>
                        <p>This field is required.</p>
                    </div>
                    <div className='input-fields'>
                        <label htmlFor="city">City <span>*</span></label>
                        <input placeholder='Enter Your City' type="text" id='city'/>
                        <p>This field is required.</p>
                    </div>
                    <div className='input-fields'>
                        <label htmlFor="zip">Zip Code <span>*</span></label>
                        <input placeholder='Enter Your Zip Code' type="text" id='zip'/>
                        <p>This field is required.</p>
                    </div>
                    <div className='input-fields'>
                        <input type="checkbox" /> Please send me latest news and updates
                    </div>
                    <div className='modal-button'>
                        <button type='submit'>Reserve Now</button>
                    </div>
                </form>
            </div>
        </div>
  )
}
export default Modal