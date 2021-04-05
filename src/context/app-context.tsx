import {
  createContext,
  useState,
  useCallback,
  useContext,
  ReactNode,
} from 'react';

interface IAppContext {
  [key: string]: any;
}

interface IAppProviderProps {
  children: ReactNode;
  initialState?: object;
}

const AppContext = createContext({});
const { Provider } = AppContext;

export const { Consumer } = AppContext;

export const AppProvider = ({ children, initialState }: IAppProviderProps) => {
  const [state, setActualState] = useState(initialState);

  const setState = useCallback((newState, preUpdate) => {
    setActualState((prevState: any) => {
      if (preUpdate && preUpdate.call) {
        preUpdate();
      }
      return { ...prevState, ...newState };
    });
  }, []);

  const updateState = useCallback(
    (updateFunction) => setActualState(updateFunction),
    [],
  );

  const appContextValue = {
    globalState: { ...initialState, ...state },
    setState,
    updateState,
  };

  return <Provider value={appContextValue}>{children}</Provider>;
};

AppProvider.defaultProps = {
  initialState: {},
};

export const useAppContext = (): IAppContext => useContext(AppContext);

export default AppContext;
