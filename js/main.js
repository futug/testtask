import { scrollHandler } from "./scrollHandler.js";
scrollHandler();

import { setupFormHandling } from "./formHandler.js";

setupFormHandling();

import { preloaderHandler } from "./preloaderHandler.js";
preloaderHandler();

import { pageAnimations } from "./pageAnimations.js";
pageAnimations();

(function () {
    emailjs.init("qk3s_r4Tf0yePeXWF");
})();

import { sendMail } from "./sendMail.js";
