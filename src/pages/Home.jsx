import Book from "../components/Book/Book"
import Hero from "../components/Hero/Hero"
import Steps from "../components/Steps/Steps"
import VehicleModels from "../components/VehicleModels/VehicleModels"

function Home() {
  return (
    <>
        <Hero />
        <Book />
        <Steps />
        <VehicleModels />
    </>
  )
}
export default Home