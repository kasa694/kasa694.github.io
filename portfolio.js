const curtain = document.getElementsByClassName("js-curtain");
const curtainWrapper = document.getElementById("js-curtain-wrapper");
const item = document.getElementsByClassName("js-item");
const line = document.getElementById("js-line");
const back = document.getElementById("js-back");
const eisyaki = document.getElementById("js-eisyaki");
const film = document.getElementsByClassName("js-film");
const nav = document.getElementsByClassName("js-nav");
const light = document.getElementById("js-light");

let w = window.innerWidth;
let h = window.innerHeight;

let currentScroll = 0
let lastScroll = 0;
let count = 0;
let scale = 0;



window.addEventListener("load", () => {
    count = 0;
    lastScroll = 0;
    window.scrollTo({
        top: count * h,
        behavior: "smooth"
    });


    w = window.innerWidth;
    h = window.innerHeight;
    let a = h / w;
    line.style.transform = `scale(1, ${a})`

    let x = w / 5;
    let y = h / 5;
    back.style.borderWidth = `${y}px ${x}px`

    if (h <= w) {
        scale = h;
    } else {
        scale = w;
    }
    eisyaki.style.transform = `scale(${scale / 1000 * 1.5}, ${scale / 1000 * 1})`;

    setTimeout(() => {
        film[0].style.transition ="transform 0.5s linear";
        film[1].style.transition ="transform 0.5s linear";

        curtain[0].style.transform = "translateX(-52%)";
        curtain[1].style.transform = "translateX(52%)";
        
    }, 500);

    setTimeout(() => {
        item[0].style.backgroundColor = "rgb(240, 240, 240)";
        light.setAttribute("fill", "url(#grad)");
        curtainWrapper.style.display = "none";
    }, 3000);
});

window.addEventListener("resize", () => {
    w = window.innerWidth;
    h = window.innerHeight;
    let a = h / w;
    line.style.transform = `scale(1, ${a})`

    let x = w / 5;
    let y = h / 5;
    back.style.borderWidth = `${y}px ${x}px`
    if (h <= w) {
        scale = h;
    } else {
        scale = w;
    }
    eisyaki.style.transform = `scale(${scale / 1000 * 1.5}, ${scale / 1000 * 1})`;

    window.scrollTo({
        top: count * h,
        behavior: "smooth"
    });
});


let scrolling;
let isScrolling = false;
window.addEventListener("scroll", (event) => {
    if (isScrolling) {
        return;
    }

    for (let i = 0; i < nav.length; i++) {
        nav[i].style.backgroundColor = "white";
    }
    nav[count].style.backgroundColor = "rgb(160, 160, 160)";

    window.clearTimeout(scrolling);

    scrolling = setTimeout(() => {
        currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScroll) {
            if (count == nav.length - 1) {
                count = nav.length - 1;
            } else {
                count++;
            }


            window.scrollTo({
                top: count * h,
                behavior: "smooth"
            });
            for (let i = 0; i < film.length; i++) {
                film[i].style.transform = `rotateY(80deg) rotate(${count * 30}deg)`;
            }
            lastScroll = count * h;
        } else if (currentScroll < lastScroll) {
            if (count == 0) {
                count = 0;
            } else {
                count--;
            }

            window.scrollTo({
                top: count * h,
                behavior: "smooth"
            });
            for (let i = 0; i < film.length; i++) {
                film[i].style.transform = `rotateY(80deg) rotate(${count * 30}deg)`;
            }
            lastScroll = count * h;
        }
    }, 60);
}, {passive: true});




for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener("click", (event) => {
        window.addEventListener("wheel", (event) => {
          
        }, {passive: true});

        isScrolling = true;

        count = i;

        window.scrollTo({
            top: count * h,
            behavior: "smooth"
        });

        for (let i = 0; i < film.length; i++) {
            film[i].style.transform = `rotateY(80deg) rotate(${count * 30}deg)`;
        }

        for (let i = 0; i < nav.length; i++) {
            nav[i].style.backgroundColor = "white";
        }
        nav[i].style.backgroundColor = "rgb(160, 160, 160)";

        lastScroll = count * h;

        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    });
}

