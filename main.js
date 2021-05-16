const nav = document.querySelector('nav');
const container = document.querySelector('.wrapper');
const lis = document.querySelectorAll('nav ul > li');

lis.forEach((x) => {
    x.addEventListener("click", () => {
        nav.className = '';
        container.classList.remove('change');
    });
});

const toggle = (x) => {
    nav.classList.toggle('show');
    x.classList.toggle('change');
}
