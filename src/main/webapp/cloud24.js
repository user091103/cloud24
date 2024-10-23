

let click_button = document.getElementById("click_button");
let server_time = document.getElementById("cloud24/server_time");


click_button.addEventListener("click", function () {
    fetch('/cloud24/server_time')
            .then(response => response.text()) 
            .then(data => {
                console.log(data); 
                server_time.textContent = data; 
            })
            .catch(error => console.error('Error:', error));

});
