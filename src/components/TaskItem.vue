<template>
  <div class="container">
    <li>
      <button @click="complete" :class="{ 'toggle': true, 'toggle-completed': task.completed }"><i class="far fa-circle"></i>{{ task.title }}</button>
      <button @click="remove"><i class="far fa-trash-alt"></i></button>
    </li>
    {{ newTasks }}
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../store/index.js";

export default {
  name: "TaskItem",
  props: ["task"],
  
  methods:{
    ...mapActions(useCounterStore,['increment','decrease0']),
    complete(){
      this.$emit('complete')
    },
    remove(){
      this.$emit('remove')
    }
  },
  computed:{
    ...mapState(useCounterStore,['newTasks']),
    // className(){
    //   let classes = ['toggle']
    //   if(this.task.completed){
    //     classes.push('toggle-completed')
    //   }
    //   return classes
    // }
  }
};
</script>

<style scoped>
.container {
  color: rgb(19, 10, 10);
}
</style>