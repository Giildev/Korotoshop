
document.getElementById("smoothScroll").addEventListener("click", function(event){
  event.preventDefault();
  document.querySelector('#howToBuy').scrollIntoView({ behavior: 'smooth' });
  
});