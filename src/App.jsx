import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Portfolio from "./pages/Portfolio";
import Career from "./pages/Career";
import Event from "./pages/Event";

import Offshore from "./pages/service/Offshore";
import WebDevelopment from "./pages/service/WebDevelopment";
import DigitalMarketing from "./pages/service/DigitalMarketing";
import HireDeveloper from "./pages/service/HireDeveloper";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import VoiceAssistant from "./components/VoiceAssistant/VoiceAssistant";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/events" element={<Event />} />
        <Route path="/career" element={<Career />} />
        <Route path="/services/offshore" element={<Offshore />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/hire-developer" element={<HireDeveloper />} />
      </Routes>
      <VoiceAssistant />

    </BrowserRouter>
  );
}

export default App;