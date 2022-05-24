import { Server, Model, RestSerializer } from "miragejs";
// import { posts } from "./backend/db/posts";
import { users } from "./backend/db/users";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import { getQuizById } from "./backend/controllers/QuizController";
import { quizzes } from "./backend/db/quizzes";
import { categories } from "./backend/db/categories";
import {
  getAllCategories,
  getCategoryById,
} from "./backend/controllers/CategoryController";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    // TODO: Use Relationships to have named relational Data
    models: {
      user: Model,
      quizzes: Model,
      categories: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      server.logging = false;
      users.forEach((item) =>
        server.create("user", {
          ...item,
          followers: [],
          following: [],
          bookmarks: [],
        })
      );
      quizzes.forEach((item) => server.create("quiz", { ...item }));
      categories.forEach((item) => server.create("category", { ...item }));
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      this.get("/quiz/:quizId", getQuizById.bind(this));

      this.get("/categories", getAllCategories.bind(this));
      this.get("/category/:categoryId", getCategoryById.bind(this));
    },
  });
}
