

let click_button = document.getElementById("click_button");
let server_time = document.getElementById("server_time");


click_button.addEventListener("click", function () {
    /*
    fetch('/cloud24/server_time')
            .then(response => response.text()) 
            .then(data => {
                console.log(data); 
                server_time.textContent = data; 
            })
            .catch(error => console.error('Error:', error));
     */
     getTime();

});


async function getTime() {
  const url = "/cloud24/server_time";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const time = await response.json();
    console.log(time);
  } catch (error) {
    console.error(error.message);
  }
}