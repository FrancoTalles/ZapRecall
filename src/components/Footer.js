import certo from "../assets/img/icone_certo.png";
import quase from "../assets/img/icone_quase.png";
import erro from "../assets/img/icone_erro.png";
import styled from "styled-components";

export default function Footer(props) {
  const { respondidos, deck, listaResultado } = props;

  return (
    <FooterConcluidos>
      <span>
        {respondidos}/{deck.length} CONCLUÍDOS
      </span>
      <div className="resultados"></div>
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
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;
