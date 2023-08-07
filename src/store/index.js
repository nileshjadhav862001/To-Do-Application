// import TaskCompVue from '@/components/TaskComp.vue'
import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
  state: () => ({
    // Data Property
    newTask: "",
    newTasks: [
      {
        id: 2,
        title: "Learn Pinia",
        completed: true,
      },
      {
        id: 3,
        title: "Learn Firestore",
        completed: true,
      },
      {
        id: 4,
        title: "Learn Vuetify",
        completed: false,
      },
    ],
  }),
  getters: {
    // Computed Property
    className() {
      // let classes = ['toggle']
      // if (this.newTasks.completed) {
      //   classes.push('toggle-completed')
      // }
      // return 'example'           //classes
    },
    incompleted() {
      return this.newTasks.filter(this.inProgress).length;
    },
    totalTask() {
      return this.newTasks.length
    },
  },
  actions: {
    // Methods Property

    inProgress(task) {
      return !this.isCompleted(task);
    },
    isCompleted(task) {
      return task.completed;
    },
    remove(index) {
      this.newTasks.splice(index, 1)
    },
    completedTask(task1) {
      task1.completed = !task1.completed
    },

    clearCompleted() {
      this.newTasks = this.newTasks.filter(this.inProgress);
    },
    clearAll() {
      this.newTasks = [];
    }
  },

})
