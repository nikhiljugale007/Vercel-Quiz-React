import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { Category, Home } from "./pages";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category_id" element={<Category />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
