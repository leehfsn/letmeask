import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Answerroom } from "./pages/Answer-room";
import { Createroom } from "./pages/Create-room";
import { Signin } from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/room/create" element={<Createroom />} />
        <Route path="/room/answer" element={<Answerroom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
