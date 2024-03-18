let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");

function func() {
    event.preventDefault();
}

let count = 0;
menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}
const butt = document.getElementById("submit");
butt.addEventListener('click', () => {
    count += 1;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector("input[name='gender']:checked").value;
    const image = document.getElementById("image").value;
    const website = document.getElementById("website").value;
    const skills = document.querySelector("input[name='skills']:checked").value;
    const desc = document.getElementById("desc")
    // name = ""
    // email = ""
    // gender = ""
    // image = ""
    // website = ""
    // skills = ""
    desc.innerHTML += `<div class="box" ">
    <div class="cl1" >
        <h2>Description</h2>
        <h3 class="Name" id="NAME">${name}
        </h3>
        <h3 class="Gender" id="GENDER">${gender}
        </h3>
        <h3 class="Email" id="EMAIL">${email}
        </h3>
        <h3 class="Website" id="WEBSITE"> ${website}
        </h3>
        <h3 class="Skills" id="SKILLS">${skills}
        </h3>
        

    </div>
    <div class="cl2" >
        <h2>Image </h2>
        <h3><img src="${image}" style="height: 150px; width: 150px;" alt=""></h3>
    </div>
</div>`;

})