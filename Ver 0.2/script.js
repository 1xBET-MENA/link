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
    iraq: "https://t.me/xBET_MENA_IRQ",
    jordan: "https://t.me/xBET_MENA_JOR"
};

let isEmailMode = true;

const switchButton = document.getElementById("switchBtn");
const switchIcon = document.getElementById("switchIcon");
const switchText = document.getElementById("switchText");
const linksContainer = document.getElementById("linksContainer");

const updateLinks = () => {
    const links = isEmailMode ? emailLinks : telegramLinks;
    linksContainer.innerHTML = "";

    for (let country in links) {
        const newLink = document.createElement("a");
        newLink.href = links[country];
        newLink.innerText = `1xBET ${country.toUpperCase()} - بالعربي`;
        linksContainer.appendChild(newLink);
    }
};

switchButton.addEventListener("click", () => {
    isEmailMode = !isEmailMode;
    switchIcon.className = isEmailMode ? "fas fa-envelope" : "fas fa-paper-plane";
    switchText.textContent = isEmailMode ? "راسلنا مباشرة عبر البريد الإلكتروني" : "راسلنا عبر بوت تيليجرام";
    updateLinks();
});

updateLinks();
