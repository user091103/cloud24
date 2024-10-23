/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
let click_button = document.getElementById("click_button");
click_button.addEventListener("click", function () {
   time();
});

function time() {
var currentdate = new Date(); 
var timenow = + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();
  document.getElementById("datebtn").innerHTML = "time is ="+timenow;
}