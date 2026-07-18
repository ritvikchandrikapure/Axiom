import "../styles/Products.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import ProductHero from "../components/Products/ProductHero";
import ProductsList from "../components/Products/ProductsList";

function Products() {

  return (

    <>

      <Navbar />

      <ProductHero />

      <ProductsList />

      <Footer />

    </>

  );

}

export default Products;