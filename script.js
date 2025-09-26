document.addEventListener("DOMContentLoaded", function() {
      const password = "curvea123";
      const entered = prompt("Enter password to access this page:");

      if (entered === password) {
        document.body.style.display = "block";
      } else {
        document.body.innerHTML = "<h2>Access Denied</h2>";
        document.body.style.display = "block";
      }
    });