import styled from "styled-components";
import certo from "../assets/img/icone_certo.png"
import quase from "../assets/img/icone_quase.png"
import erro from "../assets/img/icone_erro.png"

export default function Footer(props) {
  const { respondidos, deck, listaResultado } = props;

  return (
    <FooterConcluidos>
      <span data-identifier="flashcard-counter">
        {respondidos}/{deck.length} CONCLUÍDOS
      </span>
      <Resultados>
        {listaResultado.map((p, index) => {
          if (p === "erro"){
            return <img key={index} src={erro} alt={erro} />
          }else if(p === "quase"){
            return <img key={index} src={quase} alt={quase} />
          }else if(p === "certo"){
            return <img key={index} src={certo} alt={certo} />
          }
        })}
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
