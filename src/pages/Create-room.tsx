import { Link } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

import "../styles/createroom.scss";

export function Createroom() {
  return (
    <div className="page-create">
      <aside>
        <img src={illustrationImg} alt="Ilustração representa QA" />
        <strong> Crie salas e tire suas dúvidas ao vivo </strong>
        <p> Interaja com sua audiência e responda as dúvidas ao vivo</p>
      </aside>
      <main>
        <div className="name-room">
          <img src={logoImg} alt="LetmeAsk" />
          <h1> Crie uma nova sala</h1>
          <Input placeholder="Nome da sala" />
          <Button>Criar sala</Button>
          <p>
            Tem o código de uma sala? <Link to="/">Clique Aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
