import styled from "styled-components";

export default function Footer(props) {
  const { respondidos, deck, listaResultado } = props;

  return (
    <FooterConcluidos>
      <span data-identifier="flashcard-counter">
        {respondidos}/{deck.length} CONCLUÍDOS
      </span>
      <Resultados>
        {listaResultado.map((p, index) => (
          <img key={index} src={p} alt={p} />
        ))}
      </Resultados>
    </FooterConcluidos>
  );
}

const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;

const Resultados = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0px;
  justify-content: center;
  img {
    width: 15px;
    height: 15px;
    margin: 0px 2px;
    border: 1px solid #ffffff;
    border-radius: 50px;
  }
`;
