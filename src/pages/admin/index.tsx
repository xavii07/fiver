import { useState } from "react";

const initialUser = JSON.parse(
  localStorage.getItem("sb-zqntnjnwhjchamppgacx-auth-token") || "{}"
);

const AdminPage: React.FC = () => {
  const [user, setUser] = useState(initialUser);

  console.log(user.user.user_metadata);
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
            {user.user.user_metadata.nombres}{" "}
            {user.user.user_metadata.apellidos}
          </span>
        </h3>
        <p>Cedula: {user.user.user_metadata.cedula}</p>
        <p>Correo Electronico: {user.user.user_metadata.correoElectronico}</p>
        <p>Licencia Categoria: {user.user.user_metadata.categoriaLicencia}</p>
        <p>Direccion: {user.user.user_metadata.direccion}</p>
        <p>Celular: {user.user.user_metadata.celular}</p>
        <p>Provincia: {user.user.user_metadata.provincia}</p>
        <p>Sexo: {user.user.user_metadata.sexo}</p>
        <p>Fecha Nacimiento: {user.user.user_metadata.fechaNacimiento}</p>
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
