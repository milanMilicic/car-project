import Book from "../components/Book/Book"
import Hero from "../components/Hero/Hero"
import Steps from "../components/Steps/Steps"
import VehicleModels from "../components/VehicleModels/VehicleModels"
import Banner from "../components/Banner/Banner"

function Home() {
  return (
    <>
        <Hero />
        <Book />
        <Steps />
        <VehicleModels />
        <Banner />
    </>
  )
}
export default Home