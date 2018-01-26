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

//consider creating price based on size for the protoypes
//size cost: 12: xL, 10: l, 8: md, 6: sm
//topping cost: 5: meat Tornado, sausage/pepperoni: 3, cheese: 2

PizzaOrder.prototype.price = function{
  var cost = 0;
  if (this.size === "Xtra Large" && this.topping === "Meat Tornado") {
    cost = 17;
  } else if (this.size === "Large" && this.topping === "Sausage" || this.topping === "Pepperoni") {
    cost = 15;
  } else {
    cost = 14;
  }
  if (this.size === "Large" && this.topping === "Meat Tornado") {
    cost = 15;
  } else if (this.size === "Large" && this.topping === "Sausage" || this.topping === "Pepperoni") {
    cost = 13;
  } else {
    cost = 12;
  }
  if (this.size === "Medium" && this.topping === "Meat Tornado") {
    cost = 13;
  } else if (this.size === "Medium" && this.topping === "Sausage" || this.topping === "Pepperoni") {
    cost = 11;
  } else {
      cost = 10;
  }
  if (this.size === "Small" && this.topping === "Meat Tornado") {
    cost = 11;
  } else if (this.size === "Small" && this.topping === "Sausage" || this.topping === "Pepperoni") {
    cost = 9;
  } else {
    cost = 8;
  }
    return cost;
}

//front-end logic:
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var order = userInput();  
  }
)
});
