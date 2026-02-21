/* GSAP Animationen */
const tl = gsap.timeline();

tl.fromTo("header",
    { opacity: 0 },
    { duration: 3, opacity: 1, ease: "power2.out" }
)
    .fromTo(".nav_links",
        { opacity: 0 },
        { duration: 3, opacity: 1, ease: "power2.out" },
        "-=3"
    );

// Select all logo parts
const logoParts = document.querySelectorAll(".logo-part");

// Convert NodeList to Array
const logoPartsArray = Array.from(logoParts);

// Sort them based on their horizontal position (left to right)
logoPartsArray.sort((a, b) => {
    const rectA = a.getBoundingClientRect();
    const rectB = b.getBoundingClientRect();
    return rectA.left - rectB.left;
});

// Animate the sorted parts
gsap.fromTo(logoPartsArray,
    { opacity: 0, y: 50 },
    {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5 // Start a bit after the initial load or overlapping with other animations
    }
);

/* Scroll-Effekte */
window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    if (window.innerWidth > 800) {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    } else {
        nav.classList.remove("scrolled");
    }
});

/* VOLLSTÄNDIGES TRANSLATIONS SYSTEM */
const translations = {
    'de': {
        // Hero
        'hero-tagline': 'MADE IN GERMANY \u00a0·\u00a0 SEIT JAHRZEHNTEN',

        // Navigation
        'nav-products': 'Produkte',
        'nav-about': 'Über uns',
        'nav-team': 'Team',
        'nav-contact': 'Kontakt',

        // Products Section
        'prod-title': 'Produkte',
        'prod-subtitle': 'PRIVATE LABEL & EIGENMARKE',
        'prod-p1': 'Sie träumen von Ihrer eigenen Haarkosmetikserie? Wir lassen diesen Traum wahr werden. Als Experten für Private Label und Eigenmarken bieten wir Ihnen den Full-Service: Von der ersten Idee über die Rezepturentwicklung bis hin zum fertigen Design.',
        'prod-p2': 'Unsere Produkte stehen für höchste Qualität „Made in Germany“. Ob exklusive Haarfarben, Pflegeprodukte oder Styling-Serien – wir entwickeln maßgeschneiderte Konzepte, die genau zu Ihrer Marke passen.',
        'prod-link': 'Produktübersicht DE',
        'prod-link2': 'Lohnherstellung DE',

        // Trust Bar
        'trust-years': 'Jahre Erfahrung',
        'trust-made': 'Made in Germany',
        'trust-cert': 'Zertifiziert',

        // KERaCIN carousel labels
        'prod-k1-label': 'Seit 1979',
        'prod-k2-label': 'Das Sortiment',
        'prod-k3-label': 'ArgaOil Linie',

        // Contact form (aliases matching HTML data-keys)
        'e-mail': 'E-Mail',
        'nachricht': 'Nachricht',

        // About Section
        'about-title': 'Über uns',
        'about-subtitle': 'TRADITION TRIFFT INNOVATION',
        'about-p1': 'Seit Jahrzehnten ist Dreiz Cosmetics ein verlässlicher Partner für das Friseurhandwerk. Unser Familienunternehmen verbindet handwerkliche Tradition mit modernster Forschung und Entwicklung.',
        'about-p2': 'In unseren eigenen Laboren entwickeln wir Rezepturen, die höchsten Ansprüchen gerecht werden. Dabei legen wir besonderen Wert auf Nachhaltigkeit, Wirksamkeit und die individuellen Wünsche unserer Kunden.',
        'about-link': 'Infomappe DE',

        // Team Section
        'team-title': 'UNSER TEAM',
        'team-name-1': 'Marcel Dreiz',
        'team-pos-1': 'Geschäftsführung',
        'team-name-2': 'Martin Schaal',
        'team-pos-2': 'Produktionsleitung',
        'team-name-3': 'Eugen Tietz',
        'team-pos-3': 'Labor',
        'team-name-4': 'Miriam Adam',
        'team-pos-4': 'Versand',

        // Contact Section
        'cont-title': 'KONTAKT',
        'cont-address': 'Dreiz Cosmetic GMBH<br>Albert Einstein Straße 3<br>73529 Schwäbisch Gmünd<br>Deutschland',
        'cont-phone': 'Telefon',
        'cont-fax': 'Telefax',
        'cont-email': 'E-mail:',
        'name': 'Name',
        'email': 'E-Mail',
        'message': 'Nachricht',
        'senden': 'Senden',
        'cont-hours-title': 'ÖFFNUNGSZEITEN',
        'cont-hours-days': 'Mo.-Do. 8:30 - 12:00 Uhr<br>13:00 - 16:00 Uhr<br>Fr. 8:00 - 12:00 Uhr',

        // Footer
        'foot-rights': '© 2026 DREIZ Cosmetics GMBH & Co. KG - Alle Rechte vorbehalten - ',
        'foot-imprint': 'Impressum',
        'foot-privacy': 'Datenschutz',
        'foot-agb': 'AGB',
        'foot-imprint-link': 'impressum.html',
        'foot-privacy-link': 'datenschutz.html',
        'foot-agb-link': 'agb.html',
        'AGB-Download-link': 'AGB_DE',

        // KERaCIN Carousel
        'keracin-title': 'System KERaCIN',
        'keracin-subtitle': 'PROFESSIONAL HAIR & SKIN CARE — GERMANY',
        'prod-k1': 'Professionelle Haar- & Hautpflege',
        'prod-k1d': 'Mit echtem Arganöl aus Marokko. Intensive Feuchtigkeit, brillanter Glanz und spürbare Pflege für beanspruchtes Haar.',
        'prod-k2': 'Die Vollständige Kollektion',
        'prod-k2d': 'Von Styling bis Pflege — Wet Gel, Haarlack, Glanz Styler, Protein Mousse, Haarspitzen Repair und mehr.',
        'prod-k3': 'Haarkur · Shampoo · 2-Phasen Kur',
        'prod-k3d': 'Professionelle ArgaOil Pflegeroutine für glänzendes, geschütztes Haar — starker Halt, langanhaltend und pflegend.',
        'prod-k4': 'ArgaOil Pflegefluid',
        'prod-k4d': 'Mit echtem Arganöl aus Marokko. 30 ml Pflegekonzentrat für außergewöhnlichen Glanz und Geschmeidigkeit.',

    },

    'en': {
        // Hero
        'hero-tagline': 'MADE IN GERMANY \u00a0·\u00a0 FOR DECADES',

        // Navigation
        'nav-products': 'Products',
        'nav-about': 'About Us',
        'nav-team': 'Team',
        'nav-contact': 'Contact',

        // Products Section
        'prod-title': 'Products',
        'prod-subtitle': 'PRIVATE LABEL & OWN BRAND',
        'prod-p1': 'Do you dream of your own hair cosmetics line? We make this dream come true. As experts in private labels and own brands, we offer full service: from the initial idea and formula development to the finished design.',
        'prod-p2': 'Our products stand for the highest quality "Made in Germany". Whether exclusive hair colors, care products, or styling series – we develop tailor-made concepts that fit your brand perfectly.',
        'prod-link': 'Product Overview DE',
        'prod-link2': 'Contract Manufacturing DE',

        // Trust Bar
        'trust-years': 'Years of Experience',
        'trust-made': 'Made in Germany',
        'trust-cert': 'Certified',

        // KERaCIN carousel labels
        'prod-k1-label': 'Since 1979',
        'prod-k2-label': 'The Range',
        'prod-k3-label': 'ArgaOil Line',

        // Contact form (aliases matching HTML data-keys)
        'e-mail': 'E-Mail',
        'nachricht': 'Message',

        // About Section
        'about-title': 'About Us',
        'about-subtitle': 'TRADITION MEETS INNOVATION',
        'about-p1': 'For decades, Dreiz Cosmetics has been a reliable partner for the hairdressing trade. Our family business combines traditional craftsmanship with state-of-the-art research and development.',
        'about-p2': 'In our own laboratories, we develop formulas that meet the highest standards. We place particular emphasis on sustainability, effectiveness, and the individual wishes of our customers.',
        'about-link': 'Information Pack DE',
        "about-link2": 'Information-Pack EN',

        // Team Section
        'team-title': 'OUR TEAM',
        'team-name-1': 'Marcel Dreiz',
        'team-pos-1': 'Management',
        'team-name-2': 'Martin Schaal',
        'team-pos-2': 'Production Management',
        'team-name-3': 'Eugen Tietz',
        'team-pos-3': 'Laboratory',
        'team-name-4': 'Miriam Adam',
        'team-pos-4': 'Shipping',

        // Contact Section
        'cont-title': 'CONTACT',
        'cont-address': 'Dreiz Cosmetic GMBH<br>Albert Einstein Street 3<br>73529 Schwaebisch Gmuend<br>Germany',
        'cont-phone': 'Phone',
        'cont-fax': 'Fax',
        'cont-email': 'E-mail:',
        'name': 'Name',
        'email': 'E-Mail',
        'e-mail': 'E-Mail',
        'message': 'Message',
        'nachricht': 'Message',
        'senden': 'Send',
        'cont-hours-title': 'OPENING HOURS',
        'cont-hours-days': 'Mon.-Thu. 8:30 am - 12:00 pm<br>1:00 pm - 4:00 pm<br>Fri. 8:00 am - 12:00 pm',

        // Footer
        'foot-rights': '© 2026 DREIZ Cosmetics GMBH & Co. KG - All rights reserved - ',
        'foot-imprint': 'Imprint',
        'foot-privacy': 'Privacy Policy',
        'foot-agb': 'Terms and Conditions',
        'foot-imprint-link': 'imprint.html',
        'foot-privacy-link': 'privacy.html',
        'foot-agb-link': 'terms.html',
        'AGB-Download-link': 'AGB_DE',

        // KERaCIN Carousel
        'keracin-title': 'System KERaCIN',
        'keracin-subtitle': 'PROFESSIONAL HAIR & SKIN CARE — GERMANY',
        'prod-k1': 'Professional Hair & Skin Care',
        'prod-k1d': 'With genuine Argan Oil from Morocco. Intensive moisture, brilliant shine and lasting care for stressed hair.',
        'prod-k2': 'The Complete Collection',
        'prod-k2d': 'From styling to care — Wet Gel, Hair Lacquer, Shine Styler, Protein Mousse, Split End Repair and more.',
        'prod-k3': 'Hair Treatment · Shampoo · 2-Phase Conditioner',
        'prod-k3d': 'Professional ArgaOil care routine for glossy, protected hair — strong hold, long-lasting and nourishing.',
        'prod-k4': 'ArgaOil Care Fluid',
        'prod-k4d': 'With genuine Argan Oil from Morocco. 30 ml care concentrate for exceptional shine and smoothness.',
    }
};

const langLinks = document.querySelectorAll('.lang-link');

langLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const lang = link.textContent.trim().toLowerCase();

        langLinks.forEach(l => {
            l.classList.remove('active');
            l.setAttribute('aria-current', 'false');
        });
        link.classList.add('active');
        link.setAttribute('aria-current', 'true');

        document.documentElement.lang = lang;

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');

            if (translations[lang] && translations[lang][key]) {
                const translation = translations[lang][key];

                // Special handling for inputs and textareas
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.setAttribute('placeholder', translation);
                    element.setAttribute('aria-label', translation);
                }
                // Handling for links with specific logic
                else if (key.endsWith('-link')) {
                    element.setAttribute('href', translation);
                }
                // Normal text content update
                else {
                    element.innerHTML = translation;
                }
            }
        });

        // Update burger menu aria-label if needed (optional but good practice)
        const burgerLabel = lang === 'de' ? 'Menü öffnen' : 'Open menu';
        document.getElementById('burger').setAttribute('aria-label', burgerLabel);

    });
});

// Initialisierung beim ersten Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = document.documentElement.lang.toLowerCase() || 'de';
    langLinks.forEach(link => {
        if (link.textContent.trim().toLowerCase() === currentLang) {
            link.classList.add('active');
        }
    });
});

const burger = document.getElementById('burger');
const navMenu = document.querySelector('.nav-links-wrapper');
const navLinksItems = document.querySelectorAll('.nav_links li a');

const toggleMenu = () => {
    const isOpen = burger.classList.toggle('open');
    navMenu.classList.toggle('active');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
};

// Öffnen / Schließen bei Klick auf Burger
burger.addEventListener('click', toggleMenu);

// Auch Tastatursteuerung (Enter/Leertaste) ermöglichen
burger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
    }
});

// Menü schließen, wenn ein Link geklickt wird (wichtig!)
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        burger.classList.remove('open');
        navMenu.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
    });
});


/* =====================================================
   KERACIN PRODUCT CAROUSEL
   ===================================================== */
(function () {
    const track = document.getElementById('carouselTrack');
    const slides = track ? Array.from(track.querySelectorAll('.carousel-slide')) : [];
    const dots = Array.from(document.querySelectorAll('.carousel-dot'));
    const btnPrev = document.getElementById('carouselPrev');
    const btnNext = document.getElementById('carouselNext');

    if (!track || slides.length === 0) return;

    let current = 0;
    let autoTimer;
    const DELAY = 5000;

    function goTo(index) {
        // Wrap around
        index = (index + slides.length) % slides.length;

        // Remove active from previous
        slides[current].classList.remove('is-active');
        dots[current].classList.remove('active');
        dots[current].setAttribute('aria-selected', 'false');

        current = index;

        // Move track
        track.style.transform = `translateX(-${current * 100}%)`;

        // Activate new slide + dot
        slides[current].classList.add('is-active');
        dots[current].classList.add('active');
        dots[current].setAttribute('aria-selected', 'true');
    }

    function startAuto() {
        clearInterval(autoTimer);
        autoTimer = setInterval(() => goTo(current + 1), DELAY);
    }

    function resetAuto() {
        startAuto();
    }

    // Initialise first slide
    slides[0].classList.add('is-active');

    // Arrow buttons
    btnPrev.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
    btnNext.addEventListener('click', () => { goTo(current + 1); resetAuto(); });

    // Dot buttons
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => { goTo(i); resetAuto(); });
    });

    // Keyboard support (when section is focused)
    document.addEventListener('keydown', (e) => {
        const section = document.getElementById('keracin');
        if (!section || !section.matches(':hover')) return;
        if (e.key === 'ArrowLeft') { goTo(current - 1); resetAuto(); }
        if (e.key === 'ArrowRight') { goTo(current + 1); resetAuto(); }
    });

    // Touch / swipe support
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) { goTo(dx < 0 ? current + 1 : current - 1); resetAuto(); }
    });

    // Pause on hover
    const wrapper = document.querySelector('.keracin-section');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', () => clearInterval(autoTimer));
        wrapper.addEventListener('mouseleave', startAuto);
    }

    startAuto();
})();