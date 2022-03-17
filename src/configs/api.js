/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useReducer } from "react";
import axios from "axios";

const API_URL = "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list";

const initialState = {
    isLoading: true,
    error: null,
    resdata: [],
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "SUCCESS":
      return {
        isLoading: false,
        error: null,
        resdata: action.data,
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const apiCall = () => {
  const [apiState, dispatch] = useReducer(apiReducer, initialState);

  const req = useCallback(async () => {
      dispatch({ type: "FETCH"});
      try {
        const res = await axios.get(API_URL);
        if (res.status !== 200) {
          throw new Error("Connection Failed!");
        }
        dispatch({ type: "SUCCESS", data: res.data});
      } catch (error) {
        dispatch({ type: "ERROR", error: error.message });
      }
    }, []);

  return {
    req,
    isLoading: apiState.isLoading,
    error: apiState.error,
    resdata: apiState.resdata,
  };
};

export default apiCall;