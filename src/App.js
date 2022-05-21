import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header, RequireAuth } from "./components";
import {
  Category,
  Home,
  Quiz,
  QuizQuestions,
  Login,
  Signup,
  Profile,
} from "./pages";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category_id" element={<Category />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route
          path="/quiz/questions"
          element={
            <RequireAuth from="/quiz/questions">
              <QuizQuestions />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/profile"
          element={
            <RequireAuth from="/profile">
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
