document.getElementById("switchBtn").addEventListener("click", function() {
    const links = document.querySelectorAll(".tg-link");
    const isEmailMode = this.classList.toggle("email-mode");

    const icon = document.getElementById("switchIcon");
    icon.classList.toggle("fa-envelope");
    icon.classList.toggle("fa-telegram");

    const originalLinks = [
        "https://t.me/xBET_MENA_EGY",
        "https://t.me/xBET_MENA_MAR",
        "https://t.me/xBET_MENA_MRT",
        "https://t.me/xBET_MENA_IRQ",
        "https://t.me/xBET_MENA_JOR",
        "https://t.me/xBET_MENA_DZA"
    ];


    const emailLinks = [
        "mailto:egypt@1xbet.com",
        "mailto:morocco@1xbet.com",
        "mailto:mauritania@1xbet.com",
        "mailto:iraq@1xbet.com",
        "mailto:jordan@1xbet.com",
        "mailto:algeria@1xbet.com"
    ];

    links.forEach((link, index) => {
        if (isEmailMode) {
            link.href = emailLinks[index];
        } else {
            link.href = originalLinks[index];
        }
    });
});
