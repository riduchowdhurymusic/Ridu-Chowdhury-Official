// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Optional: Simple form submission alert
document.getElementById('contact-form').addEventListener('submit',function(e){
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  this.reset();
});
