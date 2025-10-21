document.addEventListener("DOMContentLoaded", () => {
    const telegramData = [
        { href:"https://t.me/xBET_MENA_EGY", text:"1xBET Egypt", flag:"img/egy.png" },
        { href:"https://t.me/xBET_MENA_MAR", text:"1xBET Morocco", flag:"img/mar.png" },
        { href:"https://t.me/xBET_MENA_MRT", text:"1xBET Mauritania", flag:"img/mrt.png" },
        { href:"https://t.me/xBET_MENA_IRQ", text:"1xBET Iraq", flag:"img/irq.png" },
        { href:"https://t.me/xBET_MENA_JOR", text:"1xBET Jordan", flag:"img/jor.png" },
        { href:"https://t.me/xBET_MENA_DZA", text:"1xBET Algeria", flag:"img/dza.png" }
    ];
    const telegramLinks = document.getElementById("telegram-links");
    telegramData.forEach(item => {
        const a = document.createElement("a");
        a.href = item.href;
        a.target = "_blank";
        a.className = "tg-link";
        a.innerHTML = `<img src="${item.flag}" alt="flag" width="24"> ${item.text}`;
        telegramLinks.appendChild(a);
    });

    // نسخ البروموكود
    const copyBtn = document.getElementById("copy-promocode-btn");
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText("1XARABI").then(() => {
            showToast("تم النسخ!");
        });
    });

    // Scroll to top
    const scrollBtn = document.querySelector(".scroll-top-btn");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) scrollBtn.classList.add("active");
        else scrollBtn.classList.remove("active");
    });
    scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Toast
    function showToast(msg) {
        const toast = document.getElementById("toast");
        toast.textContent = msg;
        toast.style.display = "block";
        setTimeout(()=>{toast.style.display="none";},2000);
    }

    // Theme toggle
    const themeBtn = document.querySelector(".theme-toggle");
    themeBtn.addEventListener("click", ()=>{
        const current = document.documentElement.getAttribute("data-theme") || "light";
        const newTheme = current === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
    });
});
