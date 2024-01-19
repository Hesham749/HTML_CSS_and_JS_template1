var toTop = document.querySelector(".to-top");
onscroll = function () {
    if (scrollY >= 750) {
        $(".to-top").fadeIn(300);
    } else {
        $(".to-top").fadeOut(300);
    }
};
toTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
