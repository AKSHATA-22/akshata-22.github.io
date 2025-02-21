document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Hover effect for project cards
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.05)";
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
      });
    });
  });
  