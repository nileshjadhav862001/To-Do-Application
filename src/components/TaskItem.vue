<template>
  <div class="container">
    <li>
      <button @click="$emit('complete')" v-bind:class="className"><i class="far fa-circle"></i>{{ task.title }}</button>
      <button @click="$emit('remove')"><i class="far fa-trash-alt"></i></button>
    </li>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["task"],
  
  methods:{

  },
  computed:{
    className(){
      let classes = ['toggle']
      if(this.task.completed){
        classes.push('toggle-completed')
      }
      return classes
    }
  }
};
</script>

<style scoped>
.container {
  color: rgb(19, 10, 10);
}
</style>