import { Response } from "miragejs";

export const getAllCategories = function () {
  return new Response(200, {}, { categories: this.db.categories });
};
export const getCategoryById = function (schema, request) {
  try {
    const categoryId = request.params.categoryId;
    const category = schema.categories.findBy({ _id: categoryId }).attrs;
    return new Response(200, {}, { category });
  } catch (error) {
    return new Response(
      404,
      {},
      { errors: ["The category you request does not exist. Not Found error."] }
    );
  }
};
