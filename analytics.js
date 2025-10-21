window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}


gtag('js', new Date());
gtag('config', 'G-J2F9LDBNET');


document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".tg-link").forEach(link => {
        link.addEventListener("click", () => {
            gtag('event', 'click_telegram', {
                'event_label': link.textContent.trim()
            });
        });
    });


    document.querySelectorAll(".email-link").forEach(link => {
        link.addEventListener("click", () => {
            gtag('event', 'click_email', {
                'event_label': link.textContent.trim()
            });
        });
    });


    document.querySelectorAll(".bot-link, .game-bot-link").forEach(link => {
        link.addEventListener("click", () => {
            gtag('event', 'click_bot', {
                'event_label': link.textContent.trim()
            });
        });
    });


    const copyBtn = document.getElementById("copy-promocode-btn");
    if (copyBtn) {
        copyBtn.addEventListener("click", () => {
            gtag('event', 'copy_promocode', {
                'event_label': '1XARABI'
            });
        });
    }


    document.querySelectorAll(".lang-option").forEach(option => {
        option.addEventListener("click", () => {
            gtag('event', 'change_language', {
                'event_label': option.getAttribute("data-lang")
            });
        });
    });
