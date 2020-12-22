<template>
  <TodoHeader title="Eddie's Todo" />
  <MyTodosContainer />
</template>

<script>
import { TodoHeader } from "./components/atoms";
import { MyTodosContainer } from "./components/molecules";

export default {
  name: "App",
  components: {
    TodoHeader,
    MyTodosContainer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
