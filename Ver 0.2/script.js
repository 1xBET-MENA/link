document.addEventListener("DOMContentLoaded", () => {
    const telegramBtn = document.querySelector(".nav-link[href='#telegram']");
    const emailBtn = document.querySelector(".nav-link[href='#email']");
    const botBtn = document.querySelector(".nav-link[href='#bots']");
    const homeBtn = document.querySelector(".nav-link[href='#home']");
    const telegramLinks = document.getElementById("telegram-links");
    const emailLinks = document.getElementById("email-links");
    const botLinks = document.getElementById("bot-links");
    const newsContent = document.getElementById("news-content");
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

    const newsData = [
        { title: "عرض جديد!", content: "استخدم كود PROMO2025 للحصول على مكافأة 100% على إيداعك الأول!" },
        { title: "مباراة اليوم", content: "لا تفوت المراهنة على مباراة الأسبوع: برشلونة ضد ريال مدريد!" },
        { title: "تحديث جديد", content: "تم تحديث قنوات تلغرام لتقديم دعم أفضل للمستخدمين." }
    ];

    function updateLinks(container, data, isEmail = false, isBot = false) {
        container.innerHTML = "";
        if (isEmail) {
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
        } else if (isBot) {
            const header = document.createElement("p");
            header.textContent = "اختر دولتك وراسلنا عبر بوتات تلغرام";
            header.className = "bot-header";
            container.appendChild(header);
            data.forEach(item => {
                const link = document.createElement("a");
                link.href = item.href;
                link.className = "tg-link";
                link.target = "_blank";
                link.innerHTML = `<img src="${item.flag}" alt="Flag" loading="lazy">${item.text}`;
                container.appendChild(link);
            });
        } else {
            data.forEach(item => {
                const link = document.createElement("a");
                link.href = item.href;
                link.className = "tg-link";
                link.target = "_blank";
                link.innerHTML = `<img src="${item.flag}" alt="Flag" loading="lazy">${item.text}`;
                container.appendChild(link);
            });
        }
    }

    function updateNews() {
        newsContent.innerHTML = "";
        newsData.forEach(item => {
            const newsItem = document.createElement("div");
            newsItem.className = "news-item";
            newsItem.innerHTML = `<h4>${item.title}</h4><p>${item.content}</p>`;
            newsContent.appendChild(newsItem);
        });
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
        updateLinks(botLinks, botData, false, true);
        setActiveLink(botBtn);
    });

    homeBtn.addEventListener("click", () => {
        updateNews();
        setActiveLink(homeBtn);
    });

    updateLinks(telegramLinks, telegramData);
    updateNews();
    setActiveLink(homeBtn);
});

window.copyPromocode = function() {
    const promocode = "PROMO2025";
    const statusElement = document.getElementById("copy-status");

    statusElement.textContent = "";

    if (!window.location.protocol.includes("https") && !window.location.hostname.includes("localhost")) {
        statusElement.textContent = "يرجى تشغيل الموقع على HTTPS أو localhost لاستخدام خاصية النسخ.";
        return;
    }

    if (navigator.clipboard) {
        navigator.clipboard.writeText(promocode).then(() => {
            statusElement.textContent = "تم نسخ الكود بنجاح!";
        }).catch((err) => {
            statusElement.textContent = "فشل النسخ باستخدام Clipboard API: " + err.message;
            fallbackCopy(promocode);
        });
    } else {
        fallbackCopy(promocode);
    }
};

function fallbackCopy(text) {
    const statusElement = document.getElementById("copy-status");
    const tempInput = document.createElement("textarea");
    tempInput.style.position = "absolute";
    tempInput.style.left = "-9999px";
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    try {
        const successful = document.execCommand("copy");
        if (successful) {
            statusElement.textContent = "تم نسخ الكود بنجاح باستخدام الطريقة البديلة!";
        } else {
            statusElement.textContent = "فشل النسخ، يرجى نسخه يدويًا: " + text;
        }
    } catch (err) {
        statusElement.textContent = "فشل النسخ: " + err.message + "، يرجى نسخه يدويًا: " + text;
    } finally {
        document.body.removeChild(tempInput);
    }
}
