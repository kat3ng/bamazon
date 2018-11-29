// require inquirer to prompt user
const inquirer = require('inquirer');
// require mysql npm to connect to database
const mysql = require("mysql");
// Require table npm to create a table in node
const table = require("table").table;

const connection = mysql.createConnection({
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
    console.log(`We're connected, captain...`);
    // afterConnection();
    displayProducts();
});


function displayProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(`| ${res[i].id} | ${res[i].product_name}  | ${res[i].department_name} | ${res[i].price}`);
            console.log(`+--------------------------------------------------------------------|`);
        }
    });
    console.log(`displayProducts(), awaiting orders...`);
}





const userOrder = () => {
    // create an inquirer prompt that asks...
    // what is the ID of the item you would like to purchase
    // how many units of that item would you like to purchase?
    // displayProducts();
    // checkQuantity();
    // orderTotal();
    console.log(`userOrder(), awaiting orders...`);
}

const checkQuantity = () => {
    // search quantity
    // if units in database is >= to userOrder {
    // console.log(`congrats! We can fill your order`)
    // item -- in database;
    // display orderTotal
    // } else {
    // console.log(`Insufficient Quantity!`)
    // userOrder();
    // }
    console.log(`checkQuantity(), awaiting orders...`);
}

let orderTotal = () => {
    // userOrder  + userOrder = orderTotal
    console.log(`orderTotal(), awaiting orders...`);
}

// userOrder();
// checkQuantity();
// orderTotal();