import React, { useReducer, useEffect } from 'react';
import * as actionTypes from '../actions/actions';
import axios from 'axios';
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.loading:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.success:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: null,
      };
    case actionTypes.error:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
const useFetch = (path) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    data: null,
    error: null,
  });
  useEffect(() => {
    axios
      .get(path)
      .then((resp) => {
        dispatch({
          type: actionTypes.success,
          data: resp.data.articles,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.error,
          error: err.message,
        });
      });
  }, []);
  const refetch = () => {
    axios
      .get(path)
      .then((resp) => {
        dispatch({
          type: actionTypes.success,
          data: resp.data.articles,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.error,
          error: err.message,
        });
      });
  };
  return {
    loading: state.loading,
    data: state.data,
    error: state.error,
    refetch,
  };
};
export default useFetch;
