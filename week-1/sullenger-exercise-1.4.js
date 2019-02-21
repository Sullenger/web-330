/*
============================================
; Title:  sullenger-exercise-1.4.js
; Author: Jason Sullenger
; Date:   20 February 2019
; Description: Applying prototypes to constructor functions and console logging the objects
;===========================================
*/

// Console logs the header created in previous weeks
const header = require('../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 1.4"));

// Car object constructor function
function Car(model){
  this.model = model;
}

// Truck object constructor function
function Truck(model, year){
  this.model = model;
  this.year = year;
}

// Jeep object constructor function
function Jeep(model, year, color){
  this.model = model;
  this.year = year;
  this.color = color;
}

// Vehicles console logged as added to the racetrack
Car.prototype.start = function(){
  console.log("Car added to the racetrack!");
}
Truck.prototype.start = function(){
  console.log("Truck added to the racetrack!");
}
Jeep.prototype.start = function(){
  console.log("Jeep added to the racetrack!");
}

// Racetrack array declared
var racetrack = [];

// Function defined that calls the start function and pushes argument to the array
function driveIt(vehicle){
  vehicle.start();
  racetrack.push(vehicle);
}

// Vehicles created through the constructor functions
var firstVehicle = new Car("Civic");
var secondVehicle = new Truck("F-150", 2016);
var thirdVehicle = new Jeep("Cherokee", 2010, "Black");

// Necessary line spacing
console.log(" ");

// Calling the driveIt function for each of the vehicles
driveIt(firstVehicle);
driveIt(secondVehicle);
driveIt(thirdVehicle);

// console logs the titling for the expected output
console.log("\n-- The following vehicles have been added to the racetrack --");

// For loop logging the vehicle type and the model name
for(var i=0; i<racetrack.length; i++){
  console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
}

// End of program
