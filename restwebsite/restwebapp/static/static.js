document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
  
    if (name && email && date && time) {
      alert("Your table has been reserved!");
    } else {
      alert("Please fill in all fields.");
    }
  });
  