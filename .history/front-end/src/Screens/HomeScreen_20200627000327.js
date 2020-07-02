import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function HomeScreen(props){
  const [ products, setProduct ] = useState([]);
  useEffect(() => {
    const fetch
    return () => {
      // cleanup
    }
  }, [])
      return<ul className="products">
            {
              products.map(product =>
                <li>
                  <div className="product">
                  <Link to={'/product/' + product._id}> 
                       <img className="product-image" src={product.image} alt="product" /> 
                    </Link>
                    <div className="product-name">
                      <Link to={'/product/' + product._id}> {product.name} </Link>
                    </div>
                    <div className="product-rating">{product.rating} Stars ({product.numReview})</div>
                  </div>
                </li>)
            }
          </ul>
}
export default HomeScreen;