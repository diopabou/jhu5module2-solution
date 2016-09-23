(function(){

'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController )
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService){
  var toBuyList = this;
  toBuyList.toBuyItems = ShoppingListCheckOffService.getToBuy();
  toBuyList.boughtIt = function(itemIndex){
    ShoppingListCheckOffService.boughtIt(itemIndex);
  };
}
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
  var alreadyBoughtList = this;
  alreadyBoughtList.alreadyBougthItems = ShoppingListCheckOffService.getAlreadyBought();
}
function ShoppingListCheckOffService(){
  var toBuy = [
    {
        name: "Cookies",
        quantity: 5
    },
    {
        name: "Chips",
        quantity : 10
    },
    {
        name: "Eggs",
        quantity : 15
    },
    {
        name: "Coffee",
        quantity : 25
    },
    {
        name: "Tea",
        quantity : 15
    }
  ];

  var alreadyBought = [];
  var service = this;

  service.getToBuy = function(){
    return toBuy;
  };
  service.boughtIt = function(itemIndex){
    alreadyBought.push(toBuy[itemIndex]);
    toBuy.splice(itemIndex, 1);
  }
  service.getAlreadyBought = function(){
    return alreadyBought;
  }
}

})();
