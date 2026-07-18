import "../../styles/Products.css";

import ProductItem from "./ProductItem";

import products from "./productsData";

function ProductsList() {

  return (

    <section className="productsSection">

      <div className="productsHeading">

        <h2>

          We Ensure To Provide Best Software Products Across The World

        </h2>

      </div>

      <div className="productsGrid">

        {

          products.map((item)=>(

            <ProductItem

              key={item.id}

              product={item}

            />

          ))

        }

      </div>

    </section>

  );

}

export default ProductsList;