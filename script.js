
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    var windowheight = window.innerHeight;
    var revealpoint = windowheight - 150; 

    for (var i = 0; i < reveals.length; i++) {
        var revealTop = reveals[i].getBoundingClientRect().top;

        if (revealTop < revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

function clickMenu() {

    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

