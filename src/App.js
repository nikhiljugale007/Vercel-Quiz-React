import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div className="flex-vt">
      <Routes>
        <Route to="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
