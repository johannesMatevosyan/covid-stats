import { GET_COUNTRIES, COUNTRY_ERROR } from '../type';

const initialState = {
  countries: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case COUNTRY_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
