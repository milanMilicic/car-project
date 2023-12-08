import './style.scss'
import { Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
