import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const TodoModel = mongoose.model("Todo", TodoSchema);

export default TodoModel;
