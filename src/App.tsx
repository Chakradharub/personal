import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Professional from "./components/pages/Professional";
import Personal from "./components/pages/Personal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;