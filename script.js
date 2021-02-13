const burger = document.querySelector(".burger");

let a = document.querySelector(".nav");
let b = 0;

burger.addEventListener("click", function () {
    burger.classList.toggle("active");


    if (burger.classList.contains("active") == true) {

        document.querySelector(".nav").classList.add("show");
        document.querySelector(".nav").classList.remove("hide");

        b++;
    } else if (b == 1) {
        document.querySelector(".nav").classList.toggle("show");
        document.querySelector(".nav").classList.add("hide");

        b--;
    }
});
