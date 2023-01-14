// In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// Add Meat at begining
shoppingCart.unshift("Meat");
// Add Sugar at end of the list
shoppingCart.push("Sugar");
// Remove Honey
shoppingCart.splice(4, 1);
// Tea to green Tea
shoppingCart[2] = "Green Tea";

console.log(shoppingCart);
