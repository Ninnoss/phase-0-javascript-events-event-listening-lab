function addingEventListener() {
  const input = document.getElementById('button');
  input.addEventListener('click', clickAlert);
}

// calling the function
addingEventListener();


function clickAlert() {
  alert('I was clicked!');
}