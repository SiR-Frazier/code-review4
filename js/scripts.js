//specs:
//the user will select a size for the pizza using one of the buttons
// write constructor for pizza order;
// write function that allows user input to be registered on the form;
// write protoype method for the price of each pizza size and for the topping(s);

//back-end logic:
function PizzaOrder(size, topping) {
  this.size = size;
  this.topping = topping;
}

function userInput() {
  var inputtedSize = $("#size").val();
  var inputtedTopping = $("#topping").val();
  var newOrder = new PizzaOrder(inputtedSize, inputtedTopping);

  return newOrder
}

PizzaOrder.prototype.price = function{
  var cost = 0;
  if (this.size === "Xtra Large") {
    cost = 12;
  } else if (this.size === "Large") {
    cost = 10;
  } else if (this.size === "Medium") {
    cost = 8;
  } else {
    cost = 6;
  }

  if (this.topping === "Meat Tornado") {
    cost = 5;
  } else if (this.topping === "Pepperoni" || this.topping === "Sausage") {
    cost = 3;
  } else {
    cost = 2;
  }
}

//front-end logic:
$(document).ready(function() {

});
