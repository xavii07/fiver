import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

interface LoginProviderProps {
  children: React.ReactNode;
}

export interface LoginContextProps {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginContext = createContext<LoginContextProps>({
  isAuth: false,
  setIsAuth: () => {
    console.warn("setIsAuth no ha sido definido");
  },
});

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("sb-zqntnjnwhjchamppgacx-auth-token") ? true : false
  );

  useEffect(() => {
    const token = localStorage.getItem("sb-zqntnjnwhjchamppgacx-auth-token");
    if (token) {
      setIsAuth(true);
    }
  }, [isAuth]);

  return (
    <LoginContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </LoginContext.Provider>
  );
};

const useAuthContext = () => useContext(LoginContext);
// eslint-disable-next-line react-refresh/only-export-components
export default useAuthContext;
