import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

import "../styles/answer.scss";

export function Answerroom() {
  return (
    <>
      <header>
        <img src={logoImg} alt="LetmeAsk" />
        <div>
          <Input />
          <Button>Encerrar sala</Button>
        </div>
      </header>
      <main>
        <h1>SALA</h1>
      </main>
    </>
  );
}
