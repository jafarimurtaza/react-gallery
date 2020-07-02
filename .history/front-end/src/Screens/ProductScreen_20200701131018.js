import React from "react";
import {Link} from "react-router-dom";
import data from "../data";

function ProductScreen(props) {
  const productDetails = useSelector(state => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = const dispatch = useDispatch()
  console.log(props.match.params.id);
  var product = data.products.find((x) => x._id === props.match.params.id);
  return (
    <div>
      <div　className="back-to-result" >
        <Link to="/">Back to result</Link>
      </div>
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
    </div>
  );
}
export default ProductScreen;
