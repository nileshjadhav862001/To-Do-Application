<template>
  <div class="container">
    <div class="task">
      <!-- title -->
      <div class="title">
        <h1>To Do List</h1>
      </div>

      <!-- form -->
      <div class="form">
        <input type="text" placeholder="New Task" v-model="newTask" @keypress.enter="addTask" />
        <button @click="addTask"><i class="fas fa-plus"></i></button>
      </div>

      <!-- task lists -->
      <div class="taskItems">
        <ul>
          <TaskItem @complete="completedTask(task)" @remove="removeTask(index)" v-bind:task="task"
            v-for="(task, index) in tasks" :key="task.id" />
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button @click="clearCompleted">Clear completed</button>
        <button @click="clearAll">Clear all</button>
      </div>

      <!-- pending task -->
      <div class="pendingTasks">
        <span>Pending Tasks: {{ incompleted }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  name: "TaskComp",
  // props: ["tasks"],
  components: {
    TaskItem,
  },
  data() {
    return {
      newTask: "",
      tasks: [
        {
          id: 2,
          title: "Work on Project",
          completed: true,
        },
        {
          id: 3,
          title: "Go shopping",
          completed: true,
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

  methods: {
    addTask() {
      if (this.newTask) {
        this.tasks.push({
          title: this.newTask,
          completed: false,
        });
        this.newTask = "";
      }
    },
    inProgress(task) {
      return !this.isCompleted(task);
    },
    isCompleted(task) {
      return task.completed;
    },
    clearCompleted() {
      this.tasks = this.tasks.filter(this.inProgress);
    },
    clearAll() {
      this.tasks = [];
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    completedTask(task) {
      task.completed = !task.completed;
    },
  },
  computed: {
    incompleted() {
      return this.tasks.filter(this.inProgress).length;
    },
  },
};
</script>


<style>
.title {
  text-align: center;
  margin: 0 0 20px;
}

.task {
  background: #fff;
  border-radius: 25px;
  padding: 30px;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 480px;
  margin: 0 auto;
  padding: 0 15px;
}

.form {
  position: relative;
  margin: 0 0 30px;
}

input[type="text"] {
  width: 100%;
  height: 50px;
  font: 15px/1.4 "Poppins", sans-serif;
  padding: 15px;
  background: #ece2e2;
  color: #333;
  border: 1px solid transparent;
  border-radius: 10px;
  transition: border 0.3s linear;
}

input[type="text"]:focus {
  outline: none;
  border: 1px solid #4ec5c1;
}

.form button {
  background: none;
  border: none;
  color: #4ec5c1;
  font-size: 18px;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

.clearBtns {
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px;
}

.clearBtns button {
  width: 100%;
  background: #7a7c7c;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 0 5px;
}

.clearBtns button:hover {
  background: #333;
}

.pendingTasks {
  padding: 0 6px;
}

/* 
task items
----------
*/
.taskItems {
  padding: 0 10px;
}

.taskItems li {
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px;
}

.taskItems button {
  background: none;
  border: none;
}

.taskItems button:hover {
  color: #4ec5c1;
}

.taskItems .toggle i {
  margin: 0 10px 0 0;
  font-size: 14px;
}

.taskItems .toggle.toggle-completed {
  text-decoration: line-through;
}

/* ================================================ */

button {
  cursor: pointer;
  font: 15px/1.4 "Poppins", sans-serif;
  color: #555;
  transition: all 0.3s linear;
}

/* button:focus {
  outline: none;
} */

h1 {
  font-size: 22px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
