import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { store as initialStore, IStore, Family } from "./Store";

// Define the initial state type
interface AppState {
  store: IStore;
  dispatch: <K extends keyof IStore>(name: K, value: IStore[K]) => void;
  multiDispatch: (actions: Action[]) => void;
}

// Define the action type
type Action = {
  [K in keyof IStore]: [K, IStore[K]];
}[keyof IStore];

const AppContext = createContext<AppState | undefined>(undefined);

const reducer = (state: IStore, actions: Action[]): IStore => {
  let newState = { ...state };
  actions.forEach(([name, value]) => {
    newState = {
      ...newState,
      [name]: value,
    };
  });
  return newState;
};

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, multiDispatch] = useReducer(reducer, initialStore);

  const dispatch = <K extends keyof IStore>(name: K, value: IStore[K]) => {
    multiDispatch([[name, value]] as Action[]);
  };

  return (
    <AppContext.Provider value={{ store: state, dispatch, multiDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = (): AppState => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, AppContext, useGlobalContext };
