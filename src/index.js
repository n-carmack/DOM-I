const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const headerNav = document.querySelector('nav')
headerNav.children[0].classList.add('italic')
headerNav.children[1].classList.add('italic')
headerNav.children[2].classList.add('italic')
headerNav.children[3].classList.add('italic')
headerNav.children[4].classList.add('italic')
headerNav.children[5].classList.add('italic')
headerNav.children[0].textContent = siteContent.nav['nav-item-1']
headerNav.children[1].textContent = siteContent.nav['nav-item-2']
headerNav.children[2].textContent = siteContent.nav['nav-item-3']
headerNav.children[3].textContent = siteContent.nav['nav-item-4']
headerNav.children[4].textContent = siteContent.nav['nav-item-5']
headerNav.children[5].textContent = siteContent.nav['nav-item-6']

const cta = document.querySelector('section.cta')
cta.children[0].textContent = siteContent.cta.h1
cta.children[1].textContent = siteContent.cta.button

const mainContent = document.querySelector('section.main-content')
mainContent.children[0].children[0].children[0].textContent = siteContent['main-content']['features-h4']
mainContent.children[0].children[0].children[1].textContent = siteContent['main-content']['features-content']
mainContent.children[0].children[1].children[0].textContent = siteContent['main-content']['about-h4']
mainContent.children[0].children[1].children[1].textContent = siteContent['main-content']['about-content']
mainContent.children[2].children[0].children[0].textContent = siteContent['main-content']['services-h4']
mainContent.children[2].children[0].children[1].textContent = siteContent['main-content']['services-content']
mainContent.children[2].children[1].children[0].textContent = siteContent['main-content']['product-h4']
mainContent.children[2].children[1].children[1].textContent = siteContent['main-content']['product-content']
mainContent.children[2].children[2].children[0].textContent = siteContent['main-content']['vision-h4']
mainContent.children[2].children[2].children[1].textContent = siteContent['main-content']['vision-content']

const contactSection = document.querySelector('section.contact')
contactSection.children[0].textContent = siteContent.contact['contact-h4']
contactSection.children[1].textContent = siteContent.contact.address
contactSection.children[2].textContent = siteContent.contact.phone
contactSection.children[3].textContent = siteContent.contact.email

const footerTag = document.querySelector('footer a')
footerTag.textContent = siteContent.footer.copyright
footerTag.classList.add('bold')

const logoImg = document.querySelector('#logo-img')
logoImg.src = siteContent.images['logo-img']
const ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent.images['cta-img']
const accentImg = document.querySelector('#middle-img')
accentImg.src = siteContent.images['accent-img']

