let box = document.getElementById("box");
let API = async () => {
    let response = await fetch("https://reqres.in/api/users?page=1");
    let file = await response.json();
    let info = file.data
        .map((element) => {
            return `<div class="card">
        <div class="profile-image">
            <img src="${element.avatar}" alt="">
        </div>
        <div class="card-content">
            <h3>${element.first_name} ${element.last_name}</h3>
            <h2>${element.email}</h2>
            <h2>User ID: ${element.id}</h2>
        </div>
    </div>`;
        })
        .join("");
    box.innerHTML = info;
}; let navBtn = document.getElementById("getdata");
navBtn.addEventListener("click", () => {
    box.innerHTML = `<h1 class='load'>User Data is loading...</h1>`;
    setTimeout(() => {
        API();
    }, 2000);
});
