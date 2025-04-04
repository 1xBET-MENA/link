document.getElementById("switchBtn").addEventListener("click", function() {
    const linksContainer = document.querySelector(".links");
    const isEmailMode = this.classList.toggle("email-mode");
    const icon = document.getElementById("switchIcon");

    // تبديل الأيقونة
    icon.classList.toggle("fa-envelope");
    icon.classList.toggle("fa-telegram");

    // بيانات التلغرام
    const telegramData = [
        { href: "https://t.me/xBET_MENA_EGY", text: "1xBET Egypt - بالعربي", flag: "img/egy.png" },
        { href: "https://t.me/xBET_MENA_MAR", text: "1xBET Morocco - بالعربي", flag: "img/mar.png" },
        { href: "https://t.me/xBET_MENA_MRT", text: "1xBET Mauritania - بالعربي", flag: "img/mrt.png" },
        { href: "https://t.me/xBET_MENA_IRQ", text: "1xBET Iraq - بالعربي", flag: "img/irq.png" },
        { href: "https://t.me/xBET_MENA_JOR", text: "1xBET Jordan - بالعربي", flag: "img/jor.png" },
        { href: "https://t.me/xBET_MENA_DZA", text: "1xBET Algeria - بالعربي", flag: "img/dza.png" }
    ];

    // بيانات الإيميلات
    const emailData = [
        { href: "mailto:processing@eg.1xbet-team.com", text: "فريق الدعم - مصر", flag: "img/egy.png" },
        { href: "mailto:processing-morocco@1xbet-team.com", text: "فريق الدعم - المغرب", flag: "img/mar.png" },
        { href: "mailto:processing-mauritania@1xbet-team.com", text: "فريق الدعم - موريتانيا", flag: "img/mrt.png" },
        { href: "mailto:processing-iq@1xbet-team.com", text: "فريق الدعم - العراق", flag: "img/irq.png" },
        { href: "mailto:processing-algeria@1xbet-team.com", text: "فريق الدعم - الجزائر", flag: "img/dza.png" },
        { href: "mailto:processing-tunisia@1xbet-team.com", text: "فريق الدعم - تونس", flag: "img/tun.png" },
        { href: "mailto:processing-djibouti@1xbet-team.com", text: "فريق الدعم - جيبوتي", flag: "img/dji.png" },
        { href: "mailto:processing-jor@1xbet-team.com", text: "فريق الدعم - الأردن", flag: "img/jor.png" },
        { href: "mailto:processing-haiti@1xbet-team.com", text: "فريق الدعم - هايتي", flag: "img/hti.png" },
        { href: "mailto:processing-ar@1xbet-team.com", text: "فريق الدعم - باقي الدول العربية", flag: "img/arab.png" }
    ];

    // مسح المحتوى الحالي
    linksContainer.innerHTML = "";

    if (isEmailMode) {
        // إضافة 10 روابط إيميلات
        emailData.forEach(item => {
            const link = document.createElement("a");
            link.href = item.href;
            link.className = "tg-link";
            link.target = "_blank";
            link.innerHTML = `<img src="${item.flag}" alt="${item.text.split(" - ")[1]} Flag" loading="lazy">${item.text}`;
            linksContainer.appendChild(link);
        });
    } else {
        // إضافة 6 روابط تلغرام
        telegramData.forEach(item => {
            const link = document.createElement("a");
            link.href = item.href;
            link.className = "tg-link";
            link.target = "_blank";
            link.innerHTML = `<img src="${item.flag}" alt="${item.text.split(" - ")[0]} Flag" loading="lazy">${item.text}`;
            linksContainer.appendChild(link);
        });
    }
});
