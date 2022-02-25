import axios from 'axios';
import {
  API_BACKEND,
  API_HEADER,
  API_TIMEOUT
} from '../../utils';
import {dispatchError, dispatchLoading, dispatchSuccess} from '../../utils';

export const GET_LIST_PRODUCT = 'GET_LIST_PRODUCT';

export const getListProduct = () => {
  return (dispatch) => {
    // LOADING
    dispatchLoading(dispatch, GET_LIST_PRODUCT);

    axios({
      method: 'GET',
      url: API_BACKEND + 'products',
      timeout: API_TIMEOUT,
      headers: API_HEADER,
    })
      .then((response) => {
        console.log("Response : ", response);
        
        if (response.status !== 200) {
          // ERROR
          dispatchError(dispatch, GET_LIST_PRODUCT, response);
        } else {
          //SUKSES
          dispatchSuccess(
            dispatch,
            GET_LIST_PRODUCT,
            response.data ? response.data?.data : [],
          );
        }
      })
      .catch((error) => {
        console.log("Error : ", error.response);
        // ERROR
        dispatchError(dispatch, GET_LIST_PRODUCT, error);

        alert(error);
      });
  };
};
