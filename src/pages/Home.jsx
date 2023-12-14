import Book from "../components/Book/Book"
import Hero from "../components/Hero/Hero"
import Steps from "../components/Steps/Steps"
import VehicleModels from "../components/VehicleModels/VehicleModels"
import Banner from "../components/Banner/Banner"
import ChooseUs from "../components/ChooseUs/ChooseUs"
import Testimonials from "../components/Testimonials/Testimonials"
import Faq from "../components/FAQ/Faq"

function Home() {
  return (
    <>
        <Hero />
        <Book />
        <Steps />
        <VehicleModels />
        <Banner />
        <ChooseUs />
        <Testimonials />
        <Faq />
    </>
  )
}
export default Home