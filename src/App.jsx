
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes} from 'react-router-dom'
import Landing from './pages/Landingpage'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/conatct';
import PrivateRoute from './Route/PrivateRoute';



function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-out-cubic",
  });
}, []);

  return (
    <>
    <Navbar/>
    <Routes >
   
      <Route path="/" element={<Landing/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>
    </Routes>

    </>
  )
}

export default App
