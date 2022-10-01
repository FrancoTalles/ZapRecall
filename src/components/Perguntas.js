import deck1 from "../deck1";
import Pergunta from "./Pergunta";

export default function Perguntas() {
  return deck1.map((p, index) => (
    <Pergunta
      index={index}
      pergunta={p.pergunta}
      resposta={p.resposta}
      isOpen={p.isOpen}
    />
  ));
}
