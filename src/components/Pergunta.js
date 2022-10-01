import { useState } from "react";
import play from "../assets/img/seta_play.png";
import virar from "../assets/img/seta_virar.png";

export default function Pergunta(props) {
  const [inicio, setInicio] = useState("");
  const [questao, setQuestao] = useState("escondido");
  const [solucao, setSolucao] = useState("escondido");

  function zero(){
    setInicio("bloqueio");
    setQuestao("escondido");
    setSolucao("escondido");
  }

  function botaoPlay() {
    setInicio("escondido");
    setQuestao("");
  }

  function botaoVirar() {
    setQuestao("escondido");
    setSolucao("");
  }
  return (
    <>
      <div key={props.index} className={`pergunta-fechada ${inicio}`}>
        <p>Pergunta {props.index + 1}</p>
        <img src={play} alt={play} onClick={botaoPlay} />
      </div>
      <div key={props.key} className={`pergunta-aberta ${questao}`}>
        <p>{props.pergunta}</p>
        <img src={virar} alt={virar} onClick={botaoVirar} />
      </div>
      <div key={props.key} className={`pergunta-aberta ${solucao}`}>
        <p>{props.resposta}</p>
        <div className="container-botoes">
          <button onClick={zero}>Não lembrei</button>
          <button onClick={zero}>Quase não lembrei</button>
          <button onClick={zero}>Zap</button>
        </div>
      </div>
    </>
  );
}
