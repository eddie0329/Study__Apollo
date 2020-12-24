<template>
  <h1 v-if="loading">LOADING</h1>
  <h1 v-else-if="error">{{ error.message }}</h1>
  <ul v-else>
    <li v-for="todo in todos" :key="todo.id">
      <CheckMark v-model="todo.isDone" />
      <TodoTitle :todo-title="todo.title" />
      <my-button @click="onClickDelete(todo)">X</my-button>
    </li>
  </ul>
</template>

<script>
import { CheckMark, TodoTitle, MyButton } from "../atoms";
import { useQuery, useResult, useMutation } from "@vue/apollo-composable";
import allTodos from "../../graphql/allTodos.query.gql";
import deleteTodo from "../../graphql/deleteTodo.mutation.gql";

export default {
  components: {
    CheckMark,
    TodoTitle,
    MyButton,
  },
  setup() {
    const { result, loading, error } = useQuery(allTodos);
    const todos = useResult(result, [], (data) => data.todos);

    const { mutate: removeTodo } = useMutation(deleteTodo);

    const onClickDelete = (needRemoveTodo) => {
      removeTodo(
        { id: needRemoveTodo.id },
        {
          update: (cache) => {
            cache.writeQuery({ query: allTodos, data: { todos: deleteTodo } });
          },
        }
      );
    };

    return {
      todos,
      loading,
      error,
      onClickDelete,
    };
  },
};
</script>

<style>
</style>