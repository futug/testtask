export function sendMail(e) {
    e.preventDefault();
    let params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    emailjs.send("service_vq4ztwk", "template_ej5dhyh", params).then(function (res) {
        console.log(res);
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        const contactForm = document.querySelector(".contact-form");

        contactForm.classList.remove("contact-form--active");
    });
}
