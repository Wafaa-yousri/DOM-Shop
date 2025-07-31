

function toggleForm() {
  const formDiv = document.getElementById("myForm");
  formDiv.style.display = "block"; // يظهر الفورم
}
function openModal() {
  document.getElementById("formModal").style.display = "block";
}

function closeModal() {
  document.getElementById("formModal").style.display = "none";
}

function submitForm(event) {
  event.preventDefault(); // يمنع الإرسال الفعلي
  alert("Data sent successfully");
  closeModal(); // يقفل النافذة بعد الإرسال
}