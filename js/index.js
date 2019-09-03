const siteContent = {
    "nav": {

        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },

    "cta": {

        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },

    "main-content": {

        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
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

        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//content update

//navigation
let navButtons = document.querySelectorAll("a");

navButtons[0].innerText = siteContent["nav"]["nav-item-1"];
navButtons[1].innerText = siteContent["nav"]["nav-item-2"];
navButtons[2].innerText = siteContent["nav"]["nav-item-3"];
navButtons[3].innerText = siteContent["nav"]["nav-item-4"];
navButtons[4].innerText = siteContent["nav"]["nav-item-5"];
navButtons[5].innerText = siteContent["nav"]["nav-item-6"];

//changed nav color to green
navButtons.forEach(element => element.style.color = "green")

//cta section
let logoHeader = document.getElementById("cta-img");
logoHeader.setAttribute('src', siteContent["cta"]["img-src"])

let ctaSection = document.querySelector("h1")
ctaSection.innerText = siteContent["cta"]["h1"];

let theButton = document.querySelector("button")
theButton.innerHTML = siteContent["cta"]["button"];

//main-content section
let mainSection = document.querySelectorAll("h4")
mainSection[0].innerHTML = siteContent["main-content"]["features-h4"];
mainSection[1].innerHTML = siteContent["main-content"]["about-h4"];
mainSection[2].innerHTML = siteContent["main-content"]["services-h4"];
mainSection[3].innerHTML = siteContent["main-content"]["product-h4"];
mainSection[4].innerHTML = siteContent["main-content"]["vision-h4"];
mainSection[5].innerHTML = siteContent["contact"]["contact-h4"];

//mid-section image
let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//main-content paragraphs
let pElement = document.querySelectorAll("p")
pElement[0].innerHTML = siteContent["main-content"]["features-content"];
pElement[1].innerHTML = siteContent["main-content"]["about-content"];
pElement[2].innerHTML = siteContent["main-content"]["services-content"];
pElement[3].innerHTML = siteContent["main-content"]["product-content"];
pElement[4].innerHTML = siteContent["main-content"]["vision-content"];
pElement[5].innerHTML = siteContent["contact"]["address"];
pElement[6].innerHTML = siteContent["contact"]["phone"];
pElement[7].innerHTML = siteContent["contact"]["email"];

//footer
pElement[8].innerHTML = siteContent["footer"]["copyright"];

//adding elements with .appendChild() and .prepend()
const newQuip = document.createElement("p");
const footerQuip = document.querySelector("footer");
footerQuip.appendChild(newQuip);
newQuip.innerHTML = "**Gris Edited This**";

const newNavButton = document.createElement("a");
const navButton = document.querySelector("nav");
navButton.prepend(newNavButton);
newNavButton.innerText = "Home";
newNavButton.style.color = "green";

//simple stretches
let navColor = document.querySelector('nav');
navColor.addEventListener('click', (event) => {
    navColor.style.background = "silver";
    item.style.transition = 'transform 0.5s';
})

const scaleNavUp = document.querySelectorAll('nav');
scaleNavUp.forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.5s';
    })
})

const scaleNavDown = document.querySelectorAll('nav');
scaleNavUp.forEach(item => {
    item.addEventListener('mouseleave', event => {
        item.style.transform = 'scale(1)';
        item.style.transition = 'transform 0.5s';
    })
})

const scaleButtonUp = document.querySelectorAll('button');
scaleButtonUp.forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.5s';
    })
})

const scaleButtonDown = document.querySelectorAll('button');
scaleButtonUp.forEach(item => {
    item.addEventListener('mouseleave', event => {
        item.style.transform = 'scale(1)';
        item.style.transition = 'transform 0.5s';
    })
})