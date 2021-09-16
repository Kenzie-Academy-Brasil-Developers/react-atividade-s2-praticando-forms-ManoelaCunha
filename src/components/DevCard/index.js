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
        <h3 className="title-two">{nome}</h3>
        <p>
          <strong>Contato:</strong> {celular}
        </p>
        <p>
          <strong>Área de Atuação:</strong> {areaAtuacao}
        </p>
        <p>
          <strong>Nível de Experiência:</strong> {nivelExperiencia}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>

      <button className="btn-return" onClick={() => setStatus(!status)}>
        Voltar
      </button>
    </>
  );
};

export default DevCard;
