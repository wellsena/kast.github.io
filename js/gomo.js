 document.addEventListener("DOMContentLoaded", (event) => {
    /**/
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smartphone: {
            smooth: true
        },
        tablet: {
            smooth: true
        },
        smoothMobile: 1,
        multiplier: 1.2,
    });
    
    // Wait 2 seconds then calculate the new page height
    setTimeout(() => {  
        locoScroll.update();
    }, 2000);

    locoScroll.on('scroll', ({ limit, scroll }) => {
        //const progress = scroll.y / limit.y * 100  
        //bar.style.transform = `translate3d(${progress}px, 0, 0)`
        const logo = document.querySelector('#nav-top') //[data-scroll-logo]
        if(scroll.y > 10){
            logo.classList.add("mini");
        } else {
            logo.classList.remove("mini");
        }
    })


    /*
    // Optional code for allowing anchor links
    $('.nav__link.is--first').on('click', function() {
            const slider = document.querySelector('#about');
        locoScroll.scrollTo(slider)
    });

    $('.nav__link.is--second').on('click', function() {
            const slider = document.querySelector('#sticky2');
        locoScroll.scrollTo(slider)
    });

    $('.nav__link.is--third').on('click', function() {
            const slider = document.querySelector('#photos');
        locoScroll.scrollTo(slider)
    });*/

    /*
    // Add and remove class from nav based on if locomotive is scrolled down at all
    locoScroll.on('scroll', (args) => {
        // Get all current elements : args.currentElements
        if(typeof args.currentElements['scroll-trigger'] === 'object') {
            $('.nav').removeClass('is--filled');
    } else {
            $('.nav').addClass('is--filled');
    }
    });*/

    /*
    // Optional CSS to prevent elements from temporarily disappearing when scrolling back up
    <style>
    html.has-scroll-smooth {
        overflow: hidden;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;  
    }
    </style>*/
    
    /*
    // GSAP
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = ScrollSmoother.create({
        wrapper: '#wrapper',
        content: '#site',
        smooth: 2,
        smoothTouch: 0.1
    })*/
});