const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}
// header container
ScrollReveal().reveal(".header_container h1",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header_container h2",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".header_container .btn",{
    ...scrollRevealOption,
    delay:1500,
});
ScrollReveal().reveal(".header_container img",{
    ...scrollRevealOption,
    origin: "right",
});
// Why Container
ScrollReveal().reveal(".why_container .section_header",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".why_container p",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".why_container li",{
    ...scrollRevealOption,
    delay:1500,
    interval:500,
});
ScrollReveal().reveal(".why_container img",{
    ...scrollRevealOption,
    origin:"left",
});
// hero container
ScrollReveal().reveal(".hero_card",{
    ...scrollRevealOption,
    interval: 500,
});

//classes container
ScrollReveal().reveal(".classes_image", {
    duration: 1000,
    interval: 500,
});

// membership container
ScrollReveal().reveal(".membership_card",{
    ...scrollRevealOption,
    interval: 500,
});
// stories container
ScrollReveal().reveal(".stories_card",{
    ...scrollRevealOption,
    interval: 500,
});

// posts container
ScrollReveal().reveal(".posts_card",{
    ...scrollRevealOption,
    interval: 500,
});
// photos container
ScrollReveal().reveal(".photos_card",{
    duration: 1000,
    interval: 500,
});


