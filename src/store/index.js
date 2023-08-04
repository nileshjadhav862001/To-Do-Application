import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    // Data Property
    count: 0,
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
    double: state => state.count * 2,
  },
  actions: {
    // Methods Property
    increment() {
      this.count++
    },
  },
})
