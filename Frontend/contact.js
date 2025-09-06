function openContactModal() {
  document.getElementById('contactModal').classList.remove('hidden');
  document.getElementById('contactModal').classList.add('flex');
}
function closeContactModal() {
  document.getElementById('contactModal').classList.add('hidden');
  document.getElementById('contactModal').classList.remove('flex');
}
function openQueryModal() {
  closeContactModal();
  document.getElementById('queryModal').classList.remove('hidden');
  document.getElementById('queryModal').classList.add('flex');
}
function closeQueryModal() {
  document.getElementById('queryModal').classList.add('hidden');
  document.getElementById('queryModal').classList.remove('flex');
}

function openContactModal() {
    const modal = document.getElementById("contactModal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
  
  function closeContactModal() {
    const modal = document.getElementById("contactModal");
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  }
  