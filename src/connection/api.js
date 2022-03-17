/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useReducer } from "react";
import axios from "axios";

const API_URL = "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list";

const initialState = {
    isLoading: true,
    err: null,
    resdata: [],
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        isLoading: true,
        err: null,
      };
    case "SUCCESS":
      return {
        isLoading: false,
        err: null,
        resdata: action.data,
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        err: action.err,
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
        if (res.status == 200) {
          dispatch({ type: "SUCCESS", data: res.data});
        }
        throw new Error("Connection Failed!");
      } catch (error) {
        dispatch({ type: "ERROR", err: error.message });
      }
    }, [])
  

  return {
    req,
    isLoading: apiState.isLoading,
    err: apiState.err,
    resdata: apiState.resdata,
  }
}

export default apiCall;