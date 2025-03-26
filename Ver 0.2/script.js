// قائمة الروابط
const emailLinks = {
    "iraq": "mailto:iraq@example.com",
    "jordan": "mailto:jordan@example.com",
    // أضف باقي الدول هنا
    "default": "mailto:default@example.com"
};

const telegramLinks = {
    "iraq": "https://t.me/xBET_MENA_IRQ",
    "jordan": "https://t.me/xBET_MENA_JOR",
    // أضف باقي البوتات هنا
};

let isEmailMode = true; // البداية تكون على البريد الإلكتروني

// تبديل الأيقونات والروابط
const switchButton = document.getElementById("switchBtn");
const switchIcon = document.getElementById("switchIcon");

switchButton.addEventListener("click", () => {
    isEmailMode = !isEmailMode;

    // تغيير الأيقونة
    if (isEmailMode) {
        switchIcon.classList.remove("fa-paper-plane");
        switchIcon.classList.add("fa-envelope");
    } else {
        switchIcon.classList.remove("fa-envelope");
        switchIcon.classList.add("fa-paper-plane");
    }

    // تحديث الرابط وفقًا للوضع
    let country = "iraq";  // يمكن تغيير هذا بناءً على الدولة الحالية
    let link = isEmailMode ? emailLinks[country] || emailLinks["default"] : telegramLinks[country] || telegramLinks["default"];
    window.location.href = link; // الانتقال إلى الرابط
});
