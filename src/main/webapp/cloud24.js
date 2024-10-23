/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
const time = new Date().toLocaleString();

let click_button = document.getElementById("click_button");
click_button.addEventListener("click", function () {
    console.log(time);
});
