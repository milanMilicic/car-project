import './VehicleModels.scss'
import  CAR_DATA  from './CarData'
import { useState } from 'react'

function VehicleModels() {

  const [carType, setCarType] = useState(CAR_DATA[0]);
  const [activeDiv, setActiveDiv] = useState('0');

  const makeActive = (id) => {
    return activeDiv === id ? 'active-model-name' : '';
  }


  return (
    <section id='models-section'>
      <div className='container'>
        <div className='models-container'>
          <div className='models-title'>
            <h5>Vehicle Models</h5>
            <h3>Our rental fleet</h3>
            <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
          </div>
          <div className='models-main'>
            <div className='model-name-wrapper'>
              <div id='0'  onClick={() => {
                setActiveDiv('0');
                setCarType(CAR_DATA[0]);
                
                }} className={`model-name ${makeActive('0')}`}>Audi A1 S-Line</div>

              <div id='1' onClick={(e) => {
                setActiveDiv('1');
                setCarType(CAR_DATA[1]);
              }} className={`model-name ${makeActive('1')}`}>VW Golf 6</div>

              <div id='2' onClick={(e) => {
                setActiveDiv('2');
                setCarType(CAR_DATA[2]);
              }} className={`model-name ${makeActive('2')}`}>Toyota Camry</div>

              <div id='3' onClick={(e) => {
                setActiveDiv('3');
                setCarType(CAR_DATA[3]);
              }} className={`model-name ${makeActive('3')}`}>BMW 320 ModernLine</div>
                
              <div id='4' onClick={(e) => {
                setActiveDiv('4');
                setCarType(CAR_DATA[4]);
              }} className={`model-name ${makeActive('4')}`}>Mercedes-Benz GLK</div>

              <div id='5' onClick={(e) => {
                setActiveDiv('5');
                setCarType(CAR_DATA[5]);
              }} className={`model-name ${makeActive('5')}`}>VW Passat CC</div>

            </div>
            
            <div className='img-table-wrapper'>
              <div id='img-wrapper'>
                  <img src={carType.img} alt="selected car" />
              </div>
              <div className="table-wrapper">
                <div className="table">
                  <div className='table-title'> <span>${carType.price}</span> <span>/</span> rent per day</div>
                  <div className='table-row'>
                    <p>Model</p>
                    <p>{carType.model}</p>
                  </div>
                  <div className='table-row'>
                    <p>Mark</p>
                    <p>{carType.mark}</p>
                  </div>
                  <div className='table-row'>
                    <p>Year</p>
                    <p>{carType.year}</p>
                  </div>
                  <div className='table-row'>
                    <p>Doors</p>
                    <p>{carType.doors}</p>
                  </div>
                  <div className='table-row'>
                    <p>AC</p>
                    <p>{carType.air}</p>
                  </div>
                  <div className='table-row'>
                    <p>Transmission</p>
                    <p>{carType.transmission}</p>
                  </div>
                  <div className='table-row'>
                    <p>Fuel</p>
                    <p>{carType.fuel}</p>
                  </div>
                </div>
                <div className='reserve-now-button'>RESERVE NOW</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default VehicleModels