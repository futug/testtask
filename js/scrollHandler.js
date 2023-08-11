export function scrollHandler() {
    const popUp = document.querySelector(".popup-succes");
    const form = document.querySelector(".contact-form");
    const setOverflow = () => {
        if (popUp.classList.contains("popup-succes--active") || form.classList.contains("contact-form--active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };
    const observer = new MutationObserver(function (mutationsList, observer) {
        setOverflow();
    });
    const config = { attributes: true, attributeFilter: ["class"] };

    if (popUp) {
        observer.observe(popUp, config);
    }

    if (form) {
        observer.observe(form, config);
    }
}
