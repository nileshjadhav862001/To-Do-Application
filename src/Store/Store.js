import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state:() => ({
        numbers: [
            {
                id:1,
                name: "one",
                comp: true
            },
            {
                id:2,
                name: "two",
                comp: false
            },
            {
                id:3,
                name: "three",
                comp: true
            },

        ]
    })
})