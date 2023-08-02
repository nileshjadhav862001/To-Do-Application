<template>
  <div id="app">
    

    <!-- <HelloWorld /> -->
    <TaskComp v-bind:tasks="tasks"/>

    <div class="task-list">
      <div v-for="number in taskStore.numbers" :key="number">
      {{ number.name }}</div>
    </div>
    <!-- <RouterComp/> -->
    
  </div>
</template>

<script>
import {useTaskStore} from './Store/Store.js'
// import HelloWorld from './components/HelloWorld.vue'
import TaskComp from './components/TaskComp.vue'
// import RouterComp from './components/RouterComp.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    TaskComp,
    // RouterComp

  },
  data() {
    return {
      tasks: [
        {
          id: 2,
          title: "Watch netflix",
          completed: true,
        },
        {
          id: 3,
          title: "Go shopping",
          completed: false,
        },
        {
          id: 4,
          title: "Learn guitar",
          completed: false,
        },
        {
          id: 5,
          title: "Send email",
          completed: false,
        },
      ],
    };
  },
  setup(){
    const taskStore = useTaskStore
    return {taskStore}
  }
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  padding: 60px 0;
}

body {
  font: 15px/1.4 "Poppins", sans-serif;
  background: #404040;
  color: #333;
}
</style>
