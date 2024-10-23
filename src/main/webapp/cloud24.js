

let click_button = document.getElementById("click_button");
let server_time = document.getElementById("server_time");
let local_time = document.getElementById("local_time");


click_button.addEventListener("click", function () {
    fetch('/cloud24/server_time')
            .then(response => response.text())
            .then(data => {
                console.log(data);
                server_time.textContent = data;

                // Tách chuỗi để lấy phần thời gian từ server
                let serverTimeStr = data.replace("Server date and time: ", "").trim(); // "2024-10-23 14:30:15 UTC"

                // Tạo đối tượng Date từ thời gian server
                let serverTime = new Date(serverTimeStr);

                // Tính toán sự chênh lệch múi giờ giữa UTC và múi giờ local
                let utcOffset = serverTime.getTimezoneOffset() * 60000; // Tính múi giờ UTC offset tính bằng milliseconds
                let localTimeInMillis = serverTime.getTime() - utcOffset; // Tính thời gian local bằng cách trừ offset

                // Tạo đối tượng Date từ thời gian local
                let localTime = new Date(localTimeInMillis);

                // Hiển thị thời gian local
                console.log("Local time: " + localTime);
                //local_time.textContent = "Local time: " + localTime.toLocaleString(); // Hiển thị thời gian local
                console.log("Local time: " + localTime.toLocaleString());

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