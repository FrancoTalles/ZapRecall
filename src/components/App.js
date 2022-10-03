import Screen from "./Screen";
import GlobalStyle from "../GlobalStyles";
import { useState } from "react";
import BoasVindas from "./BoasVindas";
 

export default function App() {
  const [exibir, setExibir] = useState("aparece");
  return (
    <>
      <GlobalStyle />
      <BoasVindas exibir={exibir} setExibir={setExibir} />
      <Screen exibir={exibir}/>
    </>
  );
}
