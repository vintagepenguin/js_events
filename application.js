$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    $('button').on("click", addToDo)
    $('.todo_list').on("click", ".delete", removeDiv)
    $('.todo_list').on("click", ".complete", addComplete)

  }

  //Create functions to add, remove and complete todos
  function addToDo(event){
    event.preventDefault();
    var getText = $(".todo").val()
    $('.todo_list').append(buildTodo(getText));
  }

  function addComplete(event){
    event.preventDefault(); 
    $(this).parents().addClass("complete")
  }

  function removeDiv(event){
    event.preventDefault(); 
    $(this).parent().parent().parent().remove()
  }
  

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  

  bindEvents();
});
