import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Answerroom } from "./pages/Answer-room";
import { Createroom } from "./pages/Create-room";
import { Signin } from "./pages/Signin";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/room/create" element={<Createroom />} />
          <Route path="/room/answer" element={<Answerroom />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
