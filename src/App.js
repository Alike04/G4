import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import APA from "./pages/APA";
import Biology from "./pages/Biology";
import Chemistry from "./pages/Chemistry";
import Evaluation from "./pages/Evaluation";
import Home from "./pages/Home";
import Physics from "./pages/Physics";

function App() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chem" element={<Chemistry />} />
          <Route path="/phy" element={<Physics />} />
          <Route path="/bio" element={<Biology />} />
          <Route path="/ev" element={<Evaluation />} />
          <Route path="/apa" element={<APA />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
