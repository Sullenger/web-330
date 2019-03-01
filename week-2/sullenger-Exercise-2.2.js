/*
============================================
; Title:  sullenger-exercise-2.2.js
; Author: Jason Sullenger
; Date:   28 February 2019
; Description:Creates a prototype to be added to new objects and console logs the data
;===========================================
*/

// Console logs the header created previously
const header = require('../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 1.3"));

// getAge function defined within the person object
var person = {
  getAge: function(){
    // function only returns the age value of the person passed to it
    return this.age;
  }
};

// John object created with age and fullName functions
var john = Object.create(person, {
  "age":{
    "value": "25"
  },
  "fullName":{
    "value": "John Smith"
  }
})

// Console logging the requested data - full name and age of the object
console.log("\nThis guy's name is " + john.fullName)
console.log("His age is " + john.age)

// end
