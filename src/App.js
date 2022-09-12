import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Cartpage from "./pages/Cartpage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
