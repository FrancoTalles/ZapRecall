import Logo from "./Logo";
import Perguntas from "./Perguntas";
import Footer from "./Footer";

export default function Screen() {
  return (
    <div className="screen-container">
      <Logo />
      <Perguntas />
      <Footer />
    </div>
  );
}
