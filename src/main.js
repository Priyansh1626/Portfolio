window.onscroll = () => {
    let header = document.querySelector(".header_container");
    let sections = document.querySelectorAll('section');
    let navli = document.querySelectorAll('.nav_link');
    let top = window.scrollY;
    console.log(top);
    if (top < 710) {
        header.style.opacity = 0;
    }
    else {
        header.style.opacity = 1;
    }
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (top >= (sectionTop - sectionHeight / 4)) {
            current = section.getAttribute('id');
        }
    })
    navli.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active');
        }
    })
};


