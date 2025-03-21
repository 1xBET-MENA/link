const emailLinks = {
    "egypt": "mailto:processing@eg.1xbet-team.com",
    "morocco": "mailto:processing-morocco@1xbet-team.com",
    "mauritania": "mailto:processing-iq@1xbet-team.com",
    "iraq": "mailto:processing-iq@1xbet-team.com",
    "jordan": "mailto:jordan@example.com",
    "algeria": "mailto:processing-algeria@1xbet-team.com",
    "tunisia": "mailto:processing-tunisia@1xbet-team.com",
    "djibouti": "mailto:processing-djibouti@1xbet-team.com",
    "other-arab": "mailto:processing-ar@1xbet-team.com"
};
const telegramLinks = {
    "iraq": "https://t.me/xBET_MENA_IRQ",
    "jordan": "https://t.me/xBET_MENA_JOR",
};

let isEmailMode = true;

const switchButton = document.getElementById("switchBtn");
const switchIcon = document.getElementById("switchIcon");

switchButton.addEventListener("click", () => {
    isEmailMode = !isEmailMode;
    
    if (isEmailMode) {
        switchIcon.classList.remove("fa-paper-plane");
        switchIcon.classList.add("fa-envelope");
    } else {
        switchIcon.classList.remove("fa-envelope");
        switchIcon.classList.add("fa-paper-plane");
    }

    let country = "iraq";
    let link = isEmailMode ? emailLinks[country] || emailLinks["default"] : telegramLinks[country] || telegramLinks["default"];
    window.location.href = link;
});
