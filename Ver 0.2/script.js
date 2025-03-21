const emailLinks = {
    "egypt": "mailto:processing@eg.1xbet-team.com",
    "morocco": "mailto:processing-morocco@1xbet-team.com",
    "mauritania": "mailto:processing-iq@1xbet-team.com",
    "iraq": "mailto:processing-iq@1xbet-team.com",
    "jordan": "mailto:jordan@example.com",
    "algeria": "mailto:processing-algeria@1xbet-team.com",
    "tunisia": "mailto:processing-tunisia@1xbet-team.com",
    "djibouti": "mailto:processing-djibouti@1xbet-team.com",
    "other-arab": "mailto:processing-ar@1xbet-team.com"
};

let isEmail = false;

function switchToEmail() {
    isEmail = !isEmail;
    const toggleButton = document.getElementById('toggleBtn');
    toggleButton.textContent = isEmail ? 'راسلنا عبر بوت تلغرام' : 'راسلنا عبر البريد';

    const links = document.querySelectorAll('.tg-link');
    links.forEach(link => {
        const country = link.getAttribute('data-country');
        if (isEmail) {
            link.href = emailLinks[country];
        } else {
            link.href = `https://t.me/1xbet_${country}`;
        }
    });
}
