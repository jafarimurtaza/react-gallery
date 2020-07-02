import React, {useState, useEffect(() => {
  effect
  return () => {
    cleanup
  }
}, [input])} from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import axios from 'axios';

function HomeScreen(props){

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("/api/products");
      setProducts(data);
    }
    return () => {
    //  
    }
  }, [])
      return<ul className="products">
            {
             products.map((product =>
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
                </li>))
            }
          </ul>
}
export default HomeScreen;