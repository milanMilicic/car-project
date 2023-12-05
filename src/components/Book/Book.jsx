import {FaCar} from 'react-icons/fa'
import {FaLocationDot, FaRegCalendarPlus, FaRegCalendarMinus} from 'react-icons/fa6'
import './Book.scss'

function Book() {

  return (
    <section id="book-section">
        <div className="container">
            <div className="book-container">
                <h3>Book a Car</h3>
                <div className="book-form">
                    <form>
                        <div className="select-box-content">
                            <label className="select-title">
                                <FaCar /> &nbsp; Car Type<span>*</span>
                            </label>
                            <select name="car-type" id="car-type">
                                <option>Select Your Car Type</option>
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
                            <select name="pick-up" id="pick-up">
                                <option>Choose Location for Pick-Up</option>
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
                            <select name="drop-off" id="drop-off">
                            <option>Choose Location for Drop-Off</option>
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
                            <input type="date" id='pick-up-date'/>
                        </div>
                        <div className="select-box-content">
                            <label className="select-title">
                                <FaRegCalendarMinus /> &nbsp; Drop-Off Date<span>*</span>
                            </label>
                            <input type="date" id='drop-off-date'/>
                        </div>
                        <button id='search'>Search</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Book