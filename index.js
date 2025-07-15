const readline = require("readline");

const items = ["apple", "banana", "pineapple"];
const prices = {
  apple: 1.99,
  banana: 0.99,
  pineapple: 2.99
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to Flatiron Supermarket!");

rl.question("What would you like to do?\n\n- Enter '1' to purchase an item\n- Enter '2' to add an item\n> ", (option) => {
  if (option === "1") {
    rl.question("Please select an item to purchase (apple, banana, pineapple):\n> ", (itemToPurchase) => {
      if (!items.includes(itemToPurchase)) {
        console.log("❌ Error: Invalid item! Unable to complete purchase!");
        rl.close();
        return;
      }

      const price = prices[itemToPurchase];

      rl.question(`${itemToPurchase}s are $${price} each. How many would you like to purchase?\n> `, (quantityInput) => {
        const quantity = parseInt(quantityInput);

        if (isNaN(quantity)) {
          console.log("❌ Error: Invalid quantity! Unable to complete purchase!");
        } else {
          const totalPrice = price * quantity;
          console.log(`🛒 Thanks for shopping! You purchased ${quantity} ${itemToPurchase}(s). Total: $${totalPrice.toFixed(2)}`);
        }

        rl.close();
      });
    });

  } else if (option === "2") {
    rl.question("Please enter the name of the new item:\n> ", (newItem) => {
      items.push(newItem);
      console.log(`✅ ${newItem} successfully added to the supermarket!`);
      console.log("🧺 Updated item list:", items);
      rl.close();
    });

  } else {
    console.log("❌ Error: Invalid option!");
    rl.close();
  }
});