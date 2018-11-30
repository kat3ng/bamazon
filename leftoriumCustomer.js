// require inquirer to prompt user
const inquirer = require('inquirer');
// require mysql npm to connect to database
const mysql = require("mysql");
// Require table npm to create a table in node
const table = require("table").table;

const connection = mysql.createConnection({
    host: "localhost",

    port: 8889,

    user: "root",

    password: "root",
    database: "leftorium_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log(`\nWELCOME TO THE LEFTORIUM! WE'RE HERE TO SERVE YOUR MOST VITAL LEFT HANDED NEEDS!\n`);
    displayProducts();
});


function displayProducts() {
    const query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        const data = res.map(res => [`ID: ${res.id}`, res.product_name, `$ ${res.price}`]);
        console.log(`Here are the available items...\n\n${table(data)}`);
        const length = res.length;
        // console.log(length);
        userOrder(length);
    });
    // connection.end();
}


function userOrder(length) {
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "Enter the product id of the item you would like to order",
        // Check to see if the user input is a number
        validate: function (value) {
            if (isNaN(value) === false) {
                return true;
                console.log("Please enter a vaid ID number.")
            }
            return false;
        }
    }, {
        name: "quantity",
        type: "input",
        message: "How many would you like?"

    }]).then(answers => {
        const orderQuery = `SELECT * FROM products WHERE id = ${answers.id}`;
        connection.query(orderQuery, function (err, res) {
                // console.log(res);
                const userQuantity = answers.quantity;
                checkQuantity(userQuantity);
            }
            // userOrder();
        )

        function checkQuantity(userQuantity) {
            quantityQuery = `SELECT * FROM products WHERE id = ${answers.id}`;
            connection.query(quantityQuery, function (err, res) {
                if (err) {
                    throw err
                };
                if (res[0].stock_quantity >= userQuantity) {
                    console.log(`You've chosen: ${userQuantity} units of product ${answers.id}`);
                    const remainingQuantity = res[0].stock_quantity - userQuantity;
                    calculateTotal(userQuantity);
                } else {
                    console.log(`I'm sorry, the maximum amount available is ${res[0].stock_quantity}.`);
                    userOrder();
                }

            });

        }

        // function updateInventory() {
        //     let query = `UPDATE products SET ${} `

        // }

        function calculateTotal(userQuantity) {
            let query = `SELECT * FROM products where id = ${answers.id}`;
            connection.query(query, function (err, res) {
                console.log(`Your total will be $${(res[0].price * userQuantity).toFixed(2)}`);
                if (err) {
                    throw err
                };
            })
        }
    })
};