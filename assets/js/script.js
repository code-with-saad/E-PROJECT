// Navbar Js Start

$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
  
});

// Navbar Js End


// Carousel Js Start

var myCarousel = document.querySelector('#testimonialCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000,
  ride: 'carousel'
});

// Carousel Js End


// Subscribe-form Js Start

document.getElementById('subscribe-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for subscribing! You'll now receive the latest updates and news from us.");
  this.reset();
});

// Subscribe-form Js End


// Go to Top Button Js Start

let goTopBtn = document.getElementById("goTopBtn");


window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goTopBtn.style.display = "flex"; 
    } else {
        goTopBtn.style.display = "none";
    }
};


goTopBtn.addEventListener('click', function(event) {
    event.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
});


// Go to Top Button Js End



// category js

document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', function (event) {
      event.preventDefault();  
      const category = this.getAttribute('data-category');
      console.log("Selected category on click:", category);  
      localStorage.setItem('selectedCategory', category);
      window.location.href = 'products.html';
  });
});

