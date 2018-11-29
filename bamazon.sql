DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR (255) NULL,
    department_name VARCHAR(255) NOT NULL,
    price DECIMAL (10,2) NULL,
    stock_quantity INT NULL 
);

    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Left Handed String Lights", "Outdoor Items", 44.99, 10);

    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Left Handed Kitchen Towel", "House Goods", 8.99, 10);

    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Left Handed Cookie Sheets", "House Goods", 18.99, 10);

    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Left Handed Toilet Brush", "Bathroom Goods", 19.99, 10);

     INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Left Handed Bathroom Mat", "Bathroom Goods", 29.99, 10);

     INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Left Handed Luxury Bed Sheets", "Bedroom Goods", 59.99, 10);
    
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Left Handed Night Stand", "Bedroom Goods", 37.99, 10);

    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Left Handed Luxury Bed Sheets", "Bedroom Goods", 59.97, 10);

    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Left Handed Alexa Dot", "Electronics", 39.99, 10);

    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Left Handed AA Batteries", "Electronics", 19.99, 10);