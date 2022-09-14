window.onscroll = () => {
    let header = document.querySelector(".header_container");
    let top = window.scrollY;
    console.log(top);
    if (top > 710) {
        header.style.display = "block";
    }
    else {
        header.style.display = "none";
    }
};
