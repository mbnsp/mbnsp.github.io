let searchBox = document.querySelector('.searchBox');
let searchBtn = document.querySelector('.btn-redirect-g');
var dark_theme = document.getElementById("dark-theme-button");
var element = document.body;


searchBtn.onclick = function() {
    let url = 'https://mbspshop.wixsite.com/net-pl/search?q='+searchBox.value;
    window.open(url);
}




document.querySelector('.searchBox').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let url = 'https://mbspshop.wixsite.com/net-pl/search?q='+searchBox.value;
        window.open(url);
    }
});


dark_theme.onclick = function() {
    dark_theme.classList.toggle("dark-theme-on");
    document.body.classList.toggle("dark-theme-work");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }

    else {
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") == "light") {

    dark_theme.classList.remove("dark-theme-on");
    document.body.classList.remove("dark-theme-work");
}

else if (localStorage.getItem("theme") == "dark") {

    dark_theme.classList.add("dark-theme-on");
    document.body.classList.add("dark-theme-work");
}

else {
    localStorage.setItem("theme", "light");
}



const splash = document.querySelector('.splash-screen');

var dark_theme = document.getElementById("dark-theme-button");

function userMenuToggle() {
    usermenu.classList.toggle("user-menu-height");
}

dark_theme.onclick = function() {
    dark_theme.classList.toggle("dark-theme-on");
    document.body.classList.toggle("dark-theme-work");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }

    else {
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") == "light") {

    dark_theme.classList.remove("dark-theme-on");
    document.body.classList.remove("dark-theme-work");
}

else if (localStorage.getItem("theme") == "dark") {

    dark_theme.classList.add("dark-theme-on");
    document.body.classList.add("dark-theme-work");
}

else {
    localStorage.setItem("theme", "light");
}




document.addEventListener('DOMContentLoaded', (e)=> {

    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000)
})