const emailLinks = {
    "iraq": "mailto:processing-iq@1xbet-team.com",
    "jordan": "mailto:jordan@example.com",
    "default": "mailto:processing-ar@1xbet-team.com"
};
const telegramLinks = {
    "iraq": "https://t.me/xBET_MENA_IRQ",
    "jordan": "https://t.me/xBET_MENA_JOR"
};

let isEmailMode = true;

const switchButton = document.getElementById("switchBtn");
const switchIcon = document.getElementById("switchIcon");

switchButton.addEventListener("click", () => {
    isEmailMode = !isEmailMode;

    switchIcon.classList.toggle("fa-envelope");
    switchIcon.classList.toggle("fa-paper-plane");
    switchButton.innerHTML = `<i class="fa ${isEmailMode ? 'fa-envelope' : 'fa-paper-plane'}"></i> 
        ${isEmailMode ? "تبديل إلى تلغرام" : "تبديل إلى البريد"}`;

    const country = "iraq"; 
    const link = isEmailMode ? emailLinks[country] || emailLinks["default"] : telegramLinks[country] || telegramLinks["default"];
    window.location.href = link;
});
