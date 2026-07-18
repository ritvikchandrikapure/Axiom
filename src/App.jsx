import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Portfolio from "./pages/Portfolio";
import Career from "./pages/Career";
// import About from "./pages/About";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/products"
          element={<Products />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />
        <Route

          path="/career"

          element={<Career />}

        />
          {/* <Route

          path="/about"

          element={<About />}

        /> */}

      </Routes>

    </BrowserRouter>
  );
}

export default App;