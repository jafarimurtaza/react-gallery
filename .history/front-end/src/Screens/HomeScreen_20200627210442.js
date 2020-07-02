import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { get } from "core-js/fn/dict";

function HomeScreen(props) {
  // const [products, setProduct] = useState([]);
 
axios.get('http://webcode.me').then(resp => {

  console.log(resp.data);
});
  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product._id}>
          <div className="product">
            <Link to={"/product/" + product._id}>
              <img
                className="product-image"
                src={product.image}
                alt="product"
              />
            </Link>
            <div className="product-name">
              <Link to={"/product/" + product._id}> {product.name} </Link>
            </div>
            <div className="product-rating">
              {product.rating} Stars ({product.numReview})
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default HomeScreen;
