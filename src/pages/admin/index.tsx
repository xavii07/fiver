import useAuthContext from "../../context/LoginContext";

export interface Usuario {
  apellidos: string;
  categoriaLicencia: string;
  cedula: string;
  celular: string;
  contrasena: string;
  correoElectronico: string;
  direccion: string;
  fechaNacimiento: string;
  nombres: string;
  provincia: string;
  sexo: string;
}

const AdminPage: React.FC = () => {
  /*
  const [user, setUser] = useState<Usuario | null>(null);

  useLayoutEffect(() => {
    const storedUser = JSON.parse(
      localStorage.getItem("sb-zqntnjnwhjchamppgacx-auth-token") || "{}"
    );

    if (storedUser && Object.keys(storedUser).length > 0) {
      setUser(storedUser?.user?.user_metadata);
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }*/

  const { user } = useAuthContext();

  console.log({ user });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        flexDirection: "row-reverse",
        alignItems: "center",
        height: "calc(100vh - 64px)",
      }}
    >
      <div>
        <h1 style={{ textAlign: "center" }}>Perfil Usuario</h1>
        <h3>
          Bienvenido:{" "}
          <span>
            {user?.nombres} {user?.apellidos}
          </span>
        </h3>
        <p>Cedula: {user?.cedula}</p>
        <p>Correo Electronico: {user?.correoElectronico}</p>
        <p>Licencia Categoria: {user?.categoriaLicencia}</p>
        <p>Direccion: {user?.direccion}</p>
        <p>Celular: {user?.celular}</p>
        <p>Provincia: {user?.provincia}</p>
        <p>Sexo: {user?.sexo}</p>
        <p>Fecha Nacimiento: {user?.fechaNacimiento}</p>
      </div>
      <div style={{ alignSelf: "center" }}>
        <img
          width={250}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png"
          alt="imagen_foto"
        />
      </div>
    </div>
  );
};

export default AdminPage;
