import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Participants from './pages/Participants';
import { useState } from 'react';
import FaqPage from './pages/FaqPage';


function App() {
  const [participant,setParticipant]=useState();
  const add=()=>{
    console.log('add');
  };
  const getAll=()=>{
    console.log('getAll');
  };

  return (
    <>
      <Router>
        <Header />
        <Navbar />

        <div className="container my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/participants" element={<Participants />} />
            <Route path="/about" element={<About />} />
            <Route path="/FaqPage" element={<FaqPage />} />
            <Route path="/*" element={<NotFound />} />
          
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
