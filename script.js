document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const floatingNav = document.getElementById("navigation"); // links at bottom

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    mobileNav.classList.toggle("active");

    // ✅ Check if menu is open, then hide/show floating nav
    if (mobileNav.classList.contains("active")) {
      floatingNav.style.display = "none"; // hide bottom nav
      document.body.style.overflow = "hidden";
    } else {
      floatingNav.style.display = "flex"; // show bottom nav
      document.body.style.overflow = "auto";
    }
  });

  // ✅ NEW: Close menu when a link is clicked inside it
  const menuLinks = mobileNav.querySelectorAll("a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      toggle.classList.remove("active");
      floatingNav.style.display = "flex";
      document.body.style.overflow = "auto";
    });
  });
});













/* Dynamic Intensity Based on Scroll Speed */
document.addEventListener('scroll', function() {
  let lastScrollTop = 0;
  let scrollSpeed = 0;
  
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollSpeed = Math.abs(scrollTop - lastScrollTop);
  lastScrollTop = scrollTop;
  
  document.documentElement.style.setProperty(
    '--glow-intensity', 
    Math.min(1, 0.8 + scrollSpeed / 100)
  );
}, {passive: true});





document.addEventListener('DOMContentLoaded', function() {
    // Typewriter Effect
    const dynamicText = document.getElementById('dynamicText');
        const words = [
          "Full-Stack Apps",
          "Laravel Backend",
          "React Frontend",
          "RESTful APIs",
          "Modern JavaScript",
          "Clean Code",
          "Responsive Design",
          "Tailwind Styling",
          "MySQL Databases",
          "Secure Auth",
          "Admin Dashboards",
          "App Optimization",
          "Azure Deployment",
          "Cloud Solutions",
          "Python Development",
          "Python APIs",
          "Python CLI",
          "Automation Scripts",
          "Cybersecurity Basics",
          "Secure Coding",
          "Threat Detection",
          "Digital Transformation",
          "Modern Workflows",
          "Scalable Systems",
          "Bug Fixing",
          "API Integration",
          "Cross-Platform",
          "UI Animation",
          "Git Workflow",
          "GitHub Projects",
          "Mobile-First",
          "Dynamic Interfaces",
          "Problem Solving",
          "Reusable Components",
          "User Experience",
          "Production Ready"
        ];


    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    
    function typeEffect() {
        const currentWord = words[wordIndex];
        
        dynamicText.textContent = currentWord.substring(0, charIndex);
        
        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            typingSpeed = 100;
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            typingSpeed = 50;
        } else {
            isDeleting = !isDeleting;
            wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
            typingSpeed = isDeleting ? 2000 : 500;
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    
    // Start the animation
    typeEffect();

    // Tech Stack Animation
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in');
    });
});



// ----------------------------------------------------------------------------------------------------------------------------------------------



// Add 3D tilt effect to profile image
const profileCard = document.querySelector('.profile-image-wrapper');
if (profileCard) {
  profileCard.addEventListener('mousemove', (e) => {
    const x = e.clientX - profileCard.getBoundingClientRect().left;
    const y = e.clientY - profileCard.getBoundingClientRect().top;
    const centerX = profileCard.offsetWidth / 2;
    const centerY = profileCard.offsetHeight / 2;
    const angleX = (y - centerY) / 20;
    const angleY = (centerX - x) / 20;
    
    profileCard.style.transform = `translateY(-10px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  });

  profileCard.addEventListener('mouseleave', () => {
    profileCard.style.transform = 'translateY(-10px) rotateY(15deg)';
  });
}



// ----------------------------------------------------------------------------------------------------------------------------------------


// Animate connections on hover
document.querySelectorAll('.tech-planet').forEach(planet => {
    planet.addEventListener('mouseenter', () => {
      const index = planet.getAttribute('style').match(/var\(--i:(\d+)\)/)[1];
      const connections = document.querySelectorAll('.connection');
      
      if (connections[index - 1]) {
        const planetRect = planet.getBoundingClientRect();
        const galaxyRect = document.querySelector('.tech-galaxy').getBoundingClientRect();
        const coreX = galaxyRect.width / 2;
        const coreY = galaxyRect.height / 2;
        const planetX = planetRect.left + planetRect.width/2 - galaxyRect.left;
        const planetY = planetRect.top + planetRect.height/2 - galaxyRect.top;
        
        connections[index - 1].setAttribute('x2', planetX);
        connections[index - 1].setAttribute('y2', planetY);
        connections[index - 1].style.stroke = 'rgba(156, 39, 176, 0.6)';
        connections[index - 1].style.strokeWidth = '2';
      }
    });
    
    planet.addEventListener('mouseleave', () => {
      const index = planet.getAttribute('style').match(/var\(--i:(\d+)\)/)[1];
      const connection = document.querySelector(`.connection:nth-child(${index})`);
      if (connection) {
        connection.style.stroke = 'rgba(156, 39, 176, 0.2)';
        connection.style.strokeWidth = '1';
      }
    });
  });
  





  // Initialize constellation lines
function initConstellation() {
  const nodes = document.querySelectorAll('.constellation-node');
  const paths = document.querySelectorAll('.line');
  const connections = [
    [0, 4], [1, 4], [2, 4], [3, 4], [4, 5]
  ];

  connections.forEach(([start, end], i) => {
    if (paths[i] && nodes[start] && nodes[end]) {
      const startNode = nodes[start].getBoundingClientRect();
      const endNode = nodes[end].getBoundingClientRect();
      const container = document.querySelector('.tech-constellation').getBoundingClientRect();
      
      const startX = startNode.left + startNode.width/2 - container.left;
      const startY = startNode.top + startNode.height/2 - container.top;
      const endX = endNode.left + endNode.width/2 - container.left;
      const endY = endNode.top + endNode.height/2 - container.top;
      
      paths[i].setAttribute('d', `M${startX},${startY} C${(startX+endX)/2},${startY} ${(startX+endX)/2},${endY} ${endX},${endY}`);
    }
  });
}

// Call on load and resize
window.addEventListener('load', initConstellation);
window.addEventListener('resize', initConstellation);

// Add hover effects
document.querySelectorAll('.constellation-node').forEach(node => {
  node.addEventListener('mouseenter', () => {
    const tech = node.getAttribute('data-tech');
    document.querySelectorAll('.line').forEach(line => {
      if (line.getAttribute('data-tech') === tech) {
        line.style.stroke = 'rgba(156, 39, 176, 0.7)';
        line.style.strokeWidth = '2';
      }
    });
  });
  
  node.addEventListener('mouseleave', () => {
    document.querySelectorAll('.line').forEach(line => {
      line.style.stroke = 'rgba(156, 39, 176, 0.2)';
      line.style.strokeWidth = '1';
    });
  });
});





// Slideshow for project 1

let currentSlide = 0;
const slides = document.querySelectorAll('#project-slideshow1 img');
function rotateSlides() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
  setTimeout(rotateSlides, 3000); // Change every 3 seconds
}
if (slides.length > 0) {
  setTimeout(rotateSlides, 3000);
}



// Slideshow for project 2
let currentSlide2 = 0;
const slides2 = document.querySelectorAll('#project-slideshow2 img');
function rotateSlides2() {
  slides2[currentSlide2].style.opacity = 0;
  currentSlide2 = (currentSlide2 + 1) % slides2.length;
  slides2[currentSlide2].style.opacity = 1;
  setTimeout(rotateSlides2, 3000); // Change every 3 seconds
}
if (slides2.length > 0) {
  setTimeout(rotateSlides2, 3000);
}



// Slideshow for  project 3
let currentSlide3 = 0;
const slides3 = document.querySelectorAll("#project-slideshow3 img");
function rotateSlides3() {
  slides3[currentSlide3].style.opacity = 0;
  currentSlide3 = (currentSlide3 + 1) % slides3.length;
  slides3[currentSlide3].style.opacity = 1;
  setTimeout(rotateSlides3, 3000); // Change every 3 seconds
}
if (slides3.length > 0) {
  setTimeout(rotateSlides3, 3000);
}



// Slideshow for  project 4
let currentSlide4 = 0;
const slides4 = document.querySelectorAll("#project-slideshow4 img");
function rotateSlides4() {
  slides4[currentSlide4].style.opacity = 0;
  currentSlide4 = (currentSlide4 + 1) % slides4.length;
  slides4[currentSlide4].style.opacity = 1;
  setTimeout(rotateSlides4, 3000); // Change every 3 seconds
}
if (slides4.length > 0) {
  setTimeout(rotateSlides4, 3000);
}




// Slideshow for  project 5
let currentSlide5 = 0;
const slides5 = document.querySelectorAll("#project-slideshow5 img");
function rotateSlides5() {
  slides5[currentSlide5].style.opacity = 0;
  currentSlide5 = (currentSlide5 + 1) % slides5.length;
  slides5[currentSlide5].style.opacity = 1;
  setTimeout(rotateSlides5, 3000); // Change every 3 seconds
}
if (slides5.length > 0) {
  setTimeout(rotateSlides5, 3000);
}




// Slideshow for  project 6
let currentSlide6 = 0;
const slides6 = document.querySelectorAll("#project-slideshow6 img");
function rotateSlides6() {
  slides6[currentSlide6].style.opacity = 0;
  currentSlide6 = (currentSlide6 + 1) % slides6.length;
  slides6[currentSlide6].style.opacity = 1;
  setTimeout(rotateSlides6, 3000); // Change every 3 seconds
}
if (slides6.length > 0) {
  setTimeout(rotateSlides6, 3000);
}





// Slideshow for  project 7
let currentSlide7 = 0;
const slides7 = document.querySelectorAll("#project-slideshow7 img");
function rotateSlides7() {
  slides7[currentSlide7].style.opacity = 0;
  currentSlide7 = (currentSlide7 + 1) % slides7.length;
  slides7[currentSlide7].style.opacity = 1;
  setTimeout(rotateSlides7, 3000); // Change every 3 seconds
}
if (slides7.length > 0) {
  setTimeout(rotateSlides7, 3000);
}




// Slideshow for  project 8
let currentSlide8 = 0;
const slides8 = document.querySelectorAll("#project-slideshow8 img");
function rotateSlides8() {
  slides8[currentSlide8].style.opacity = 0;
  currentSlide8 = (currentSlide8 + 1) % slides8.length;
  slides8[currentSlide8].style.opacity = 1;
  setTimeout(rotateSlides8, 3000); // Change every 3 seconds
}
if (slides8.length > 0) {
  setTimeout(rotateSlides8, 3000);
}










// Replace the placeholder showCaseStudy() function with:
function showAzmasimCaseStudy() {
  document.getElementById('azmasim-case-study-modal').style.display = 'flex';
  document.getElementById('navigation').style.display = "none";
  document.body.style.overflow= "hidden";
}
function closeAzmasimCaseStudy() {
  document.getElementById('azmasim-case-study-modal').style.display = 'none';
  document.getElementById('navigation').style.display = "flex";
  document.body.style.overflow= "auto";
}

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

function showPhoneStoreCaseStudy() {
  document.getElementById('phonestore-case-study').style.display = "flex";
  document.getElementById('navigation').style.display = "none";
  document.body.style.overflow= "hidden";
  
}
function closePhoneStoreCaseStudy() {
  document.getElementById('phonestore-case-study').style.display = 'none';
  document.getElementById('navigation').style.display = "flex";
  document.body.style.overflow= "auto";
}




// Close when clicking outside modal (add to existing window.onclick)
window.onclick = function(event) {
  const caseStudyModal = document.getElementById('azmasim-case-study-modal');
  const caseStudyModal2 = document.getElementById('phonestore-case-study');

  if (event.target == caseStudyModal) closeAzmasimCaseStudy();
  if (event.target == caseStudyModal2) closePhoneStoreCaseStudy();
}


// ######## Video Modal Show #############
// Video Modal
function openVideoModal() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('projectVideo');
  modal.style.display = 'flex';
  video.play();
  document.body.style.overflow= "hidden";
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('projectVideo');
  video.pause();
  modal.style.display = 'none';
  document.body.style.overflow= "auto";
}









// Animate progress bars when section comes into view
function animateProgressBars() {
  const skillItems = document.querySelectorAll('.st-skill-item');
  
  skillItems.forEach(item => {
    const level = item.getAttribute('data-skill-level');
    const progressBar = item.querySelector('.st-progress-bar');
    progressBar.style.width = `${level}%`;
  });
}

// Intersection Observer to trigger animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateProgressBars();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

const skillsSection = document.querySelector('.skills-tech-section');
if (skillsSection) {
  observer.observe(skillsSection);
}





// ✅ FIXED TESTIMONIALS SCROLL (Displays all 10 feedbacks correctly in loop)
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.testimonials-track');
  if (!track) return;

  // --- Clean slate ---
  const originalCards = Array.from(track.querySelectorAll('.testimonial-card'));
  track.innerHTML = ''; // Clear all first

  // --- Clone once ---
  const allCards = [...originalCards, ...originalCards]; // Total = 20 cards
  allCards.forEach(card => track.appendChild(card.cloneNode(true)));

  // --- Dynamically set animation duration ---
  const cardWidth = 320; // px (from CSS)
  const gap = 30; // px (CSS gap)
  const totalCards = allCards.length; // 20 now
  const totalWidth = totalCards * (cardWidth + gap) - gap;

  // --- Set scroll speed (adjust base speed if needed) ---
  const baseSpeed = 0.02; // seconds per pixel
  const duration = totalWidth * baseSpeed;
  track.style.animationDuration = `${duration}s`;

  // --- Animation interaction ---
  const pauseAnimation = () => track.style.animationPlayState = 'paused';
  const resumeAnimation = () => track.style.animationPlayState = 'running';
  track.addEventListener('mouseenter', pauseAnimation);
  track.addEventListener('mouseleave', resumeAnimation);
  track.addEventListener('touchstart', pauseAnimation);
  track.addEventListener('touchend', resumeAnimation);
});









// Form Submission
document.getElementById('emailForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  
  // Here you would typically send the data to a server
  console.log('Form submitted:', formData);
  
  // Show success message
  const btn = document.querySelector('.submit-btn');
  btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
  btn.style.background = '#4CAF50';
  
  // Reset after 2 seconds
  setTimeout(() => {
    btn.innerHTML = 'Send <i class="fas fa-paper-plane"></i>';
    btn.style.background = 'linear-gradient(45deg, #9c27b0, #e91e63)';
    this.reset();
    // Reset labels after form reset
    document.querySelectorAll('.form-group label').forEach(label => {
      label.style.top = '10px';
      label.style.fontSize = '0.9rem';
      label.style.color = 'rgba(255, 255, 255, 0.7)';
    });
  }, 2000);
});

// Add event listeners for textarea validation
document.getElementById('message').addEventListener('input', function() {
  const label = document.querySelector('label[for="message"]');
  if (this.value.trim() !== '') {
    label.style.top = '-18px';
    label.style.fontSize = '0.75rem';
    label.style.color = '#e91e63';
  } else {
    label.style.top = '10px';
    label.style.fontSize = '0.9rem';
    label.style.color = 'rgba(255, 255, 255, 0.7)';
  }
});

// Smooth scrolling for navigation
document.querySelectorAll('.floating-nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});










// Contact Form Email 

const form = document.getElementById('emailForm');
const submitBtn = form.querySelector('button.submit-btn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "68c81db6-3734-4e57-bd6f-404d2540fe17");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
