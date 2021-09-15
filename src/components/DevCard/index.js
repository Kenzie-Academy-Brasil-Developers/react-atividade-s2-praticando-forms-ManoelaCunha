import "./styles.css";
import img from "./avatar-outline.gif";

const DevCard = ({
  user: { nome, celular, areaAtuacao, nivelExperiencia, email },
  status,
  setStatus,
}) => {
  return (
    <>
      <div className="Dev-Card">
        <img src={img} alt="Avatar" />
        <h3>{nome}</h3>
        <p>Contato: {celular}</p>
        <p>Email: {email}</p>
        <p>Área de Atuação: {areaAtuacao}</p>
        <p>Nível de Experiência: {nivelExperiencia}</p>
      </div>

      <button className="btn-return" onClick={() => setStatus(!status)}>
        Voltar
      </button>
    </>
  );
};

export default DevCard;
