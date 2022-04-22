function updateList() {
    const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
    });

    document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
    document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})

//open and close the mobile menuu
function switchMenu(type) {
    let menu = document.querySelectorAll('.mobile-menu')[0];


    const extendClipPath = [
        { clipPath: 'circle(25px at calc(100% - 45px) 45px)' },
        { clipPath: 'circle(75%)' }
    ];
    const resizeClipPath = [
        { clipPath: 'circle(75%)' },
        { clipPath: 'circle(25px at calc(100% - 45px) 45px)' }
    ];

    const newspaperTiming = {
        duration: 300,
        iterations: 1,
    }
    if (type == 'open') {
        menu.classList.remove('hidden');
        menu.classList.add('visible');
        menu.animate(extendClipPath, newspaperTiming);
        return;
    }
    menu.classList.remove('visible');
    menu.animate(resizeClipPath, newspaperTiming);
    setTimeout(() => {
        menu.classList.add('hidden');
    }, 250);

}
//hide mobile menu when choose a link from it
document.querySelectorAll('.mobile-menu li a').forEach(link => {
    link.addEventListener('click', () => switchMenu('close'))
})