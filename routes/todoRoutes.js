import { addTodo, deleteTodo, displayText, getTodos, updateCompetionStatus } from "../controllers/todoController"

export const routes = (app) => {
  app.route('/todos')
    .get(getTodos)
    .post(addTodo)

  app.route('/todo/:id')
    .put(updateCompetionStatus)
    .delete(deleteTodo)
} 