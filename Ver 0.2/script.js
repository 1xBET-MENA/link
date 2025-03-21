const emailLinks = {
    egypt: "mailto:processing@eg.1xbet-team.com",
    morocco: "mailto:processing-morocco@1xbet-team.com",
    mauritania: "mailto:processing-iq@1xbet-team.com",
    iraq: "mailto:processing-iq@1xbet-team.com",
    jordan: "mailto:jordan@example.com",
    algeria: "mailto:processing-algeria@1xbet-team.com",
    tunisia: "mailto:processing-tunisia@1xbet-team.com",
    djibouti: "mailto:processing-djibouti@1xbet-team.com",
    other: "mailto:processing-ar@1xbet-team.com"
};

const telegramLinks = {
    "iraq": "https://t.me/xBET_MENA_IRQ",
    "jordan": "https://t.me/xBET_MENA_JOR"
};

let isEmailMode = true;

const switchButton = document.getElementById("switchBtn");
const switchIcon = document.getElementById("switchIcon");
const links = document.querySelectorAll('.tg-link');

switchButton.addEventListener("click", () => {
    isEmailMode = !isEmailMode;

    switchIcon.className = isEmailMode ? "fas fa-envelope" : "fas fa-paper-plane";

    links.forEach(link => {
        const country = link.href.includes("IRQ") ? "iraq" : "jordan";
        link.href = isEmailMode ? emailLinks[country] : telegramLinks[country];
        link.innerHTML = isEmailMode
            ? `<img src="img/${country}.png" alt="Email Logo" loading="lazy">راسلنا عبر البريد`
            : `<img src="img/${country}.png" alt="Telegram Logo" loading="lazy">1xBET ${country.charAt(0).toUpperCase() + country.slice(1)} - بالعربي`;
    });
});
