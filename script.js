function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.aboutme-title',
        triggerHook: 0
    })
    .addIndicators()
    .addTo(controller)
    .setPin('.aboutme-title')
}

splitScroll();