const loading = document.getElementById("js-loading");
const text1 = document.getElementById("js-text1");
const text2 = document.getElementById("js-text2");
const title = document.getElementById("js-title");
const header = document.getElementById("js-header");
const headerBtn = document.getElementsByClassName("js-header__btn");
const nav = document.getElementById("js-nav");
const navItem = document.getElementsByClassName("js-nav__item");
const feature = document.getElementsByClassName("js-feature");
const submit = document.getElementById("js-submit");
const btn = document.getElementsByClassName("js-btn");



function noscroll(event) {
    event.preventDefault();
}

if (window.matchMedia("(max-width: 768px)").matches || window.matchMedia("(orientation: portrait)").matches) {
    window.addEventListener("load", () => {
        window.scrollTo({
            top: 0,
        });
        
    
        window.addEventListener("wheel", noscroll, { passive: false });
        window.addEventListener("touchmove", noscroll, { passive: false });
    
        setTimeout(() => {
            loading.classList.add("loaded-sp");
        }, 1500);
    
        setTimeout(() => {
            text1.classList.add("loaded2-sp");
        }, 2200);
    
        setTimeout(() => {
            text1.classList.add("loaded3-sp");
        }, 3200);
    
        setTimeout(() => {
            text2.classList.add("loaded2-sp");
        }, 3800);

        setTimeout(() => {
            text2.classList.add("loaded4-sp");
        }, 4800);
    
        setTimeout(() => {
            title.classList.add("loaded5-sp");
        }, 5500);
    
        setTimeout(() => {
            header.classList.add("loaded6-sp");
            window.removeEventListener("wheel", noscroll);
            window.removeEventListener("touchmove", noscroll);
        }, 7000);
    });
} else {
    window.addEventListener("load", () => {
        window.scrollTo({
            top: 0,
        });
    
        window.addEventListener("wheel", noscroll, { passive: false });
        window.addEventListener("touchmove", noscroll, { passive: false });
    
        setTimeout(() => {
            loading.classList.add("loaded");
        }, 1500);
    
        setTimeout(() => {
            text1.classList.add("loaded2");
        }, 2200);
    
        setTimeout(() => {
            text2.classList.add("loaded2");
        }, 3000);
    
        setTimeout(() => {
            text1.classList.add("loaded3");
            text2.classList.add("loaded4");
        }, 4000);
    
        setTimeout(() => {
            title.classList.add("loaded5");
        }, 4000);
    
        setTimeout(() => {
            header.classList.add("loaded6");
            window.removeEventListener("wheel", noscroll);
            window.removeEventListener("touchmove", noscroll);
        }, 5500);
    });
}


let currentScroll = 0;
let y = window.innerHeight;
let h = [];
for (let i = 0; i < feature.length; i++) {
    h[i] = feature[i].getBoundingClientRect().top;
}

window.addEventListener("scroll", () => {
    currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    for (let i = 0; i < feature.length; i++) {
        if (currentScroll >= h[i] - y + 50) {
            feature[i].classList.add("slide-feature");
        }
    }
});

submit.addEventListener("click", () => {
    alert("このサイトはポートフォリオ用に作成した架空の企業のwebサイトです。\nデータは送信されません。");
});

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        btn[i].classList.add("push-btn");
        setTimeout(() => {
            console.log("a")
            btn[i].classList.remove("push-btn");
        }, 100);
    });
}

let open = 0;
headerBtn[0].addEventListener("click", () => {
    if (!open) {
        headerBtn[1].style.transform = "rotateZ(45deg) translate(7px, 6px)";
        headerBtn[2].style.opacity = "0";
        headerBtn[3].style.transform = "rotateZ(-45deg) translate(7px, -6px)";
        nav.style.display = "block";
        open = 1;
    } else {
        headerBtn[1].style.transform = null;
        headerBtn[2].style.opacity = "1";
        headerBtn[3].style.transform = null;
        nav.style.display = "none";
        open = 0;
    }
});

for (let i = 0; i < headerBtn.length; i++) {
    navItem[i].addEventListener("click", () => {
        headerBtn[1].style.transform = null;
        headerBtn[2].style.opacity = "1";
        headerBtn[3].style.transform = null;
        if (window.matchMedia("(max-width: 768px)").matches) {
            nav.style.display = "none";
        }        
        open = 0;
    });
}





