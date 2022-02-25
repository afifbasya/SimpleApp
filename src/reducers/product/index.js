import { GET_LIST_PRODUCT } from '../../actions'

const initialState = {
  getListProductLoading: false,
  getListProductResult: false,
  getListProductError: false,
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT:
      return {
        ...state,
        getListProductLoading: action.payload.loading,
        getListProductResult: action.payload.data,
        getListProductError: action.payload.errorMessage,
      };

    default:
      return state;
  }
}

export default product
