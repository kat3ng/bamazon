# The Leftorium: A Storefront CLI
---
- **For:** Northwestern Coding Bootcamp
- **Developer:** Kat Eng
- **Deployment Date** 11/29/2018
- **Built With** Node.js, Javascript, mySQL


### Description & Requirements
---
The Leftorium is an Amazon like CLI platform that allows users to view items, choose from the mySQL database inventory and calculate the total for "purchases".



**Before you get started, make sure you have these node packages installed:**

1. **Inquirer:** - A collection of common interactive command line user interfaces that can prompt and then take user input to capture, confirm, or validate.

     *Command Line: 'npm install inquirer'*

2. **Table:** - A command line module, that allows you to produces a string that represents array data in a text table in the command line.

    *Command Line: 'npm install table'*

3. **mysql:** - This is a node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.

    *npm i mysql'*


Read more about these methods [here](https://www.npmjs.com/)



### Functionality
--- 
1. displayProducts()

    Queries the database for all items, departments and prices and displays the to the console using the table module.

    ![image of displayThis](/images/displayProd.png)
    
2. userOrder()

   Uses inquirer to prompt the user for an item ID and a quantity and then validates them.

    ![image of userOrder](/images/inquirer.png)


3. checkQuantity()
 
 Checks the quantity of the users chosen item and determines if the order can be filled. If it can it executes the updateInventory(), if it cannot it prompts the user to try again. 
    ![image of checkQuantity](/images/checkQ.png)

  
4. updateInventory() 

If the user order can be filled, this function updates the inventory.

    ![image of do-this](/images/do-this.png)

5. calculateTotal() 

This function calculates the users total for their order and displays it to the console.

    ![image of calculateTotal()] (/images/total.png)


### Notes
---
This is my first back end project and I am super happy with it. If I were to go back I would probably try to implement node geocoder to translate the coordinates into an address. It might be something that I come back to after the course is finished.