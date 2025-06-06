document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const telegramLinks = document.getElementById("telegram-links");
    const emailLinks = document.getElementById("email-links");
    const botLinks = document.getElementById("bot-links");
    const newsContent = document.getElementById("news-content");
    const copyBtn = document.getElementById("copy-promocode-btn");
    const scrollTopBtn = document.querySelector(".scroll-top-btn");

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
        { title: "عرض جديد!", content: "استخدم كود 1X3RBI للحصول على مكافأة 200% على إيداعك الأول!" },
        { title: "مباراة اليوم", content: "لا تفوت المراهنة على مباراة الأسبوع: برشلونة ضد ريال مدريد!" },
        { title: "تحديث جديد", content: "تم تحديث قنوات تلغرام لتقديم دعم أفضل للمستخدمين." }
    ];

    function updateLinks(container, data, options = {}) {
        container.innerHTML = "";
        const { isEmail = false, isBot = false, headerText = "" } = options;
        if (headerText) {
            const header = document.createElement("p");
            header.textContent = headerText;
            header.className = isBot ? "bot-header" : "email-header";
            container.appendChild(header);
        }
        data.forEach(item => {
            const link = document.createElement("a");
            link.href = item.href;
            link.className = isEmail ? "email-link" : "tg-link";
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.innerHTML = isEmail ? item.text : `<img src="${item.flag}" alt="Flag" loading="lazy">${item.text}`;
            container.appendChild(link);
        });
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

    // تنقل سلس مع تعويض الـ header
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            observer.disconnect(); // إيقاف المراقبة
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            const headerHeight = document.querySelector("header").offsetHeight;
            window.scrollTo({
                top: targetSection.offsetTop - headerHeight - 20,
                behavior: "smooth"
            });
            setActiveLink(link);
            setTimeout(() => {
                sections.forEach(section => observer.observe(section)); // إعادة تفعيل المراقبة
            }, 1000);
        });
    });

    // مراقبة التمرير لتنشيط الأزرار
    const sections = document.querySelectorAll(".section");
    const observerOptions = {
        root: null,
        rootMargin: "-150px 0px -50px 0px",
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        let maxRatio = 0;
        let activeSection = null;

        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                maxRatio = entry.intersectionRatio;
                activeSection = entry.target;
            }
        });

        if (activeSection) {
            const sectionId = activeSection.id;
            const correspondingLink = document.querySelector(`.nav-link[href='#${sectionId}']`);
            if (correspondingLink) {
                setActiveLink(correspondingLink);
            }
        }
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // نسخ البروموكود
    if (copyBtn) {
        copyBtn.addEventListener("click", () => {
            copyPromocode();
            copyBtn.textContent = "تم النسخ!";
            setTimeout(() => {
                copyBtn.textContent = "نسخ الكود";
            }, 2000);
        });
    }

    // زر العودة للأعلى
    if (scrollTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add("active");
            } else {
                scrollTopBtn.classList.remove("active");
            }
        });
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // تحديث المحتوى عند التحميل
    updateLinks(telegramLinks, telegramData);
    updateLinks(emailLinks, emailData, { isEmail: true, headerText: "اختر دولتك وراسلنا مباشرة عبر البريد الإلكتروني" });
    updateLinks(botLinks, botData, { isBot: true, headerText: "اختر دولتك وراسلنا عبر بوتات تلغرام" });
    updateNews();
    setActiveLink(document.querySelector(".nav-link[href='#home']"));
});

function copyPromocode() {
    const promocode = "1X3RBI";
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
}

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
        statusElement.textContent = successful ? "تم نسخ الكود بنجاح باستخدام الطريقة البديلة!" : "فشل النسخ، يرجى نسخه يدويًا: " + text;
    } catch (err) {
        statusElement.textContent = "فشل النسخ: " + err.message + "، يرجى نسخه يدويًا: " + text;
    } finally {
        document.body.removeChild(tempInput);
    }
}