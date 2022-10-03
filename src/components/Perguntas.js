import Pergunta from "./Pergunta";

export default function Perguntas(props) {
  const {
    respondidos,
    setRespondidos,
    deck,
    listaResultado,
    setListaResultado,
  } = props;
  return deck.map((p, index) => (
    <Pergunta
      key={index}
      index={index}
      pergunta={p.pergunta}
      resposta={p.resposta}
      isOpen={p.isOpen}
      respondidos={respondidos}
      setRespondidos={setRespondidos}
      listaResultado={listaResultado}
      setListaResultado={setListaResultado}
    />
  ));
}
