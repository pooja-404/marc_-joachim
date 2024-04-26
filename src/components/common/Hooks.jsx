'use-client';

window.addEventListener('scroll', function () {
    let backtotop = document.getElementById("backtotop")
    if (window.scrollY > 300) {
        backtotop.style.display = 'block'
    }
    else {
        backtotop.style.display = 'none'
    }
})