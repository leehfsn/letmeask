import { useNavigate } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

import "../styles/signIn.scss";

export function Signin() {
  const navigate = useNavigate();

  function navToCreateRoom() {
    navigate("/room/create");
  }

  return (
    <div className="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração representa QA" />
        <strong> Crie salas e tire suas dúvidas ao vivo </strong>
        <p> Interaja com sua audiência e responda as dúvidas ao vivo</p>
      </aside>
      <main>
        <div className="login-content">
          <img src={logoImg} alt="LetmeAsk" />
          <Button onClick={navToCreateRoom} className="create-room">
            <img src={googleIconImg} alt="logo google" />
            Use o Google e crie sua sala
          </Button>
          <div>
            <p>ou entre em uma sala existente</p>
            <form>
              <Input type="text" placeholder="Digite o código da sala" />
              <Button type="submit">Entrar na sala</Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
