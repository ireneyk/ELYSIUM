// =================== SEARCH BAR & FILTERING =================== //
const searchInput = document.querySelector('[data-search-input]');
const specialistCards = document.querySelectorAll('[data-specialist-card]');

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    specialistCards.forEach(card => {
        const specialistName = card.dataset.specialist.toLowerCase();
        if (specialistName.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

// =================== INTERACTIVE MODAL =================== //
const modalOpenBtn = document.querySelector('[data-modal-target]');
const modalCloseBtn = document.querySelector('[data-close-modal]');
const modal = document.querySelector('#appointmentModal');

modalOpenBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show-modal');
    }, 10);
});

modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show-modal');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
});

const appointmentForm = document.getElementById('appointmentForm');
appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Appointment Submitted! This form is not connected to a backend yet.');
    modalCloseBtn.click();
});


// =================== SCROLL ANIMATION =================== //
const animatedElements = document.querySelectorAll('.slide-left, .slide-right, .slide-up');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));

// =================== DARK MODE TOGGLE =================== //
const toggleButton = document.querySelector('.dark-mode-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        toggleButton.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
}

toggleButton.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        toggleButton.querySelector('i').classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        toggleButton.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});