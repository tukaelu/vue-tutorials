
// STEP1
const app = new Vue({
  el: '#app',
  data: {
    //
  },
  methods: {
    //
  }
})

// STEP2
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todo.length
    return tudos
  },
  save: function(tods) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
