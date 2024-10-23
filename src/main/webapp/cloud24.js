

let click_button = document.getElementById("click_button");
let server_time = document.getElementById("server_time");
let local_time = document.getElementById("local_time");


click_button.addEventListener("click", function () {
    fetch('/cloud24/server_time')
            .then(response => response.text())
            .then(server_time => {
                alert(server_time);
                console.log(server_time);
                const local_time = new Date(server_time);
                alert(local_time);
                console.log(local_time);
            })
            .catch(error => console.error('Error:', error));
});

/*
 async function getTime() {
 const url = "/cloud24/server_time";
 try {
 const response = await fetch(url);
 if (!response.ok) {
 throw new Error(`Response status: ${response.status}`);
 }
 
 const time = await response.text();
 console.log(time);
 } catch (error) {
 console.error(error.message);
 }
 */