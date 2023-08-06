<template>
  <div class="container">
    <li v-for="(task1, index) in newTasks" :key="task1.id">
      <button @click="completedTask(task1)" :class="{ 'toggle': true, 'toggle-completed': task1.completed }"><i
          class="far fa-circle"></i>{{ task1.title }}</button>
      <button @click="remove(index)"><i class="far fa-trash-alt"></i></button>
    </li>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../store/index.js";

export default {
  name: "TaskItem",
  methods: {
    ...mapActions(useCounterStore, ['remove', 'completedTask']),
  },
  computed: {
    ...mapState(useCounterStore, ['newTasks', 'className']),
  }
};
</script>

<style scoped>
.container {
  color: rgb(19, 10, 10);
}

.toggle-completed {
  text-decoration: line-through;
}
</style>