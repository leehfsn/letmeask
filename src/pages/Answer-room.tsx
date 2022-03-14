import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

import "../styles/answer.scss";

export function Answerroom() {
  return (
    <>
      <header>
        <img src={logoImg} alt="LetmeAsk" />
        <div className="header">
          <Input />
          <Button> Encerrar sala </Button>
        </div>
      </header>
      <main>
        <h1> testeeeeee</h1>
      </main>
    </>
  );
}
