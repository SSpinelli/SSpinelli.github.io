function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(click) {
    click.preventDefault();
    const href = click.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  internalLinks.forEach((link) => link.addEventListener('click', scrollToSection));
}
initSmoothScroll();

function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll');

  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible) {
          section.classList.add('ativo');
        }
      })
    }
  }
  animaScroll()

  window.addEventListener('scroll', animaScroll);
}
initScrollAnimation();