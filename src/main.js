window.onscroll = () => {
    let header = document.querySelector(".header_container");
    // let upBox = document.querySelector(".upBox");
    let top = window.scrollY;
    console.log(top);
    if (top > 710) {
        header.style.display = "block";
        header.style.opacity = 1;
    }
    else {
        header.style.display = "none";
        header.style.opacity = 0;
    }
};

