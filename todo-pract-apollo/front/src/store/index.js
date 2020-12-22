import { createStore, createLogger } from "vuex";
import todos from "./modules/todos";

export default createStore({
  modules: {
    todos,
  },
  strict: true,
  plugins: [createLogger],
});
