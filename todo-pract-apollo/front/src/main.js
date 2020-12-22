import { createApp, h, provide } from "vue";
import App from "./App.vue";
import defaultClient from "./graphql/defaultClient";
import { DefaultApolloClient } from "@vue/apollo-composable";
import store from "./store";

createApp({
  setup() {
    provide(DefaultApolloClient, defaultClient);
  },
  render() {
    return h(App);
  },
})
  .use(store)
  .mount("#app");
