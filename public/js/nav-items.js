const navItems = document.querySelectorAll(".nav-item")
console.log(navItems);

navItems[0].addEventListener("click", function(){
    navItems[1].classList.remove("active");
    navItems[2].classList.remove("active");
    navItems[0].classList.add("active");
    console.log("changed class");
})
navItems[1].addEventListener("click", function(){
    navItems[0].classList.remove("active");
    navItems[2].classList.remove("active");
    navItems[1].classList.add("active");
    console.log("changed class");
})
navItems[2].addEventListener("click", function(){
    navItems[0].classList.remove("active");
    navItems[1].classList.remove("active");
    navItems[2].classList.add("active");
    console.log("changed class");
})