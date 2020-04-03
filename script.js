const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

const tocLinks = document.querySelectorAll('.toc__item a');
let selected = document.querySelector('.selected');

let callback = (entries) => {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      let sectionId = entry.target.id;

      for (let i = 0; i < tocLinks.length; i++) {
        const link = tocLinks[i];

        if (link.getAttribute('href') === ('#' + sectionId)) {
          selected.classList.remove('selected');
          link.classList.add('selected');
          selected = link;
        }
      }
    }
  })
}

const observer = new IntersectionObserver(callback, options);

const sections = document.querySelectorAll('section');
sections.forEach(section => observer.observe(section));