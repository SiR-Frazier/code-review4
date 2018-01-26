//specs:
//the user will select a size for the pizza using one of the buttons
// write constructor for pizza order;
// write function that allows user input to be registered on the form;
// write protoype method for the price of each pizza size and for the topping(s);

//back-end logic:
function PizzaOrder(size, crust, topping) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}

function userInput() {
  var inputtedSize = $("#size").val();
  var inputtedCrust = $("#crust").val();
  var inputtedTopping = $("#topping").val();
  var newOrder = new PizzaOrder(inputtedSize, inputtedCrust, inputtedTopping);

  return newOrder
}


//front-end logic:
$(document).ready(function() {

});
