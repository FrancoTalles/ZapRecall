import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function BoasVindas(props) {
  const {exibir, setExibir} = props

  function troca (){
    setExibir("desaparece");
  }

  return (
    <BemVindo exibir={exibir}>
        <img src={logo} alt={logo} />
        <h1>ZapRecall</h1>
        <button onClick={troca}>Iniciar Recall!</button>
    </BemVindo>
  )
}

const BemVindo = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: ${(props) => (props.exibir === "aparece" ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  img{
    margin-top:230px
  }
  h1{
    font-family: "Righteous";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
    margin-top: 13px;
    margin-bottom: 30px
  }
  button{
    width: 246px;
    height: 53px;
    border-radius: 5px;
    color: #d70900;
    background-color: #ffffff;
    border: 1px solid #d70900;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400px;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.15);
    margin-left: 20px;
    cursor: pointer;
  }
`;
