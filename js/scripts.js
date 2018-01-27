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
//size cost: xl: 12, l: 10, m: 6, sm: 6.
//topping cost: 5: meat tornado, sausage/pepperoni: 3, cheese: 2

PizzaOrder.prototype.price = function(){
  var cost = 0;
  //  //xtra large
  if (this.size === "Xtra Large: Bring Da Ruckus") {
    cost = 12;
  } else if (this.size === "Large") {
    cost = 10;
  } else if (this.size === "Medium") {
    cost = 8;
  } else if (this.size === "Select Size") {
    alert("What are you tryin' to pull?");
  } else {
    cost = 6;
  }
  if (this.topping === "Meat Tornado: Everything but the kitchen sink!") {
    cost += 5;
  } else if (this.topping === "Sausage" || this.topping === "Pepperoni") {
    cost += 3;
  } else if (this.topping === "Select Topping") {
    alert ("You're not finished yet!")
  }  else {
    cost += 2;
    }
    return cost;
  }
  //original attempt:
  //  if (this.size === "Xtra Large: Bring Da Ruckus" && this.topping === "Meat Tornado: everything but the kitchen sink!"){
  //   cost = 17;
  // } else if (this.size === "Xtra Large: Bring Da Ruckus" && this.topping === "Sausage" || this.topping === "Pepperoni") {
  //   cost = 15;
  // } else {
  //   cost = 14;
  // }
  // //large
  // if (this.size === "Large" && this.topping === "Meat Tornado: everything but the kitchen sink!") {
  //   cost = 15;
  // } else if (this.size === "Large" && this.topping === "Sausage" || this.topping === "Pepperoni") {
  //   cost = 13;
  // } else {
  //   cost = 12;
  // }
  // //medium
  // if (this.size === "Medium" && this.topping === "Meat Tornado: everything but the kitchen sink!") {
  //   cost = 13;
  // } else if (this.size === "Medium" && this.topping === "Sausage" || this.topping === "Pepperoni") {
  //   cost = 11;
  // } else {
  //     cost = 10;
  // }
  // //small
  // if (this.size === "Small: Are you kiddin' me?" && this.topping === "Meat Tornado: everything but the kitchen sink!") {
  //   cost = 11;
  // } else if (this.size === "Small" && this.topping === "Sausage" || this.topping === "Pepperoni") {
  //   cost = 9;
  // } else {
  //   cost = 8;
  // }
  //   return cost;
  // }

//front-end logic:
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var userOrder = userInput();
    console.log(userOrder);
    $("#order").text("Bring Da Ruckus! Your total is: $" + userOrder.price());
  });
});
