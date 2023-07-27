import { useContext, useLayoutEffect, useState } from "react";
import { createContext } from "react";
import { type IUsuarioRegistro } from "../interfaces/usuario";

interface LoginProviderProps {
  children: React.ReactNode;
}

export interface LoginContextProps {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUsuarioRegistro;
}

export const LoginContext = createContext<LoginContextProps>({
  isAuth: false,
  setIsAuth: () => {
    console.warn("setIsAuth no ha sido definido");
  },
  user: {
    cedula: "",
    nombres: "",
    apellidos: "",
    correoElectronico: "",
    fechaNacimiento: "",
    rol: "",
    contrasena: "",
    celular: "",
    direccion: "",
    provincia: "",
    sexo: "",
    categoriaLicencia: "",
  },
});

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("sb-zqntnjnwhjchamppgacx-auth-token") ? true : false
  );
  const [user, setUser] = useState<IUsuarioRegistro>({
    cedula: "",
    nombres: "",
    apellidos: "",
    correoElectronico: "",
    fechaNacimiento: "",
    rol: "",
    contrasena: "",
    celular: "",
    direccion: "",
    provincia: "",
    sexo: "",
    categoriaLicencia: "",
  });

  useLayoutEffect(() => {
    const token = JSON.parse(
      localStorage.getItem("sb-zqntnjnwhjchamppgacx-auth-token") as string
    );

    if (token) {
      setIsAuth(true);
      setUser(token.user.user_metadata);
    }
  }, [isAuth]);

  return (
    <LoginContext.Provider value={{ isAuth, setIsAuth, user }}>
      {children}
    </LoginContext.Provider>
  );
};

const useAuthContext = () => useContext(LoginContext);
// eslint-disable-next-line react-refresh/only-export-components
export default useAuthContext;
