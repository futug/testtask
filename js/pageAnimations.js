export function pageAnimations() {
    const title = document.querySelector(".hero__title");
    const subtitle = document.querySelectorAll(".hero__subtitle");
    const socialLinks = document.querySelectorAll(".hero__social-link");
    const explanations = document.querySelectorAll(".hero__explanation-item");
    const header = document.querySelector(".header");
    const navBar = document.querySelector(".header__nav");
    const preloader = document.querySelector(".preloader");

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === "class") {
                if (preloader.classList.contains("preloader--hidden")) {
                    setInterval(() => {
                        header.classList.add("header--visible");
                    }, 500);
                    setInterval(() => {
                        navBar.classList.add("header__nav--visible");
                    }, 1000);
                    setInterval(() => {
                        title.classList.add("hero__title--visible");
                    }, 1200);
                    subtitle.forEach((el) =>
                        setInterval(() => {
                            el.classList.add("hero__subtitle--visible");
                        }, 1400)
                    );
                    socialLinks.forEach((el) =>
                        setInterval(() => {
                            el.classList.add("hero__social-link--visible");
                        }, 1600)
                    );
                    explanations.forEach((el, index) =>
                        setInterval(() => {
                            el.classList.add("hero__explanation-item--visible");
                        }, 1600 * (index + 1))
                    );
                }
            }
        });
    });

    observer.observe(preloader, { attributes: true });
}
