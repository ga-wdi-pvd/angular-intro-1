(function(){
  angular
    .module('todoApp')
    .controller('todosCtrl', todosController);

  function todosController(){
    var self = this;

    self.todos = [
      { name: 'Build an app with Rails', completed: true },
      { name: 'Project 2', completed: true },
      { name: 'Build an app with Angular', completed: false },
      { name: 'Project 3', completed: false },
      { name: 'Build an app with Express', completed: false },
      { name: 'Build an app with Mongo', completed: false },
      { name: 'Build an app with React', completed: false },
      { name: 'Project 4', completed: false },
      { name: 'Become a Rockstar', completed: true }
    ];

    self.addTodo = function() {
      console.log('Adding Todo!');
      self.todos.push({ name: self.newTodo, completed: false});
      self.newTodo = "";
    };
  };
})();
