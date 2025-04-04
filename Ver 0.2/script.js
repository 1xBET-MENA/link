document.addEventListener("DOMContentLoaded", () => {
    const switchBtn = document.getElementById("switchBtn");
    const linksContainer = document.getElementById("links");
    const switchIcon = document.getElementById("switchIcon");
    let currentMode = "telegram";

    const telegramData = [
        { href: "https://t.me/xBET_MENA_EGY", text: "1xBET Egypt - بالعربي", flag: "img/egy.png" },
        { href: "https://t.me/xBET_MENA_MAR", text: "1xBET Morocco - بالعربي", flag: "img/mar.png" },
        { href: "https://t.me/xBET_MENA_MRT", text: "1xBET Mauritania - بالعربي", flag: "img/mrt.png" },
        { href: "https://t.me/xBET_MENA_IRQ", text: "1xBET Iraq - بالعربي", flag: "img/irq.png" },
        { href: "https://t.me/xBET_MENA_JOR", text: "1xBET Jordan - بالعربي", flag: "img/jor.png" },
        { href: "https://t.me/xBET_MENA_DZA", text: "1xBET Algeria - بالعربي", flag: "img/dza.png" }
    ];

    const emailData = [
        { href: "mailto:processing@eg.1xbet-team.com", text: "فريق الدعم - مصر" },
        { href: "mailto:processing-morocco@1xbet-team.com", text: "فريق الدعم - المغرب" },
        { href: "mailto:processing-mauritania@1xbet-team.com", text: "فريق الدعم - موريتانيا" },
        { href: "mailto:processing-iq@1xbet-team.com", text: "فريق الدعم - العراق" },
        { href: "mailto:processing-algeria@1xbet-team.com", text: "فريق الدعم - الجزائر" },
        { href: "mailto:processing-tunisia@1xbet-team.com", text: "فريق الدعم - تونس" },
        { href: "mailto:processing-djibouti@1xbet-team.com", text: "فريق الدعم - جيبوتي" },
        { href: "mailto:processing-jor@1xbet-team.com", text: "فريق الدعم - الأردن" },
        { href: "mailto:processing-haiti@1xbet-team.com", text: "فريق الدعم - هايتي" },
        { href: "mailto:processing-ar@1xbet-team.com", text: "فريق الدعم - باقي الدول العربية" }
    ];

    const botData = [
        { href: "https://t.me/iraqpaymentssupport_bot", text: "بوت الدعم المالي - العراق", flag: "img/irq.png" },
        { href: "https://t.me/jordanpaymentssupport_bot", text: "بوت الدعم المالي - الأردن", flag: "img/jor.png" }
    ];

    switchBtn.addEventListener("click", () => {
        linksContainer.innerHTML = "";

        switchIcon.classList.remove("fa-envelope", "fa-robot", "fa-telegram");

        if (currentMode === "telegram") {
            currentMode = "email";
            switchIcon.classList.add("fa-robot");
            switchBtn.classList.add("email-mode");
            switchBtn.classList.remove("bot-mode");
            emailData.forEach(item => {
                const link = document.createElement("a");
                link.href = item.href;
                link.className = "email-link";
                link.target = "_blank";
                link.textContent = item.text;
                linksContainer.appendChild(link);
            });
        } else if (currentMode === "email") {
            currentMode = "bots";
            switchIcon.classList.add("fa-telegram");
            switchBtn.classList.remove("email-mode");
            switchBtn.classList.add("bot-mode");
            botData.forEach(item => {
                const link = document.createElement("a");
                link.href = item.href;
                link.className = "tg-link";
                link.target = "_blank";
                link.innerHTML = `<img src="${item.flag}" alt="Flag" loading="lazy">${item.text}`;
                linksContainer.appendChild(link);
            });
        } else if (currentMode === "bots") {
            currentMode = "telegram";
            switchIcon.classList.add("fa-envelope");
            switchBtn.classList.remove("bot-mode");
            switchBtn.classList.remove("email-mode");
            telegramData.forEach(item => {
                const link = document.createElement("a");
                link.href = item.href;
                link.className = "tg-link";
                link.target = "_blank";
                link.innerHTML = `<img src="${item.flag}" alt="Flag" loading="lazy">${item.text}`;
                linksContainer.appendChild(link);
            });
        }
    });
});
