let currentIndex = 0;
let currentCategory = 'GRAPHISME'; // Catégorie par défaut

const categories = {
    'GRAPHISME': {
        images: [
            '../images/graphisme/bikerepair/coverbikerepair.png',
            '../images/graphisme/cofy/logocofy.jpg',
            '../images/graphisme/surftruck/coversurftruck.png',
            '../images/graphisme/logoprenom/cover_logoprenom.png',
            '../images/graphisme/coverateliercoiffure.png',
            '../images/sae202/cover_sae202.png',
        ],
        links: [
            '../html/pagebikerepair.html',
            '../html/pagecofy.html',
            '../html/pagesurftruck.html',
            '../html/pagelogoprenom.html',
            '../html/pageflyercoiffure.html',
            '../html/pagesae202.html',
        ]
    },
    'DÉVELOPPEMENT WEB': {
        images: [
            '../images/dev/PizzaJojo/coverpizzajojo.png',
            '../images/dev/Ecotracker/coverecotracker.png',
            '../images/dev/Billetterie/cover_billetterie.png',
        ],
        links: [
            '../html/pagepizzajojo.html',
            '../html/pageecotracker.html',
            '../html/pagebilletrie.html',
        ]
    },
    'MOTION DESIGN': {
        images: [
            '../images/pinkBackground.jpg',
            '../images/brownBackground.jpg',
            '../images/greyBackground.jpg'
        ],
        links: [
            '../html/page7.html',
            '../html/page8.html',
            '../html/page9.html'
        ]
    },
    'D': {
        images: [
            '../images/3D/Blender Logo.png',
            '../images/3d/projet2/cover2.png',
            '../images/3d/projet3/cover3.png',
        ],
        links: [
            '../html/pagetutoblender.html',
            '../html/pageprojet2.html',
            '../html/pageprojet3.html',
        ]
    },
    'COMMUNICATION': {
        images: [
            '../images/communication/cafélobodis/coverlobodis.png',
            '../images/communication/linkedin/coverlinkedin.png',
            '../images/communication/leriremedecin/coverleriremedecin.png',
        ],
        links: [
            '../html/pagelobodis.html',
            '../html/pagelinkedin.html',
            '../html/pageleriremedecin.html',
        ]
    },
    'AUDIOVISUEL': {
        images: [
            '../images/audiovisuel/filmnoir/coverfilmnoir.png',
            '../images/sae202/minia-trailer.png',
            '../images/limeBackground.jpg'
        ],
        links: [
            '../html/pagefilmnoir.html',
            '../html/pagefilmsae202.html',
            '../html/page15.html'
        ]
    }
};

function updateCarousel() {
    const carouselInner = document.getElementById('carouselInner');
    if (!carouselInner) return;

    carouselInner.innerHTML = ''; // Réinitialiser

    const categoryData = categories[currentCategory];
    if (!categoryData || categoryData.images.length === 0) {
        carouselInner.innerHTML = '<p class="no-projects">Aucun projet disponible dans cette catégorie.</p>';
        return;
    }

    categoryData.images.forEach((imageSrc, index) => {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        item.innerHTML = `
            <a href="${categoryData.links[index]}">
                <img class="carousel-image" src="${imageSrc}" alt="Projet ${index + 1}">
            </a>`;
        carouselInner.appendChild(item);
    });

    const translateX = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${translateX}%)`;
}

function previousProject() {
    const totalItems = categories[currentCategory].images.length;
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

function nextProject() {
    const totalItems = categories[currentCategory].images.length;
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

document.addEventListener("DOMContentLoaded", () => {
    updateCarousel();
});

function changeCategoryTitle(event) {
    event.preventDefault();
    const category = event.target.getAttribute('data-category');
    if (!category || !categories[category]) return;

    currentCategory = category;
    document.getElementById('carouselTitle').textContent = currentCategory;
    currentIndex = 0;
    updateCarousel();

    const carouselSection = document.getElementById('carousel');
    if (carouselSection) {
        carouselSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleMenu() {
    const menu = document.getElementById('hamburgerMenu');
    const body = document.body;

    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        body.classList.remove('no-scroll');
    } else {
        menu.style.display = 'flex';
        body.classList.add('no-scroll');
    }
}
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.img-link');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const src = link.querySelector('img').getAttribute('src');
      lightboxImg.src = src;
      lightbox.style.display = 'flex';
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
});