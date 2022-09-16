window.onscroll = () => {
    let header = document.querySelector(".header_container");
    let upBox = document.querySelector(".upBox");
    let top = window.scrollY;
    console.log(top);
    if (top > 710) {
        header.style.display = "block";
        upBox.style.opacity = 1;
    }
    else {
        header.style.display = "none";
        upBox.style.opacity = 0;
    }
    if (top > 2137) {
        upBox.style.opacity = 0;
    }
    else {
        upBox.style.opacity = 1;
    }
};

