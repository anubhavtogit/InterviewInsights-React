import { createContext, useReducer, useEffect } from 'react';
import Reducer from './Reducer';

const INITIAL_STATE = {
  token: localStorage.getItem('token') || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('token', state.token);
  }, [state.token]);

  return (
    <Context.Provider value={{ token: state.token, isFetching: state.isFetching, error: state.error, dispatch }}>
      {children}
    </Context.Provider>
  );
};
