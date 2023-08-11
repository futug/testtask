export function sendMail(e) {
    e.preventDefault();
    let params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    emailjs.send("service_vq4ztwk", "template_ej5dhyh", params).then(function (res) {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        const contactForm = document.querySelector(".contact-form");
        const succesMes = document.querySelector(".popup-succes");
        contactForm.classList.remove("contact-form--active");
        succesMes.classList.add("popup-succes--active");
        const succesClose = document.querySelector(".popup-succes__close");
        succesClose.addEventListener("click", () => {
            succesMes.classList.remove("popup-succes--active");
        });
    });
}

const sendButton = document.querySelector(".contact-form__send-button ");

sendButton.addEventListener("click", (e) => sendMail(e));
