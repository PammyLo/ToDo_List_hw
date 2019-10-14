import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos:[ "Buy shopping", "Clean bathroom", "Car's MOT" ],
      newTodo: ""
},
    methods: {
      saveNewTodo: function (newTodo) {
        this.todos.push(this.newTodo);
        this.newTodo = "";
      }
    }
  });
});
