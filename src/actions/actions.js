import axios from 'axios';

export const GET_DATA = "GET_DATA";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAIL = "GET_DATA_FAIL";

export const getData = () => dispatch => {
    console.log("hi")
    dispatch({ type: GET_DATA });
    axios
      .get('https://www.whenisthenextmcufilm.com/api')
      .then(res =>
        dispatch({ type: GET_DATA_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: GET_DATA_FAIL, payload: err }));
  };
