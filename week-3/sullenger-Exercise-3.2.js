/*
============================================
; Title:  sullenger-exercise-3.2.js
; Author: Jason Sullenger
; Date:   07 March 2019
; Description:Logs properties of an object using the Factory pattern
;===========================================
*/

// Console logs the header created previously
var header = require('../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 3.2"));

// start program

// Postgres database class created
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

// MySql database class created
function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

// Oracle database class created
function Oracle(properties){
  this.username = properties.username || "admin";
  this.password = properties.password || "o-s3cret";
  this.server = properties.server || "localhost:5454";
  this.version = properties.version || "10g";
}

// Informix database class created
function Informix(properties){
  this.username = properties.username || "admin";
  this.password = properties.password || "in-s3cret";
  this.server = properties.server || "localhost:3030";
}

// Database factory defined
function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    }
    if (properties.databaseType === "MySQL") {
        this.databaseClass = MySql;
    }
    if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    }
    if (properties.databaseType === "Informix"){
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

// Postgres factory called
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

// MySql factory called
var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

// Oracle factory called
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "admin",
    password: "admin"
});

// Informix factory called
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "admin",
    password: "password"
});

// Logging object properties to specified parameters
console.log(" ")
console.log("Oracle {\n" + "\tusername: " + "'<" + oracle.username + ">'," + "\n\tpassword: " + "'<" + oracle.password + ">'," + "\n\tserver: " + "'<" + oracle.server + ">'," + "\n\tversion: " + "'<" + oracle.version + ">'" + "\n}");
console.log(" ")
console.log("Informix {\n" + "\tusername: " + "'<" + informix.username + ">'," + "\n\tpassword: " + "'<" + informix.password + ">'," + "\n\tserver: " + "'<" + informix.server + ">'," + "\n}");

// End program
