import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { AuthContext } from "../App";

import "../styles/signIn.scss";

export function Signin() {
  const navigate = useNavigate();
  const { signInWithGoogle, user } = useContext(AuthContext);

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    navigate("room/create");
  }
  navigate("/room/answer");

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
          <Button onClick={handleCreateRoom} className="create-room">
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
