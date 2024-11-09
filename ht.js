// This script will remove all elements from the webpage and display an error message

document.body.innerHTML = '';  // Remove all the content from the webpage

// Create a div to show the error message
const errorMessage = document.createElement('div');
errorMessage.style.position = 'absolute';
errorMessage.style.top = '50%';
errorMessage.style.left = '50%';
errorMessage.style.transform = 'translate(-50%, -50%)';
errorMessage.style.padding = '20px';
errorMessage.style.backgroundColor = 'red';
errorMessage.style.color = 'white';
errorMessage.style.fontSize = '24px';
errorMessage.style.fontWeight = 'bold';
errorMessage.style.textAlign = 'center';
errorMessage.textContent = 'Licence Expired. Rebuy licence for running this website';

// Append the error message to the body
document.body.appendChild(errorMessage);
