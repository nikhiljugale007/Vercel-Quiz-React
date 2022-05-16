import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { Category, Home } from "./pages";

function App() {
  return (
    <div className="flex-vt">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
