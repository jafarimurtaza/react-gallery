import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productAction";

function ProductScreen(props) {
  const [vote, setVote ] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);

  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, [props.match.params.id, dispatch]);
  const handleAddToDashboard = () => {
    props.history.push("/dashboard/" + props.match.params.id + "?vote=")
  }

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error} </div>
      ) : (
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
              <li>Status: {product.status}</li>
              <li>
                Vote:{" "}
                <select value={vote} onChange={(e) => {setVote(e.target.value)}}>
                {[...Array(product.countInStock).keys()].map(x => 
                  <option key={x + 1} value={x + 1}>{x + 1}</option>
                  )}
                </select>
              </li>
              <li>
                <button className="button">Add to dashboard</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductScreen;
