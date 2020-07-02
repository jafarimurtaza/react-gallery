import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomeScreen() {
  const [products, setProduct] = useState({products: []});

  useEffect(() => {
    const fetchData = async () => {
      const data1  = await axios("http://localhost:3000", 
      );
      setProduct(data1.data);
    };

    fetchData();
  }, []);
  return (
    <ul className="products">
      {dataproducts.products.map((product) => (
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
