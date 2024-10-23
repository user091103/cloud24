/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
const h = new Date();
const m = new Date();
let hour = h.getHours();
let minute = m.getMinutes();
let click_button = document.getElementById("click_button");
click_button.addEventListener("click", function () {
    console.log(hour);
    console.log(minute);
});
