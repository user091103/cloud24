/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
const moment = 0;
var time = moment.utc(new Date()).local().format('HH:mm');

let click_button = document.getElementById("click_button");
click_button.addEventListener("click", function () {
    alert('Took ' + (endTime - startTime) + 'ms');
});

var startTime = (new Date()).getTime(),
    endTime;

$.ajax({
    type:'GET',
    url: 'http://3.27.66.210:8080/cloud24/',
    async: false,
    success : function() {
        endTime = (new Date()).getTime();
    }
});

