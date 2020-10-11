function myFunction() {
  var x = document.getElementById("my-navbar");
  if (x.className === "navbar-bot-content") 
  {
      x.className += "responsive";
  } 
  else 
  {
      x.className = "navbar-bot-content";
  }
}
