
  function openPrivacyModal() {
    document.getElementById('privacyModal').classList.remove('hidden');
  }

  function closePrivacyModal() {
    document.getElementById('privacyModal').classList.add('hidden');
  }


  function showLoginModal() {
    const modal = document.getElementById("loginModal");
    const modalBox = document.getElementById("loginModalBox");
  
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  
    // Wait for next frame to trigger animation
    requestAnimationFrame(() => {
      modalBox.classList.remove("opacity-0", "scale-95");
      modalBox.classList.add("opacity-100", "scale-100");
    });
  }
  
  function closeLoginModal() {
    const modal = document.getElementById("loginModal");
    const modalBox = document.getElementById("loginModalBox");
  
    // Animate out
    modalBox.classList.remove("opacity-100", "scale-100");
    modalBox.classList.add("opacity-0", "scale-95");
  
    // After animation, hide modal
    setTimeout(() => {
      modal.classList.remove("flex");
      modal.classList.add("hidden");
    }, 300);
  }
  
