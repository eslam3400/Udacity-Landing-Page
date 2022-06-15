const eNav = document.querySelector('#navbar__list');
const eSec = document.querySelectorAll('section')

const helloWorld = document.getElementById('hello-world');
setInterval(() => {
    const content = "console.log('Hello-World!')";
    const contentLength = content.length;
    let counter = 0;
    helloWorld.innerHTML = '';
    setInterval(() => {
        helloWorld.innerText = helloWorld.innerText.concat(content.charAt(counter));
        counter++;
    }, 200);
}, 6000);

function makeNav() {
    for (let link of eSec) {
        let link = document.createElement('li');
        link.className = 'menu__link';
        link.dataset.nav = link.id;
        link.innerText = link.dataset.nav;
        eNav.appendChild(link);
    };
};

function goToSec() {
    eNav.addEventListener('click', function (event) {
        const target = document.querySelector('#' + event.target.dataset.nav)
        target.scrollIntoView();
    });
};

function activeElement() {
    endSec = eSec[0];
    mVal = 1000000;
    for (section of eSec) {
        let border = section.getBoundingClientRect();
        if (border.top > -300 & border.top < mVal) {
            mVal = border.top;
            endSec = section;
        };
    };
    return endSec;
};

function makeActive() {
    window.addEventListener('scroll', function (event) {
        let section = activeElement();
        section.classList.add('active-class');
        for (let sSection of eSec) {
            if (sSection.id != sSection.id & sSection.classList.contains('active-class')) {
                sSection.classList.remove('active-class');
            }
        }
        const activeSec = document.querySelector('li[data-nav="' + section.id + '"]');
        activeSec.classList.add('active__link');
        const menuLink = document.querySelectorAll('.menu__link');
        for (let link of menuLink) {
            console.log(link);
            if (link.dataset.nav != activeSec.dataset.nav & link.classList.contains('active__link')) {
                link.classList.remove('active__link');
            }
        };
    });
};

makeNav();
goToSec();
makeActive();
