interface propsIconoCaracteristicas {
  imagen: string;
  titulo?: string;
  subtitulo: string;
}

const IconoCaracteristicas: React.FC<propsIconoCaracteristicas> = ({
  imagen,
  titulo,
  subtitulo,
}) => {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <div
        style={{
          border: "1px solid #999",
          display: "flex",
          alignItems: "center",
          borderRadius: "10px",
          padding: "0.5rem",
        }}
      >
        <img src={imagen} width={30} />
      </div>
      <div>
        <p style={{ margin: 0 }}>{titulo}</p>
        <p style={{ margin: 0, color: "#999" }}>{subtitulo}</p>
      </div>
    </div>
  );
};

export default IconoCaracteristicas;
