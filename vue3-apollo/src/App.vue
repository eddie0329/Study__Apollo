<template>
  <h1 v-if="loading">LOADING</h1>
  <h1 v-else-if="error">ERROR: {{ error.message }}</h1>
  <ul v-else>
    <li v-for="char in characters" :key="char.id">
      <h3>{{ char.name }}</h3>
    </li>
  </ul>
  <button @click="refetch">REFETCH DATA</button>
</template>

<script>
import { useQuery, useResult } from "@vue/apollo-composable";
import allCharacters from "./graphql/allCharacters.query.gql";

export default {
  name: "App",
  setup() {
    const { result, loading, error, refetch, onResult } = useQuery(
      allCharacters
    );
    const characters = useResult(
      result,
      null,
      (data) => data.characters.results
    );

    onResult(() => {
      console.log("DONE");
    });

    console.log(result);
    console.log(characters);
    return {
      result,
      loading,
      error,
      refetch,
      characters,
    };
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
