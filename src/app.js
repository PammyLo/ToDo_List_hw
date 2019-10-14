import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos:[
        {name: "Buy shopping", priority: "high"},
        {name: "Clean bathroom", priority: "low"},
        {name: "Car's MOT", priority: "high" }
      ],
      newTodo: ""
    },
    methods: {
      saveNewTodo: function () {
        this.todos.push({name: this.newTodo, priority: "low" });
        this.newTodo = "";
      }
    }
  });
});
