
const subscribeButton = document.getElementById('s');


subscribeButton.addEventListener('click', () => 
    {

  const emailInput = document.getElementById('email');
  
  
  if (emailInput.value !== '')
     {
    
    alert('Thank you for subscribing!');
  } 
  
  else
   {
    
    alert('Please enter your email address!');
  }
});

window.onbeforeunload = () => 
    {
  return 'Are you sure you want to leave the website?';
};