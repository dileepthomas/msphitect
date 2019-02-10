import * as actionTypes from "./actionTypes";

export const getCourierCharges = () => dispatch => {
  dispatch({
    type: actionTypes.COURIER_CHARGES_FETCHING,
    courierChargesLoaderStatus: true
  });
  fetch("/api/couriercharges")
    .then(response => response.json())
    .then(responseData => {
      if (responseData.error) {
        const err = {
          message: responseData.error
        };
        throw err;
      }
      dispatch({
        type: actionTypes.COURIER_CHARGES_FETCHED,
        courierChargesData: responseData,
        courierChargesLoaderStatus: false
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.COURIER_CHARGES_FETCHED,
        courierChargesErrorMessage: err.message,
        courierChargesErrorStatus: true,
        courierChargesLoaderStatus: false
      });
    });
};
