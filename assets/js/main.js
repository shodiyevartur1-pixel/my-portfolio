gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".text-gradient").forEach((span) => {
  gsap.to(span, {
    backgroundSize: "100% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: span,
      start: "top bottom",
      end: "top center",
      scrub: true,
    }
  });
});

// ===================== change background header ======================== //
const scrollHeader = () => {
  const header = document.getElementById('header');
  if (!header) return;

  window.scrollY >= 20
    ? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header');
};

window.addEventListener("scroll", scrollHeader);



// =============== SCROLL AKTIVE LINK =============== //
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    // window.pageYOffset o'rniga window.scrollY ishlatamiz
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              // Nav balandligi 4.5rem bo'lgani uchun 72-80 atrofida chegara qo'yamiz
              sectionTop = current.offsetTop - 100, 
              sectionId = current.getAttribute('id'),
              /* Sizda klass .nav-link, shuning uchun selektorni 
                 aynan shu klassga qarab qidiramiz
              */
              sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

        if (sectionClass) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionClass.classList.add('active-link');
            } else {
                sectionClass.classList.remove('active-link');
            }
        }
    });
};

window.addEventListener('scroll', scrollActive);

// =============== DARK THEME =============== //
window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-theme'); // Light mode yoqiladi
      toggleBtn.classList.remove('ri-sun-line');  // Quyoshni olib tashlash
      toggleBtn.classList.add('ri-moon-line');    // Oy belgisini qo'yish
    } else {
      document.body.classList.remove('light-theme'); // Light modeni o'chirish (Dark bo'ladi)
      toggleBtn.classList.add('ri-sun-line');        // Quyosh belgisini qo'yish
      toggleBtn.classList.remove('ri-moon-line');     // Oyni olib tashlash
    }
  }

  toggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-theme');
    // Agar hozir light bo'lsa -> dark ga o't, aks holda -> light ga
    applyTheme(isLight ? 'dark' : 'light');
  });
});

// =============== aktive ================ //
const linkWork = document.querySelectorAll('.work-item');

function activeWork() {
  linkWork.forEach((a) => {
      a.classList.remove('active-work');
  });

  this.classList.add('active-work')
}

linkWork.forEach((a) => a.addEventListener('click', activeWork))


// ===================== EMAIL JS ======================== //
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactMessage = document.getElementById('contact-message');
const message = document.getElementById('message');

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === '' ||
    contactEmail.value === '' ||
    contactMessage.value === ''
  ) {
    message.textContent = 'Write all the input fields';

    setTimeout(() => {
      message.textContent = '';
    }, 3000);

  } else {
    emailjs
      .sendForm(
        'service_fohusjo',
        'template_alnpjje',
        '#contact-form',
        '_tf6FOLEnkKFWk6lN'
      )
      .then(
        () => {
          message.textContent = 'Message sent ✔';

            setTimeout(() => {
              message.textContent = '';
            }, 5000);
        },
        (error) => {
          alert('OOPs! SOMETHING WENT WRONG...', error);
        }
      );

    contactName.value = '';
    contactEmail.value = '';
    contactMessage.value = '';

  }
};

contactForm.addEventListener('submit', sendEmail);



// ===================== MIXITUP ==================== //
var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});