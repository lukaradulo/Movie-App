import React, { createContext, useReducer } from "react";
import { userType } from '../redux/actions';
import { loginReducer } from './../redux/reducers';

interface ContextType {
  state: { loggedIn: userType },
  dispatch: React.Dispatch<{ type: string, payload: userType }>;
}

export const LoginContext = createContext<ContextType | null>(null);

const initialLoginState = { loggedIn: '' };

export function LoginProvider(props: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(loginReducer, initialLoginState);

  return <LoginContext.Provider value={{ state, dispatch }}>{props.children}</LoginContext.Provider>;
}
