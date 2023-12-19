import {FaCar} from 'react-icons/fa'
import {FaLocationDot, FaRegCalendarPlus, FaRegCalendarMinus} from 'react-icons/fa6'
import './Book.scss'
import audi from '../../images/cars-big/audia1.jpg'
import benz from '../../images/cars-big/benz.jpg'
import bmw from '../../images/cars-big/bmw320.jpg'
import golf from '../../images/cars-big/golf6.jpg'
import passat from '../../images/cars-big/passatcc.jpg'
import toyota from '../../images/cars-big/toyotacamry.jpg'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'; //
import { toast } from 'react-toastify';
import Modal from './Modal'

function Book() {
    const [carType, setCarType] = useState('');
    const [pickUpLocation, setPickUpLocation] = useState('');
    const [dropOffLocation, setDropOffLocation] = useState('');
    const [pickUpDate, setPickUpDate] = useState('');
    const [dropOffDate, setDropOffDate] = useState('');

    const [activeClass, setActiveClass] = useState(false);

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

    const submitFormModal = (e) => {
        e.preventDefault();

        setActiveClass(false);
        toast.success("Reservation Complete");

        document.getElementsByTagName('body')[0].style.removeProperty('overflow-y');
    }


    const checkFields = (e) => {
        e.preventDefault();

        if(carType === 'default' || carType === ''){
            toast.warn('All fields are required');
            return;
        }

        if(pickUpLocation === 'default' || pickUpLocation === ''){
            toast.warn('All fields are required');
            return;
        }

        if(dropOffLocation === 'default' || dropOffLocation === ''){
            toast.warn('All fields are required');
            return;
        }

        if(pickUpDate === ''){
            toast.warn('All fields are required');
            return;
        }

        if(dropOffDate === ''){
            toast.warn('All fields are required');
            return;
        }

        setActiveClass(true);
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

    }

  return (
    <section id="book-section">

        {/* modal-overlay */}
        <div className={`modal-overlay ${activeClass ? 'active' : ''}`}></div>

        {/* modal */}
        <Modal activeClass={activeClass} setActiveClass={setActiveClass} carType={carType} dropOffDate={dropOffDate} dropOffLocation={dropOffLocation} pickUpDate={pickUpDate} pickUpLocation={pickUpLocation} img={img} submitFormModal={submitFormModal} />
        
        {/* form */}
        <div className="container">
            <div className="book-container">
                <h3>Book a Car</h3>
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
                            <input placeholder='Choose date for pick-up' value={pickUpDate} onChange={(e) => setPickUpDate(e.target.value)} type="date" id='pick-up-date'/>
                        </div>
                        <div className="select-box-content">
                            <label className="select-title">
                                <FaRegCalendarMinus /> &nbsp; Drop-Off Date<span>*</span>
                            </label>
                            <input placeholder='Choose date for drop-off' value={dropOffDate} onChange={(e) => setDropOffDate(e.target.value)} type="date" id='drop-off-date'/>
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