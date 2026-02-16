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