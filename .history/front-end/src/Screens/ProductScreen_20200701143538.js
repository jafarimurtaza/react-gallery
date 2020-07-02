import React, {useEffect} from "react";
import  {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";


function ProductScreen(props) {

  const productDetails = useSelector(state => state.productDetails);

  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detai(props.match.params.Id));
    return () => {
      // 
    }
  }, [])
  return (
    <div>
      <div　className="back-to-result" >
        <Link to="/">Back to result</Link>
      </div>
      {
        loading ?  <div>Loadin...</div> :
        error ? <div>{error} </div>: 
        (
          <div className="details">
          <div className="details-image">
            <img src={product.image} alt="product"></img>
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
              <li>
                {product.rating} Stars ({product.numReview} Revviews)
              </li>
              <li>
                Description:
                <div>{product.description}</div>
              </li>
            </ul>
          </div>
          <div className="detials-action">
            <ul>
              <li>
                Status: {product.status}
              </li>
              <li>
                Vote: <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </li>
              <li>
                <button className="button">Add to dashboard</button>
              </li>
            </ul>
          </div>
        </div>
        )
      }
     
    </div>
  );
}
export default ProductScreen;
