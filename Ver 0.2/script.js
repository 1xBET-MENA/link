document.getElementById("switchBtn").addEventListener("click", function() {
    const telegramLinks = document.getElementById("telegramLinks");
    const emailLinks = document.getElementById("emailLinks");
    const icon = document.getElementById("switchIcon");
    const isEmailMode = this.classList.toggle("email-mode");

    // تبديل الأيقونة
    icon.classList.toggle("fa-envelope");
    icon.classList.toggle("fa-telegram");

    if (isEmailMode) {
        telegramLinks.classList.remove("visible");
        telegramLinks.classList.add("hidden");
        setTimeout(() => {
            telegramLinks.style.display = "none";
            emailLinks.style.display = "flex";
            setTimeout(() => {
                emailLinks.classList.remove("hidden");
                emailLinks.classList.add("visible");
            }, 10);
        }, 500); // يتطابق مع مدة الانتقال في CSS
    } else {
        emailLinks.classList.remove("visible");
        emailLinks.classList.add("hidden");
        setTimeout(() => {
            emailLinks.style.display = "none";
            telegramLinks.style.display = "flex";
            setTimeout(() => {
                telegramLinks.classList.remove("hidden");
                telegramLinks.classList.add("visible");
            }, 10);
        }, 500); // يتطابق مع مدة الانتقال في CSS
    }
});

// تهيئة الحالة الافتراضية
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("telegramLinks").classList.add("visible");
    document.getElementById("emailLinks").classList.add("hidden");
});
