import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { firebase, auth } from "./services/firebase";
import { signInWithPopup } from "firebase/auth";

import { Answerroom } from "./pages/Answer-room";
import { Createroom } from "./pages/Create-room";
import { Signin } from "./pages/Signin";

interface UserProps {
  id: string;
  name: string;
  avatar: string;
}

interface AuthContextProps {
  user: UserProps | undefined;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

function App() {
  const [user, setUser] = useState<UserProps>();

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    const result = await signInWithPopup(auth, provider);
    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Faltam informações da conta Google!");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/room/create" element={<Createroom />} />
          <Route path="/room/answer" element={<Answerroom />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
