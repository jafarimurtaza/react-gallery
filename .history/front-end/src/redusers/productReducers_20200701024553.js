const { action } = require("commander");

function productListReducer(state = { products: [] }, action) {

      switch ( action.type ) {
            case PRODUCT_LIST-REQUEST:
                  return { loading: true }
      }
}