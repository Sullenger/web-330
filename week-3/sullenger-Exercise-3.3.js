/*
============================================
; Title:  sullenger-exercise-3.3.js
; Author: Jason Sullenger
; Date:   07 March 2019
; Description:Logs the comparison of the instance of an object using the Singleton Pattern
;===========================================
*/

// Console logs the header created previously
var header = require('../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 3.3"));

// start program

// DatabaseSingleton function defined to get an instance of an object if one does not exist
var DatabaseSingleton = (function() {
  var instance;
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }
  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
 })();

//  DatabaseSingleton called to get instances for Oracle and Postgres
function databaseSingletonTest(){
  var oracle = DatabaseSingleton.getInstance();
  var postgres = DatabaseSingleton.getInstance();
  console.log("\nSame database instance? %s", (oracle === postgres));
}

// Calling the databaseSingletonTest function
databaseSingletonTest();

// end program
