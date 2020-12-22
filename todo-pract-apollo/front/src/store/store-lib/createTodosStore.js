/* eslint-disable no-empty-pattern */
import todoActionsConst from "../../constants/todos-actions";
import todoMutationsConst from "../../constants/todos-mutations";
import allTodos from "../../graphql/allTodos.query.gql";
import deleteTodo from "../../graphql/deleteTodo.mutation.gql";

const { SET_TODOS } = todoMutationsConst;

const { GET_TODOS, DELETE_TODO } = todoActionsConst;

export const getDefaultState = () => ({
  todos: [],
});

const createTodosStore = ({ defaultClient }) => {
  const state = getDefaultState();
  const getters = {};
  const mutations = {
    [SET_TODOS](state, newTodos) {
      state.todos = newTodos;
    },
  };
  const actions = {
    async [GET_TODOS]({ commit }) {
      const res = await defaultClient.query({ query: allTodos });
      commit(SET_TODOS, res.data.todos);
    },
    async [DELETE_TODO]({}, id) {
      const res = await defaultClient.query({
        query: deleteTodo,
        variables: id,
      });
      console.log(res);
    },
  };

  return {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };
};

export default createTodosStore;
