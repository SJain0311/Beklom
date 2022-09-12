import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/home/Home";
import AboutUS from "./components/aboutus/AboutUS";
import Blogs from "./components/blogs/Blogs";
import FAQ from "./components/FAQ";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services"
import Footer from "./components/Footer";
import Onboarding from "./components/onboarding/Onboarding";
import Getstart from "./components/home/Getstart";
import Partnerwith from "./components/partnerwith/Partnerwith";
import Blogcategories from "./components/blogs/Blogcategories";
import './App.css';

function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUS />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/faq" element={<FAQ />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/onboarding" element={< Onboarding/>}/>
          <Route exact path="/getstart" element={< Getstart/>}/>
          <Route exact path="/partnerwith" element={< Partnerwith/>}/>
          <Route exact path="/blog-categories" element={< Blogcategories/>}/>
        </Routes>
        <Footer/>
    </Router>
  </div>
  );
}

export default App;
