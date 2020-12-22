import Todo from "./model/Todo";

export const resolvers = {
  Query: {
    todos: () => Todo.find(),
  },

  Mutation: {
    addTodo: async (_, { title }) => {
      const newTodo = new Todo({ title });
      await newTodo.save();
      return Todo.find();
    },
    deleteTodo: async (_, { id }) => {
      await Todo.deleteOne({ _id: id });
      return Todo.find();
    },
    changeTodoStatus: async (_, { id }) => {
      const getTodo = await Todo.findById(id);
      await Todo.updateOne({ _id: id }, { $set: { isDone: !getTodo.isDone } });
      return Todo.find();
    },
  },
};
