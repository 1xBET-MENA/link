document.addEventListener("DOMContentLoaded", () => {
    const telegramBtn = document.querySelector(".nav-link[href='#telegram']");
    const emailBtn = document.querySelector(".nav-link[href='#email']");
    const botBtn = document.querySelector(".nav-link[href='#bots']");
    const telegramLinks = document.getElementById("telegram-links");
    const emailLinks = document.getElementById("email-links");
    const botLinks = document.getElementById("bot-links");
    const navLinks = document.querySelectorAll(".nav-link");

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
        { href: "mailto:processing-ar@1xbet-team.com", text: "باقي الدول العربية" }
    ];

    const botData = [
        { href: "https://t.me/iraqpaymentssupport_bot", text: "بوت الدعم المالي - العراق", flag: "img/irq.png" },
        { href: "https://t.me/jordanpaymentssupport_bot", text: "بوت الدعم المالي - الأردن", flag: "img/jor.png" },
        { href: "https://t.me/algeriapaymentssupport_bot", text: "بوت الدعم المالي - الجزائر", flag: "img/dza.png" }
    ];

    function updateLinks(container, data, isEmail = false) {
        container.innerHTML = "";
        if (!isEmail) {
            data.forEach(item => {
                const link = document.createElement("a");
                link.href = item.href;
                link.className = "tg-link";
                link.target = "_blank";
                link.innerHTML = `<img src="${item.flag}" alt="Flag" loading="lazy">${item.text}`;
                container.appendChild(link);
            });
        } else {
            const header = document.createElement("p");
            header.textContent = "اختر دولتك وراسلنا مباشرة عبر البريد الإلكتروني";
            header.className = "email-header";
            container.appendChild(header);
            data.forEach(item => {
                const link = document.createElement("a");
                link.href = item.href;
                link.className = "email-link";
                link.target = "_blank";
                link.textContent = item.text;
                container.appendChild(link);
            });
        }
    }

    function setActiveLink(link) {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    }

    telegramBtn.addEventListener("click", () => {
        updateLinks(telegramLinks, telegramData);
        setActiveLink(telegramBtn);
    });

    emailBtn.addEventListener("click", () => {
        updateLinks(emailLinks, emailData, true);
        setActiveLink(emailBtn);
    });

    botBtn.addEventListener("click", () => {
        updateLinks(botLinks, botData);
        setActiveLink(botBtn);
    });

    // Initialize with Telegram links
    updateLinks(telegramLinks, telegramData);
    setActiveLink(telegramBtn);

    // Copy Promocode function
    window.copyPromocode = function() {
        navigator.clipboard.writeText("PROMO2025").then(() => {
            alert("تم نسخ الكود: PROMO2025");
        }).catch(() => {
            alert("فشل نسخ الكود، حاول مرة أخرى");
        });
    };
});
