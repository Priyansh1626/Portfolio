window.onscroll = () => {
    let header = document.querySelector(".header_container");
    let home = document.getElementById("actHome");
    let about = document.getElementById("actAbout");
    let projects = document.getElementById("actProjects");
    let contact = document.getElementById("actContact");
    // let upBox = document.querySelector(".upBox");
    let top = window.scrollY;
    console.log(top);
    if (top < 710) {
        header.style.opacity = 1;
    }
    else {
        header.style.opacity = 1;
    }
    if (top >= 0 && top < 710) {
        home.classList.add("activeNav");
        // console.log(home);
    }
    else if (top > 710 && top < 1855) {
        home.classList.remove("activeNav");
        about.classList.add("activeNav");
        console.log(about);
        console.log(home);
    }
    else if (top > 1855 && top < 2600) {
        about.classList.remove("activeNav");
        projects.classList.add("activeNav");
        console.log(projects);
        console.log(about);
    }
    else if (top > 2600) {
        projects.classList.remove("activeNav");
        contact.classList.add("avtiveNav");
        console.log(contact);
        console.log(projects);
    }
};




