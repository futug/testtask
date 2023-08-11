export function setupFormHandling() {
    const formButton = document.querySelector(".header__nav-cta ");

    formButton.addEventListener("click", () => {
        document.querySelector(".contact-form ").classList.add("contact-form--active");
    });

    const formClose = document.querySelector(".contact-form__form-close");
    formClose.addEventListener("click", () => {
        document.querySelector(".contact-form ").classList.remove("contact-form--active");
    });

    // AJAX;

    // document.forms.reserveForm.onsubmit = function (e) {
    //     e.preventDefault();
    //     let nameInp = document.forms.reserveForm.name;
    //     let emailInp = document.forms.reserveForm.email;
    //     let messageInp = document.forms.reserveForm.message;

    //     let xhr = new XMLHttpRequest();

    //     xhr.open("POST", "./mail.php");

    //     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    //     xhr.onreadystatechange = function () {
    //         if (xhr.readyState == 4) {
    //             // if (xhr.status == 200) {
    //             //     popup.classList.remove("reserve__popup--active");
    //             //     successPopup.classList.add("popup-success--active");
    //             // } else {
    //             //     popup.classList.remove("reserve__popup--active");
    //             //     errorPopup.classList.add("popup-error--active");
    //             // }
    //             nameInp.value = "";
    //             emailInp.value = "";
    //             messageInp.value = "";
    //         }
    //     };

    //     xhr.send("name=" + nameInp.value + "&email=" + emailInp.value + "&message=" + messageInp.value);
    // };
}
