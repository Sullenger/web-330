/*
============================================
; Title:  sullenger-exercise-1.3.js
; Author: Jason Sullenger
; Date:   18 February 2019
; Description: creates cell phone object and console logs the details
;===========================================
*/

// Console logs the header created in previous weeks
const header = require('../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 1.3"));

// Constructor function creates cellPhone object
function cellPhone(manufacturer, model, color, price){
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;
    this.getPrice = function(){
        return this.price;
    };
    this.getModel = function(){
        return this.model;
    };
    this.getDetails = function(){
        return "Manufacturer:" + this.manufacturer + " Model:" + this.model + " Color:" + this.color + " Price:$" + this.price;
    };
}

// Creates firstPhone object
var firstPhone = new cellPhone("Google", "Pixel", "White", 500);

// Console logs the firstPhone object
console.log("\n" + firstPhone.getDetails());