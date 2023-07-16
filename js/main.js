 // ************************ NAVBAR SECTION ******************************** 

let moblieIcon = document.querySelector('.mob-menu-icons');
let nav_header = document.querySelector('.head');
let toggleNavbar = () => {
    nav_header.classList.toggle("active")
}

moblieIcon.addEventListener('click', () => toggleNavbar());


 // ************************ BAR PAGE SECTION ******************************** 

function ShowMySkills1() {
    let showskills1 = document.getElementById("showskills1");
    let skillarrow1 = document.getElementById('skillarrow1');

    if (showskills1.style.display === "none") {
        showskills1.style.display = "block";
        skillarrow1.style.transform = 'rotate(-180deg)';
    } else {
        showskills1.style.display = "none";
        skillarrow1.style.transform = 'rotate(-360deg)';

    }
}

function ShowMySkills2() {
    let showskills2 = document.getElementById("showskills2");
    let skillarrow2 = document.getElementById('skillarrow2');

    if (showskills2.style.display === "none") {
        showskills2.style.display = "block";
        skillarrow2.style.transform = 'rotate(-180deg)';

    } else {
        showskills2.style.display = "none";
        skillarrow2.style.transform = 'rotate(-360deg)';

    }
}

function ShowMySkills3() {
    let showskills3 = document.getElementById("showskills3");
    let skillarrow3 = document.getElementById('skillarrow3');

    if (showskills3.style.display === "none") {
        showskills3.style.display = "block";
        skillarrow3.style.transform = 'rotate(-180deg)';

    } else {
        showskills3.style.display = "none";
        skillarrow3.style.transform = 'rotate(-360deg)';

    }
}


// /* ************************ DEMO PAGE SECTION ******************************** */  


  // dark mode

function darkMode(x){
    let element = document.body;

    element.classList.toggle("dark");
}

// {/* <i class="fa-solid fa-sun fa-beat" style="color: #edf859;"></i> */}