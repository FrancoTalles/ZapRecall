import { useState } from "react";
import play from "../assets/img/seta_play.png";
import virar from "../assets/img/seta_virar.png";
import certo from "../assets/img/icone_certo.png";
import quase from "../assets/img/icone_quase.png";
import erro from "../assets/img/icone_erro.png";
import styled from "styled-components";

export default function Pergunta(props) {
  const [inicio, setInicio] = useState("");
  const [questao, setQuestao] = useState("escondido");
  const [solucao, setSolucao] = useState("escondido");
  const [corFinal, setCorFinal] = useState("#333333");
  const [statusImg, setStatusImg] = useState(play);
  const {
    respondidos,
    setRespondidos,
    listaResultado,
    setListaResultado,
    index,
  } = props;

  function zero(status, index) {
    if (status === "errou") {
      setCorFinal("#ff3030");
      setStatusImg(erro);
      setRespondidos(respondidos + 1);
      const novaLista = [...listaResultado];
      novaLista[index] = "erro";
      setListaResultado(novaLista);
    } else if (status === "quaseacertou") {
      setCorFinal("#ff922e");
      setStatusImg(quase);
      setRespondidos(respondidos + 1);
      const novaLista = [...listaResultado];
      novaLista[index] = "quase";
      setListaResultado(novaLista);
    } else if (status === "acertou") {
      setCorFinal("#2fbe34");
      setStatusImg(certo);
      setRespondidos(respondidos + 1);
      const novaLista = [...listaResultado];
      novaLista[index] = "certo";
      setListaResultado(novaLista);
    }
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
      <PerguntaFechada
        key={index}
        inicio={inicio}
        corFinal={corFinal}
        data-identifier="flashcard"
      >
        <p data-identifier="flashcard-index-item">Pergunta {props.index + 1}</p>
        <img
          data-identifier="flashcard-show-btn flashcard-status"
          src={statusImg}
          alt={statusImg}
          onClick={botaoPlay}
        />
      </PerguntaFechada>
      <Questao questao={questao}>
        <p data-identifier="flashcard-question">{props.pergunta}</p>
        <img
          data-identifier="flashcard-turn-btn"
          src={virar}
          alt={virar}
          onClick={botaoVirar}
        />
      </Questao>
      <Solucao solucao={solucao}>
        <p data-identifier="flashcard-answer">{props.resposta}</p>
        <ContainerBotoes>
          <Button
            data-identifier="forgot-btn"
            onClick={() => zero("errou", props.index)}
            color={"#ff3030"}
          >
            Não lembrei
          </Button>
          <Button
            data-identifier="almost-forgot-btn"
            onClick={() => zero("quaseacertou", props.index)}
            color={"#ff922e"}
          >
            Quase não lembrei
          </Button>
          <Button
            data-identifier="zap-btn"
            onClick={() => zero("acertou", props.index)}
            color={"#2fbe34"}
          >
            Zap
          </Button>
        </ContainerBotoes>
      </Solucao>
    </>
  );
}
const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: ${(props) => (props.inicio === "escondido" ? "none" : "flex")};
  align-items: center;
  justify-content: space-between;
  pointer-events: ${(props) =>
    props.inicio === "bloqueio" ? "none" : "initial"};
  p {
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.corFinal};
    text-decoration: ${(props) =>
      props.inicio === "bloqueio" ? "line-through" : "initial"};
    text-decoration-color: ${(props) =>
      props.inicio === "bloqueio" ? "line-through" : "initial"};
  }
  img {
    cursor: pointer;
  }
`;

const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

const Questao = styled(PerguntaAberta)`
  display: ${(props) => (props.questao === "escondido" ? "none" : "flex")};
`;

const Solucao = styled(PerguntaAberta)`
  display: ${(props) => (props.solucao === "escondido" ? "none" : "flex")};
`;

const ContainerBotoes = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-between;
  margin: 20px;
`;

const Button = styled.button`
  width: 90px;
  font-family: 'Recursive', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  border: 1px solid ${(props) => props.color};
  padding: 5px;
  margin: 0px 5px;
  cursor: pointer;
`;
