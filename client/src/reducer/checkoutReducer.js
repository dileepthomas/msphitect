import * as actionTypes from "../actions/actionTypes";

const defaultState = {
  courierChargesData: [],
  courierChargesErrorMessage: null,
  courierChargesErrorStatus: false,
  courierChargesLoaderStatus: false
};

const checkoutReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.COURIER_CHARGES_FETCHING:
      return {
        ...state,
        courierChargesLoaderStatus: action.courierChargesLoaderStatus
      };
    case actionTypes.COURIER_CHARGES_FETCHED:
      return {
        ...state,
        courierChargesData: action.courierChargesData,
        courierChargesErrorMessage: action.courierChargesErrorMessage,
        courierChargesErrorStatus: action.courierChargesErrorStatus,
        courierChargesLoaderStatus: action.courierChargesLoaderStatus
      };
    default:
      return {
        ...state
      };
  }
};

export default checkoutReducer;
