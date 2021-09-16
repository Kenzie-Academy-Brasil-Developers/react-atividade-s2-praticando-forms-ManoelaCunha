import "./styles.css";
import img from "./avatar-outline.gif";
import { useHistory } from "react-router";

const DevCard = ({
  user: { nome, celular, areaAtuacao, nivelExperiencia, email },
}) => {
  const history = useHistory();

  const handleBackToForm = () => {
    history.push("/");
  };

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

      <button className="btn-return" onClick={handleBackToForm}>
        Voltar
      </button>
    </>
  );
};

export default DevCard;
