export function setupFormHandling() {
    const formButton = document.querySelector(".header__nav-cta ");

    formButton.addEventListener("click", () => {
        document.querySelector(".contact-form ").classList.add("contact-form--active");
    });

    const formClose = document.querySelector(".contact-form__form-close");
    formClose.addEventListener("click", () => {
        document.querySelector(".contact-form ").classList.remove("contact-form--active");
    });
}
