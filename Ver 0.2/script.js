const loadingTexts = {
    ar: ["جاري التحميل...", "لحظات فقط...", "يتم الآن التحميل..."],
    en: ["Loading...", "Just a moment...", "Fetching now..."],
    fr: ["Chargement...", "Un instant...", "Récupération en cours..."]
};

function updateLoadingText() {
    const lang = document.documentElement.getAttribute("lang") || "ar";
    const loadingTextElement = document.querySelector(".loading-text");
    if (loadingTextElement) {
        let index = 0;
        const updateText = () => {
            loadingTextElement.textContent = loadingTexts[lang][index];
            index = (index + 1) % loadingTexts[lang].length;
        };
        updateText();
        return setInterval(updateText, 2000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const telegramLinks = document.getElementById("telegram-links");
    const emailLinks = document.getElementById("email-links");
    const botLinks = document.getElementById("bot-links");
    const gameBotLinks = document.getElementById("game-bot-links");
    const newsContent = document.getElementById("news-content");
    const copyBtn = document.getElementById("copy-promocode-btn");
    const scrollTopBtn = document.querySelector(".scroll-top-btn");
    const themeToggle = document.querySelector(".theme-toggle");
    const langDropdown = document.querySelector(".lang-dropdown");
    const langOptions = document.querySelectorAll(".lang-option");

    const telegramData = [
        { href: "https://t.me/xBET_MENA_EGY", text: "1xBET Egypt - بالعربي", flag: "img/egy.png" },
        { href: "https://t.me/xBET_MENA_MAR", text: "1xBET Morocco - بالعربي", flag: "img/mar.png" },
        { href: "https://t.me/xBET_MENA_MRT", text: "1xBET Mauritania - بالعربي", flag: "img/mrt.png" },
        { href: "https://t.me/xBET_MENA_IRQ", text: "1xBET Iraq - بالعربي", flag: "img/irq.png" },
        { href: "https://t.me/xBET_MENA_JOR", text: "1xBET Jordan - بالعربي", flag: "img/jor.png" },
        { href: "https://t.me/xBET_MENA_DZA", text: "1xBET Algeria - بالعربي", flag: "img/dza.png" }
    ];

    const emailData = [
        { href: "mailto:processing@eg.1xbet-team.com", text: "supportTeamEgypt" },
        { href: "mailto:processing-morocco@1xbet-team.com", text: "supportTeamMorocco" },
        { href: "mailto:processing-mauritania@1xbet-team.com", text: "supportTeamMauritania" },
        { href: "mailto:processing-iq@1xbet-team.com", text: "supportTeamIraq" },
        { href: "mailto:processing-algeria@1xbet-team.com", text: "supportTeamAlgeria" },
        { href: "mailto:processing-tunisia@1xbet-team.com", text: "supportTeamTunisia" },
        { href: "mailto:processing-djibouti@1xbet-team.com", text: "supportTeamDjibouti" },
        { href: "mailto:processing-jor@1xbet-team.com", text: "supportTeamJordan" },
        { href: "mailto:processing-haiti@1xbet-team.com", text: "supportTeamHaiti" },
        { href: "mailto:processing-ar@1xbet-team.com", text: "supportTeamOther" }
    ];

    const botData = [
        { href: "https://t.me/iraqpaymentssupport_bot", text: "financialSupportBotIraq", icon: "img/irq.png" },
        { href: "https://t.me/jordanpaymentssupport_bot", text: "financialSupportBotJordan", icon: "img/jor.png" },
        { href: "https://t.me/algeriapaymentssupport_bot", text: "financialSupportBotAlgeria", icon: "img/dza.png" }
    ];

    const gameBotData = [
        { href: "https://t.me/xBETxoBOT", text: "gameBot", icon: "img/game-bot.png" }
    ];

    const newsData = [
        { title: "newOffer", content: "promocodeOffer" },
        { title: "matchToday", content: "matchWeek" },
        { title: "newUpdate", content: "telegramUpdate" },
        { title: "gameBotNews", content: "gameBotNewsContent" }
    ];

    const translations = {
        ar: {
            home: "الرئيسية",
            telegram: "تلغرام",
            email: "البريد الإلكتروني",
            bots: "بوتات الدعم",
            gameBot: "بوت الألعاب",
            promocode: "البروموكود",
            copyBtn: "نسخ الكود",
            copied: "تم النسخ!",
            profileTitle: "مدونة 1xBET بالعربي",
            profileDesc: "آخر الأخبار والإعلانات",
            telegramHeader: "قنوات تلغرام الرسمية",
            emailHeader: "اختر دولتك وراسلنا مباشرة عبر البريد الإلكتروني",
            botHeader: "اختر دولتك وراسلنا عبر بوتات تلغرام",
            gameBotHeader: "جرب بوت الألعاب الجديد الآن!",
            loading: "جاري التحميل...",
            promocodeText: "استخدم الكود <strong>1XARABI</strong> للحصول على مكافآت حصرية!",
            newOffer: "عرض جديد!",
            promocodeOffer: "استخدم كود 1XARABI للحصول على مكافأة 200% على إيداعك الأول!",
            matchToday: "مباراة اليوم",
            matchWeek: "لا تفوت المراهنة على مباراة الأسبوع: برشلونة ضد ريال مدريد!",
            newUpdate: "تحديث جديد",
            telegramUpdate: "تم تحديث قنوات تلغرام لتقديم دعم أفضل للمستخدمين.",
            gameBotNews: "إطلاق بوت الألعاب!",
            gameBotNewsContent: "جرب بوت الألعاب الجديد @xBETxoBOT لتجربة ترفيهية مميزة!",
            supportTeamEgypt: "فريق الدعم - مصر",
            supportTeamMorocco: "فريق الدعم - المغرب",
            supportTeamMauritania: "فريق الدعم - موريتانيا",
            supportTeamIraq: "فريق الدعم - العراق",
            supportTeamAlgeria: "فريق الدعم - الجزائر",
            supportTeamTunisia: "فريق الدعم - تونس",
            supportTeamDjibouti: "فريق الدعم - جيبوتي",
            supportTeamJordan: "فريق الدعم - الأردن",
            supportTeamHaiti: "فريق الدعم - هايتي",
            supportTeamOther: "باقي الدول العربية",
            financialSupportBotIraq: "بوت الدعم المالي - العراق",
            financialSupportBotJordan: "بوت الدعم المالي - الأردن",
            financialSupportBotAlgeria: "بوت الدعم المالي - الجزائر",
            gameBot: "بوت الألعاب"
        },
        en: {
            home: "Home",
            telegram: "Telegram",
            email: "Email",
            bots: "Support Bots",
            gameBot: "Game Bot",
            promocode: "Promo Code",
            copyBtn: "Copy Code",
            copied: "Copied!",
            profileTitle: "1xBET Arabic Blog",
            profileDesc: "Latest News and Announcements",
            telegramHeader: "Official Telegram channels",
            emailHeader: "Choose your country and contact us directly via Email",
            botHeader: "Choose your country and contact us via Telegram Bots",
            gameBotHeader: "Try the new Game Bot now!",
            loading: "Loading...",
            promocodeText: "Use the code <strong>1XARABI</strong> to get exclusive bonuses!",
            newOffer: "New Offer!",
            promocodeOffer: "Use code 1XARABI to get a 200% bonus on your first deposit!",
            matchToday: "Today's Match",
            matchWeek: "Don't miss betting on the match of the week: Barcelona vs Real Madrid!",
            newUpdate: "New Update",
            telegramUpdate: "Telegram channels updated to provide better user support.",
            gameBotNews: "Game Bot Launch!",
            gameBotNewsContent: "Try the new Game Bot @xBETxoBOT for a unique entertainment experience!",
            supportTeamEgypt: "Support Team - Egypt",
            supportTeamMorocco: "Support Team - Morocco",
            supportTeamMauritania: "Support Team - Mauritania",
            supportTeamIraq: "Support Team - Iraq",
            supportTeamAlgeria: "Support Team - Algeria",
            supportTeamTunisia: "Support Team - Tunisia",
            supportTeamDjibouti: "Support Team - Djibouti",
            supportTeamJordan: "Support Team - Jordan",
            supportTeamHaiti: "Support Team - Haiti",
            supportTeamOther: "Other Arab Countries",
            financialSupportBotIraq: "Financial Support Bot - Iraq",
            financialSupportBotJordan: "Financial Support Bot - Jordan",
            financialSupportBotAlgeria: "Financial Support Bot - Algeria",
            gameBot: "Game Bot"
        },
        fr: {
            home: "Accueil",
            telegram: "Télégramme",
            email: "Email",
            bots: "Bots de Support",
            gameBot: "Bot de Jeu",
            promocode: "Code Promo",
            copyBtn: "Copier le Code",
            copied: "Copié !",
            profileTitle: "Blog 1xBET Arabe",
            profileDesc: "Dernières Nouvelles et Annonces",
            telegramHeader: "Chaînes Telegram officielles",
            emailHeader: "Choisissez votre pays et contactez-nous directement par Email",
            botHeader: "Choisissez votre pays et contactez-nous via les Bots Télégramme",
            gameBotHeader: "Essayez le nouveau Bot de Jeu maintenant !",
            loading: "Chargement...",
            promocodeText: "Utilisez le code <strong>1XARABI</strong> pour obtenir des bonus exclusifs !",
            newOffer: "Nouvelle Offre !",
            promocodeOffer: "Utilisez le code 1XARABI pour obtenir un bonus de 200% sur votre premier dépôt !",
            matchToday: "Match du Jour",
            matchWeek: "Ne manquez pas de parier sur le match de la semaine : Barcelone contre Real Madrid !",
            newUpdate: "Nouvelle Mise à Jour",
            telegramUpdate: "Les chaînes Télégramme ont été mises à jour pour offrir un meilleur support aux utilisateurs.",
            gameBotNews: "Lancement du Bot de Jeu !",
            gameBotNewsContent: "Essayez le nouveau Bot de Jeu @xBETxoBOT pour une expérience de divertissement unique !",
            supportTeamEgypt: "Équipe de Support - Égypte",
            supportTeamMorocco: "Équipe de Support - Maroc",
            supportTeamMauritania: "Équipe de Support - Mauritanie",
            supportTeamIraq: "Équipe de Support - Irak",
            supportTeamAlgeria: "Équipe de Support - Algérie",
            supportTeamTunisia: "Équipe de Support - Tunisie",
            supportTeamDjibouti: "Équipe de Support - Djibouti",
            supportTeamJordan: "Équipe de Support - Jordanie",
            supportTeamHaiti: "Équipe de Support - Haïti",
            supportTeamOther: "Autres Pays Arabes",
            financialSupportBotIraq: "Bot de Support Financier - Irak",
            financialSupportBotJordan: "Bot de Support Financier - Jordanie",
            financialSupportBotAlgeria: "Bot de Support Financier - Algérie",
            gameBot: "Bot de Jeu"
        }
    };

    function updateLinks(container, data, options = {}) {
        container.innerHTML = "";
        const { isEmail = false, isBot = false, isGameBot = false, headerText = "" } = options;
        const lang = document.documentElement.getAttribute("lang") || "ar";
        if (headerText) {
            const header = document.createElement("p");
            header.textContent = translations[lang][headerText];
            header.className = isBot ? "bot-header" : isGameBot ? "game-bot-header" : "email-header";
            container.appendChild(header);
        }
        data.forEach(item => {
            const link = document.createElement("a");
            link.href = item.href;
            link.className = isEmail ? "email-link" : isGameBot ? "game-bot-link" : isBot ? "bot-link" : "tg-link";
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.innerHTML = isEmail ? translations[lang][item.text] :
                            (isBot || isGameBot ? `<img src="${item.icon}" alt="Icon" loading="lazy">${translations[lang][item.text]}` :
                                                 `<img src="${item.flag}" alt="Icon" loading="lazy">${item.text}`);
            container.appendChild(link);
        });
    }

    function updateNews() {
        const lang = document.documentElement.getAttribute("lang") || "ar";
        newsContent.innerHTML = `<div class='spinner'><i class='fas fa-spinner'></i><span class='loading-text' data-loading-text></span></div>`;
        const loadingInterval = updateLoadingText();
        setTimeout(() => {
            clearInterval(loadingInterval);
            newsContent.innerHTML = "";
            newsData.forEach(item => {
                const newsItem = document.createElement("div");
                newsItem.className = "news-item";
                newsItem.innerHTML = `<h4>${translations[lang][item.title]}</h4><p>${translations[lang][item.content]}</p>`;
                newsContent.appendChild(newsItem);
            });
        }, 500);
    }

    function setActiveLink(link) {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            observer.disconnect();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            const headerHeight = document.querySelector("header").getBoundingClientRect().height;
            window.scrollTo({
                top: targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20,
                behavior: "smooth"
            });
            setActiveLink(link);
            setTimeout(() => sections.forEach(section => observer.observe(section)), 100);
        });
    });

    const sections = document.querySelectorAll(".section");
    const observerOptions = {
        root: null,
        rootMargin: "-80px 0px -80px 0px",
        threshold: 0.8
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                const correspondingLink = document.querySelector(`.nav-link[href='#${sectionId}']`);
                if (correspondingLink) {
                    setActiveLink(correspondingLink);
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    if (copyBtn) {
        copyBtn.addEventListener("click", () => {
            copyPromocode();
        });
    }

    if (scrollTopBtn) {
        window.addEventListener("scroll", () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            document.querySelector(".progress-bar").style.width = `${scrollPercentage}%`;
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

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
            const newTheme = currentTheme === "light" ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", newTheme);
            document.body.setAttribute("data-theme", newTheme);
            themeToggle.innerHTML = `<i class="fas fa-${newTheme === "light" ? "moon" : "sun"}"></i>`;
            localStorage.setItem("theme", newTheme);
        });
        const savedTheme = localStorage.getItem("theme") || "dark";
        document.documentElement.setAttribute("data-theme", savedTheme);
        document.body.setAttribute("data-theme", savedTheme);
        themeToggle.innerHTML = `<i class="fas fa-${savedTheme === "light" ? "moon" : "sun"}"></i>`;
    }

if (langDropdown) {
    langOptions.forEach(option => {
        option.addEventListener("click", () => {
            const lang = option.getAttribute("data-lang");
            document.documentElement.setAttribute("lang", lang);
            document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
            document.body.setAttribute("lang", lang);

            document.querySelectorAll("[data-translate]").forEach(element => {
                const key = element.getAttribute("data-translate");
                if (translations[lang][key]) { // تحقق إذا الكي موجود
                    if (key === "promocodeText") {
                        element.innerHTML = translations[lang][key];
                    } else {
                        element.textContent = translations[lang][key];
                    }
                }
            });

            updateLinks(telegramLinks, telegramData, { headerText: "telegramHeader" });
            updateLinks(emailLinks, emailData, { isEmail: true, headerText: "emailHeader" });
            updateLinks(botLinks, botData, { isBot: true, headerText: "botHeader" });
            updateLinks(gameBotLinks, gameBotData, { isGameBot: true, headerText: "gameBotHeader" });
            updateNews();

            localStorage.setItem("lang", lang);
        });
    });

    const savedLang = localStorage.getItem("lang") || "ar";
    document.documentElement.setAttribute("lang", savedLang);
    document.documentElement.setAttribute("dir", savedLang === "ar" ? "rtl" : "ltr");
    document.body.setAttribute("lang", savedLang);
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[savedLang][key]) { // تحقق إذا الكي موجود
            if (key === "promocodeText") {
                element.innerHTML = translations[savedLang][key];
            } else {
                element.textContent = translations[savedLang][key];
            }
        }
    });
}

    updateLinks(telegramLinks, telegramData, { headerText: "telegramHeader" });
    updateLinks(emailLinks, emailData, { isEmail: true, headerText: "emailHeader" });
    updateLinks(botLinks, botData, { isBot: true, headerText: "botHeader" });
    updateLinks(gameBotLinks, gameBotData, { isGameBot: true, headerText: "gameBotHeader" });
    updateNews();
    setActiveLink(document.querySelector(".nav-link.active"));

    ["img/main.jpg", "img/logo.png", "img/game-bot.png"].forEach(url => {
        const img = new Image();
        img.src = url;
        img.onerror = () => console.error(`فشل تحميل الصورة: ${url}`);
    });
});

function copyPromocode() {
    const promocode = "1XARABI";
    const statusElement = document.getElementById("copy-status");
    const inputElement = document.querySelector(".promocode-input");
    const copyBtn = document.getElementById("copy-promocode-btn");
    const lang = document.documentElement.getAttribute("lang") || "ar";
    statusElement.textContent = "";
    if (!window.location.protocol.includes("https") && !window.location.hostname.includes("localhost")) {
        statusElement.textContent = translations[lang].copied;
        inputElement.style.display = "block";
        showToast(translations[lang].copied || "فشل النسخ، انسخ يدويًا: 1XARABI");
        return;
    }
    navigator.clipboard.writeText(promocode).then(() => {
        statusElement.textContent = translations[lang].copied;
        copyBtn.textContent = translations[lang].copied;
        showToast(translations[lang].copied);
        setTimeout(() => {
            copyBtn.textContent = translations[lang].copyBtn;
            statusElement.textContent = "";
        }, 2000);
    }).catch(() => {
        statusElement.textContent = translations[lang].copied ? "فشل النسخ، انسخ يدويًا:" : "Failed to copy, please copy manually: ";
        inputElement.style.display = "block";
        showToast(translations[lang].copied || "فشل النسخ، انسخ يدويًا: 1XARABI");
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => toast.style.display = "none", 2000);
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
        statusElement.textContent = successful ? translations[document.documentElement.getAttribute("lang") || "ar"].copied : "فشل النسخ، يرجى نسخه يدويًا: " + text;
    } catch (err) {
        statusElement.textContent = "فشل النسخ: " + err.message + "، يرجى نسخه يدويًا: " + text;
    } finally {
        document.body.removeChild(tempInput);
    }
}





