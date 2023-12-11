import Book from "../components/Book/Book"
import Hero from "../components/Hero/Hero"
import Steps from "../components/Steps/Steps"
import VehicleModels from "../components/VehicleModels/VehicleModels"
import Banner from "../components/Banner/Banner"
import ChooseUs from "../components/ChooseUs/ChooseUs"

function Home() {
  return (
    <>
        <Hero />
        <Book />
        <Steps />
        <VehicleModels />
        <Banner />
        <ChooseUs />
    </>
  )
}
export default Home