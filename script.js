

function toggleForm() {
  const formDiv = document.getElementById("myForm");
  formDiv.style.display = "block"; 
}
function openModal() {
  document.getElementById("formModal").style.display = "block";
}

function closeModal() {
  document.getElementById("formModal").style.display = "none";
}

function submitForm(event) {
  event.preventDefault(); 
  alert("Data sent successfully");
  closeModal(); 
}
