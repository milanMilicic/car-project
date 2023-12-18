import './style.scss'
import { Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import ScrollToHashElement from "./components/Utilities/ScrollToHashElement";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <ToastContainer />
      <ScrollToHashElement />
    </>
  );
}

export default App;
