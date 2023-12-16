import './Download.scss'
import appStore from  '../../images/download/appstore.svg'
import googlePlay from '../../images/download/googleapp.svg'

function Download() {
  return (
    <section id='download-section'>
        <div className="container">
            <div className="download-container">
                <div className='content'>
                    <h2>Download our app to get most out of it</h2>
                    <p>Unlock a world of convenience at your fingertips! Download our app now to experience the ultimate in user-friendly access and exclusive features. Whether it's seamless browsing, personalized recommendations, or special promotions, our app is your gateway to getting the most out of your experience. Elevate your interaction with us – click, download, and enjoy the enhanced journey today!</p>
                    <div className='download-images'>
                        <img src={googlePlay} alt='Logo of GooglePlay' />
                        <img src={appStore} alt='Logo of AppStore' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Download