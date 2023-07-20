window.addEventListener('load', function() {
    // Simulate a delay to show the preload screen
    setTimeout(function() {
      // Hide the preload screen
      document.getElementById('preload-container').style.display = 'none';
      // Show the website content
      document.getElementById('content').style.display = 'block';
    }, 2000); // Adjust the duration as needed (in milliseconds)
  });
  