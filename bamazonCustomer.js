var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}

// Prompt: What is the ID of the item you would like to buy?

// Prompt: How many units would you like to buy?

// Checks stock to ensure we can meet the order

// Adds item to the shoppingCart - .push()


// If NO 
// Stop code
// console.log("Insufficient quantity!") 

// If YES 
// Update SQL
// console.log(`Congrats! You're the proud order of ${shoppingCart}`)
// console.log(` Your total ${customerTotal}`)