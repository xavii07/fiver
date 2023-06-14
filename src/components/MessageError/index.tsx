interface PropsMessageErr {
  message: string;
}

const MessageErr: React.FC<PropsMessageErr> = ({ message }) => {
  return (
    <p style={{ fontSize: "12px", color: "#d32f2f", marginTop: "3px" }}>
      {message}
    </p>
  );
};

export default MessageErr;
