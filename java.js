<!-- JavaScript for Smooth Scroll -->
  <script>
    // Smooth Scroll Functionality
    document.querySelectorAll('a[href=port.html"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  </script>
