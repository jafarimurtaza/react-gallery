import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
import { listProducts } from '../actions/productAction';

function HomeScreen(props){

  const productList =  useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch  = useDispatch();

  useEffect(() => {
    dispatch(listProducts ());

    return () => {};
  }, []);
  
      return<ul className="products">
            {
              products.map((product =>
                <li key={product._id}>
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