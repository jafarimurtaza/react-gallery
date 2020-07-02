import React, {useEffect} from "react";
import  {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import data from "../data";
import { detailsProduct } from "../actions/productAction";

function ProductScreen(props) {
  const productDetails = useSelector(state => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      // 
    }
  }, [])
  console.log(props.match.params.id);
  var product = data.products.find((x) => x._id === props.match.params.id);
  return (
    <div>
      <div　className="back-to-result" >
        <Link to="/">Back to result</Link>
      </div>
      {
        loading ?  <div>Loadin...</div> :
        error ? <div>{error} </div>: 
        (

        )
      }
     
    </div>
  );
}
export default ProductScreen;
