var api = API;

// visibility filters
var filters = {
  all: function (todos) {
    return todos
  },
  active: function (todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
}

// app Vue instance
var app = new Vue({

  // app initial state
  data: {
    todos: [],
    newTodo: '',
    editedTodo: null,
    visibility: 'all'
  },

  created: function() {
    // we dont want to track the counter
    this.counter = 0;
  },

  // computed properties
  // http://vuejs.org/guide/computed.html
  computed: {
    filteredTodos: function () {
      return filters[this.visibility](this.todos)
    },
    remaining: function () {
      return filters.active(this.todos).length
    }
  },

  filters: {
    pluralize: function (n) {
      return n === 1 ? 'item' : 'items'
    }
  },

  // methods that implement data logic.
  // note there's no DOM manipulation here at all.
  methods: {
    addNewTodo: function(){
      var value = this.newTodo && this.newTodo.trim()
      if (!value) {
        return
      }
      this.addTodo(value);
      this.newTodo = '';
    },

    addTodo: function (title) { api.addTodo(title); },
    removeTodo: function (todo) { api.removeTodo(todo); },
    removeCompleted: function () { api.clearCompleted(); },

    editTodo: function (todo) {
      this.beforeEditCache = todo.title
      this.editedTodo = todo
    },

    doneEdit: function (todo) {
      if (!this.editedTodo) {
        return
      }
      this.editedTodo = null
      todo.title = todo.title.trim()
      if (!todo.title) {
        this.removeTodo(todo)
      }
    },

    cancelEdit: function (todo) {
      this.editedTodo = null
      todo.title = this.beforeEditCache
    }
  },

  // a custom directive to wait for the DOM to be updated
  // before focusing on the input field.
  // http://vuejs.org/guide/custom-directive.html
  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  }
})

// handle routing
function onHashChange () {
  var visibility = window.location.hash.replace(/#\/?/, '')
  if (filters[visibility]) {
    app.visibility = visibility
  } else {
    window.location.hash = ''
    app.visibility = 'all'
  }
}

window.addEventListener('hashchange', onHashChange)
onHashChange()


// integrate with the api

app.$mount('.todoapp')
// Make watcher synchronous so that it actually renders after each change
// The benchmark only changes a single item in each iteration
app._watcher.sync = true;
api.store = app;
api.forceReconcile = function(){ app.$forceUpdate(); }
api.reset(6);

