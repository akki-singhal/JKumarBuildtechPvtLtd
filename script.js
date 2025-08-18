// JavaScript for modal functionality
function bookService() {
  console.log("Booking service initiated");
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'block';

    // Add the animation class to the form
    const bookingForm = document.getElementById('bookingForm'); // Ensure your form has this ID
    bookingForm.classList.add('form-appear');
}

// Ensure to remove the class when closing the modal
function closeModal() {
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.classList.remove('form-appear'); // Remove the animation class
    document.getElementById('bookingModal').style.display = 'none';
}


// blog read more functionality
function toggleBlogContent(event) {
    event.preventDefault(); // Prevent the default link behavior
    
    const blogPost = event.target.closest('.blog-post');
    const fullContent = blogPost.querySelector('.blog-full-content');
    
    if (fullContent.style.display === 'none' || fullContent.style.display === '') {
        fullContent.style.display = 'block';
        event.target.textContent = 'Read Less';
    } else {
        fullContent.style.display = 'none';
        event.target.textContent = 'Read More';
    }
}


// JavaScript for smooth scrolling to the contact section
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior

    // Get the target section
    const targetSection = document.querySelector('#contact');

    // Scroll to the target section
    if (targetSection) { // Add this check
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.error("Element with ID 'contact' not found."); // Optional: log an error
    }
  
});

 

// hambuerger toogle
const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active'); // Add this line for hamburger animation
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active'); // Close the menu
            hamburger.classList.remove('active'); // Reset hamburger animation
        });
    });



    // Force scroll to top on page load
    window.onload = function () {
    // Prevent browser from restoring scroll position
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // Scroll to top on load
    window.scrollTo(0, 0);
    };  

// sevice slider movement
// This script triggers a horizontal slider effect when the services section comes into view
// It scrolls the slider left and right to indicate it's a horizontal slider
// The effect is triggered only once every 2 seconds to prevent excessive triggering
// The slider scrolls right by 500px and then back left by 500px after
let lastSlideTime = 0;
const SLIDE_COOLDOWN = 2000; // 2 seconds between triggers

document.addEventListener("DOMContentLoaded", () => {
  const serviceSection = document.querySelector("#services");
  const slider = document.querySelector(".service-slider");

  if (serviceSection && slider) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const now = Date.now();

          if (now - lastSlideTime > SLIDE_COOLDOWN) {
            lastSlideTime = now;

            // Smooth left-right scroll to indicate horizontal slider
            slider.scrollBy({ left: 300, behavior: "smooth" });

            setTimeout(() => {
              slider.scrollBy({ left: -300, behavior: "smooth" });
            }, 200); // slight bounce-back
          }
        }
      },
      {
        threshold: 0.5 // when 50% of the section is visible
      }
    );

    observer.observe(serviceSection);
  }
});


// JavaScript for auto-scrolling reviews
// This script automatically scrolls the reviews section horizontally
// It scrolls slightly to the right every 30ms and resets to the beginning when the end is reached
// Adjust the speed by changing the scrollAmount increment and the setInterval duration
const slider = document.querySelector('.review-slider');

  let scrollAmount = 0;

  function autoScrollReviews() {
    // Scroll slightly to the right every 30ms
    scrollAmount += 0.5; // Adjust speed here
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0; // Reset to beginning when end reached
    }
    slider.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }

  // setInterval(autoScrollReviews, 30); // Adjust interval speed here


