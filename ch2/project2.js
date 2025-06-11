// Savana Mongkhonvilay 6/10/25
"use strict"; 

//p1 to myName
let myName = "Savana Mongkhonvilay"; 
let para1 = document.getElementById("p1");
para1.textContent = myName;

//p2 to sum
let n1 = 2; 
let n2 = 3; 
let numberSum = n1 + n2; 
document.getElementById("p2").textContent = numberSum;

//p3 to product
let numberMult = n1 * n2; 
document.getElementById("p3").textContent = numberMult;

//p4 to name and n1 
let myNameAddNum = myName + " " + n1; 
document.getElementById("p4").textContent = myNameAddNum;

//p5 to myName * n1
let myNameMultNum = myName * n1; 
document.getElementById("p5").textContent = myNameMultNum;

//p6 to bool age comparison 
let age = 21; 
let ageCompare = age < numberMult; 
document.getElementById("p6").textContent = ageCompare;
