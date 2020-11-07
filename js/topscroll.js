//scroll to top

const scrollTop = document.querySelector(".scroll_top");

scrollTop.addEventListener('click', function(){
    window.scrollTo({left: 0, top:0});
});

window.addEventListener('scroll', function(){
    let height = window.pageYOffset;
    if (height > 700) {
        scrollTop.classList.add("show_scroll");
    } else {
        scrollTop.classList.remove("show_scroll");
    }
});