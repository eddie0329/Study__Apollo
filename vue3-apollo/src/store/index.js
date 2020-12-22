import { createStore } from "vuex";
import defaultClient from '../graphql/defaultClient';
import allCharacters from "../graphql/allCharacters.query.gql";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const GET_CHARACTERS = "GET_CHARACTERS";

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    [INCREMENT](state) {
      state.count = state.count + 1;
    },
    [DECREMENT](state) {
      state.count = state.count - 1;
    },
  },
  actions: {
    async [GET_CHARACTERS]() {
      console.log(allCharacters);
      const response = await defaultClient.query({ query: allCharacters });
      console.log("response", response);
    },
  },
  modules: {},
});
