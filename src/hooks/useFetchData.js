import { useEffect, useReducer } from "react";
import { Status } from "../utils/constants";
import { Stock, GetStockResponse } from "../apis/stockPrice.api";

export const ACTIONS: Status = {
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  SET_DATA: "SET_DATA",
};

export type Action = {
  type: typeof ACTIONS,
  payload?: GetStockResponse,
};
export type Dispatch = (action: Action) => void;
export type State = {
  status: Status,
  data: Stock[],
};

const initialState: State = { status: Status.LOADING, data: null };

const reducer: State = (state: State, action: Action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return { status: Status.LOADING, data: null };
    case ACTIONS.SET_ERROR:
      return { status: Status.ERROR, data: null };
    case ACTIONS.SET_DATA:
      return { status: Status.SUCCESS, data: action.payload };
    default:
      throw new Error();
  }
};

const useFetchData = (apiFn): State => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: ACTIONS.SET_LOADING });
      try {
        const payload: GetStockResponse = await apiFn();
        dispatch({ type: ACTIONS.SET_DATA, payload });
      } catch (e) {
        console.error("In fetching data", e);
        dispatch({ type: ACTIONS.SET_ERROR });
      }
    };

    fetchData();
  }, [apiFn]);

  return state;
};

export default useFetchData;
