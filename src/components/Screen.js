import Logo from "./Logo";
import Perguntas from "./Perguntas";
import Footer from "./Footer";
import deck1 from "../deck1";
import { useState } from "react";
import styled from "styled-components";

export default function Screen() {
  const [respondidos, setRespondidos] = useState(0);
  const [listaResultado, setListaResultado] = useState([]);

  return (
    <ScreenContainer>
      <Logo />
      <Perguntas
        respondidos={respondidos}
        setRespondidos={setRespondidos}
        deck={deck1}
        listaResultado={listaResultado}
        setListaResultado={setListaResultado}
      />
      <Footer respondidos={respondidos} deck={deck1} listaResultado={listaResultado} />
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`
