import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { Category, Home, Quiz, QuizQuestions } from "./pages";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category_id" element={<Category />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route path="/quiz/questions" element={<QuizQuestions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
