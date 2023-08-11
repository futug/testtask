export function preloaderHandler() {
    const preloaderTips = document.querySelectorAll(".preloader__text");
    const preloader = document.querySelector(".preloader");

    let previousDelay = 0;

    const randomDelay = () => {
        let delay;
        do {
            delay = Math.floor(Math.random() * 4 * 1000);
        } while (delay <= previousDelay);
        previousDelay = delay;
        return delay;
    };

    preloaderTips.forEach((el) => {
        setInterval(() => {
            el.classList.add("preloader__text--active");

            const allActive = [...preloaderTips].every((tip) => tip.classList.contains("preloader__text--active"));
            if (allActive) {
                setInterval(() => {
                    preloader.classList.add("preloader--hidden");
                }, 1000);
            }
        }, randomDelay());
    });
}
