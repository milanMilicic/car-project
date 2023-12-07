import {FaCar} from 'react-icons/fa'
import {FaLocationDot, FaRegCalendarPlus, FaRegCalendarMinus, FaXmark, FaCircleInfo} from 'react-icons/fa6'
import './Book.scss'
import audi from '../../images/cars-big/audia1.jpg'
import benz from '../../images/cars-big/benz.jpg'
import bmw from '../../images/cars-big/bmw320.jpg'
import golf from '../../images/cars-big/golf6.jpg'
import passat from '../../images/cars-big/passatcc.jpg'
import toyota from '../../images/cars-big/toyotacamry.jpg'
import { useState } from 'react'

function Book() {
    const [carType, setCarType] = useState('');
    const [pickUpLocation, setPickUpLocation] = useState('');
    const [dropOffLocation, setDropOffLocation] = useState('');
    const [pickUpDate, setPickUpDate] = useState('');
    const [dropOffDate, setDropOffDate] = useState('');

    const [errorMessage, setErrorMessage] = useState(false);

    let img;

    switch(carType){
        case 'Audi A1 S-Line':
            img = audi;
            break;
        case 'VW Golf 6':
            img = golf;
            break;
        case 'Toyota Camry':
            img = toyota;
            break;
        case 'BMW 320 ModernLine':
            img = bmw;
            break;
        case 'Mercedes-Benz GLK':
            img = benz;
            break;
        case 'VW Passat CC':
            img = passat;
            break;
        default:
            img = audi;
    }
    /* nasatvi dalje sa logikom za modal */


    const checkFields = (e) => {
        console.log(123);
        e.preventDefault();

        if(carType === 'default' || carType === ''){
            setErrorMessage(true);
        }

        if(pickUpLocation === 'default' || pickUpLocation === ''){
            setErrorMessage(true);
        }

        if(dropOffLocation === 'default' || dropOffLocation === ''){
            setErrorMessage(true);
        }

        if(pickUpDate === ''){
            setErrorMessage(true);
        }

        if(dropOffDate === ''){
            setErrorMessage(true);
        }
    }

  return (
    <section id="book-section">
        {/* modal */}

        <div className='modal-container'>
                    <div className='modal-title'>
                        <h3>COMPLETE RESERVATION</h3>
                        <FaXmark id='close-icon-modal' size={25}/>
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
                        <form id="modal-form">
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

        <div className="container">
            <div className="book-container">
                <h3>Book a Car</h3>
                <p className='error-message' style={{display: `${errorMessage ? 'block' : 'none'}`}}>All fields are required</p>
                <div className="book-form">
                    <form id="book-a-car-form" onSubmit={checkFields}>
                        <div className="select-box-content">
                            <label className="select-title">
                                <FaCar /> &nbsp; Car Type<span>*</span>
                            </label>
                            <select value={carType} onChange={(e) => setCarType(e.target.value)} name="car-type" id="car-type">
                                <option value="default">Select Your Car Type</option>
                                <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                                <option value="VW Golf 6">VW Golf 6</option>
                                <option value="Toyota Camry">Toyota Camry</option>
                                <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                                <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                                <option value="VW Passat CC">VW Passat CC</option>
                            </select>
                        </div>
                        <div className="select-box-content">
                            <label className="select-title">
                                <FaLocationDot /> &nbsp; Pick-Up Location<span>*</span>
                            </label>
                            <select value={pickUpLocation} onChange={(e) => setPickUpLocation(e.target.value)} name="pick-up" id="pick-up">
                                <option value="default">Choose Location for Pick-Up</option>
                                <option value="Belgrade">Belgrade</option>
                                <option value="Novi Sad">Novi Sad</option>
                                <option value="Nis">Niš</option>
                                <option value="Kragujevac">Kragujevac</option>
                                <option value="Subotica">Subotica</option>
                            </select>
                        </div>
                        <div className="select-box-content">
                            <label className="select-title">
                                <FaLocationDot /> &nbsp; Drop-Off Location<span>*</span>
                            </label>
                            <select value={dropOffLocation} onChange={(e) => setDropOffLocation(e.target.value)} name="drop-off" id="drop-off">
                            <option value="default">Choose Location for Drop-Off</option>
                                <option value="Belgrade">Belgrade</option>
                                <option value="Novi Sad">Novi Sad</option>
                                <option value="Nis">Niš</option>
                                <option value="Kragujevac">Kragujevac</option>
                                <option value="Subotica">Subotica</option>
                            </select>
                        </div>
                        <div className="select-box-content">
                            <label className="select-title">
                                <FaRegCalendarPlus /> &nbsp; Pick-Up Date<span>*</span>
                            </label>
                            <input value={pickUpDate} onChange={(e) => setPickUpDate(e.target.value)} type="date" id='pick-up-date'/>
                        </div>
                        <div className="select-box-content">
                            <label className="select-title">
                                <FaRegCalendarMinus /> &nbsp; Drop-Off Date<span>*</span>
                            </label>
                            <input value={dropOffDate} onChange={(e) => setDropOffDate(e.target.value)} type="date" id='drop-off-date'/>
                        </div>
                        <button type='submit' id='search'>Search</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Book