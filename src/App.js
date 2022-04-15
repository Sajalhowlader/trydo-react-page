import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home/Home'
// import Header from '../src/Pages/Shared/Header/Header'
import OurServices from './Pages/OurServices/OurServices/OurServices';
import About from '../src/Pages/About/About/About'
import Portfolio from '../src/Pages/Portfolio/Portfolio/Portfolio'
import Team from './Pages/Team/Team/Team'
import Blog from './Pages/Blog/Blog/Blog'
import Contact from './Pages/Contact/Contact/Contact'
import './App.css';
import Products from './Pages/Home/Products/Products';
import Summer from './Pages/Home/Summer/Summer';
import Winter from './Pages/Home/Winter/Winter';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='services' element={<OurServices />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='team' element={<Team />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
        <Route path="products" element={<Products />} />
        <Route path="summer" element={<Summer />} />
        <Route path="winter" element={<Winter />} />
      </Routes>
    </div>
  );
}

export default App;
