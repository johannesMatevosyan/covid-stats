import { GET_COUNTRIES, COUNTRY_ERROR } from '../type';
import axios from 'axios';

export const getCountries = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://corona.lmao.ninja/v2/countries`);
    console.log('res ', res);
    dispatch({
      type: GET_COUNTRIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: COUNTRY_ERROR,
      payload: error,
    });
  }
};
