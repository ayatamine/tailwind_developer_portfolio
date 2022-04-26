//Hide Loading Box (Preloader)
function handlePreloader() {
    let preloader = document.querySelector('#preloader');
    window.addEventListener('load', (event) => {
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 5000);
    });
}
// handlePreloader();

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
});
//animation on scroll
gsap.registerPlugin(ScrollTrigger)
gsap.to([".featured-img", ".caption"], {
    scrollTrigger: {
        trigger: ".about-me-section",
        start: "top top",
    },
    delay: 0,
    duration: 1.5,
    opacity: 1,
    right: '0%',
    ease: 'Power3.in'
        // ease: 'slow.easeInOut'
});
gsap.to([".resume-box .timeline"], {
    scrollTrigger: {
        trigger: ".resume-box",
        start: "top center",
    },
    delay: 0,
    duration: 1,
    opacity: 1,
    y: '0',
    ease: 'Power3.in'
        // ease: 'slow.easeInOut'
});
document.querySelectorAll('.skills-box .percentage').forEach(d => {
    gsap.to(d, {
        scrollTrigger: {
            trigger: ".skills-box",
            start: "top center",
        },
        delay: 0,
        duration: 1,
        width: d.getAttribute('data-w'),
        ease: 'Power3.in'
            // ease: 'slow.easeInOut'
    });
});
//animate works items
gsap.to([".work-item", ".services-section .grid div:nth-child(2)", ".services-section .grid div:nth-child(5)"], {
    scrollTrigger: {
        trigger: ".works-section",
        start: "top center",
    },
    delay: 0,
    duration: 2,
    opacity: 1,
    y: '0',
    ease: 'Power3.in'
        // ease: 'slow.easeInOut'
});
//animate from right to left the 3 rd and the 6th service div
gsap.to([".services-section .grid div"], {
    scrollTrigger: {
        trigger: ".services-section",
        start: "top center",
    },
    delay: 0,
    duration: 1,
    opacity: 1,
    x: '0',
    ease: 'Power2.in'
        // ease: 'slow.easeInOut'
});
//animate the 2nd and 5th service div
gsap.to([".services-section .grid div:nth-child(2)", ".services-section .grid div:nth-child(5)"], {
    scrollTrigger: {
        trigger: ".services-section",
        start: "top center",
    },
    delay: 0,
    duration: 1,
    opacity: 1,
    y: '0',
    ease: 'Power3.in'
        // ease: 'slow.easeInOut'
});
//animate from left to right the 1st and 4th service div
gsap.to([".services-section .grid div:nth-child(1)", ".services-section .grid div:nth-child(4)"], {
    scrollTrigger: {
        trigger: ".services-section",
        start: "top center",
    },
    delay: 0,
    duration: 1,
    opacity: 1,
    x: '0',
    ease: 'Power1.in'
        // ease: 'slow.easeInOut'
});
//animate the blog section
gsap.to([".blog-section div div"], {
    scrollTrigger: {
        trigger: ".blog-section",
        start: "top center",
    },
    delay: 0,
    duration: 1,
    opacity: 1,
    scale: '1',
    ease: 'Power1.in'
        // ease: 'slow.easeInOut'
});