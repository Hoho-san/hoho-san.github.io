document
    .querySelectorAll(".certificate .myCertificate .certificate_title img")
    .forEach(image => {
        image.onclick = () => {
            document.querySelector(".popup-image").style.display = "block";
            document.querySelector(".popup-image img").src =
                image.getAttribute("src");
        };
    });

document.querySelector(".popup-image span").onclick = () => {
    document.querySelector(".popup-image").style.display = "none";
};

var typed = new Typed(".typed", {
    strings: [
        "Web DEVELOPER",
        "FRONT-END DEVELOPER",
        "BACK-END DEVELOPER",
        "Pucha, Idol pala ko eh",
    ],
    typeSpeed: 70,
    backSpeed: 30,
    loop: true,
});
