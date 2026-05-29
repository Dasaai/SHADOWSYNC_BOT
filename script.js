document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-page]").forEach((link) => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });

  const modal = document.getElementById("buyModal");
  if (modal) {
    const modalPlan = document.getElementById("buyModalPlan");
    const openButtons = document.querySelectorAll("[data-plan]");
    const closeButtons = document.querySelectorAll("[data-close-modal]");

    const openModal = (plan) => {
      if (modalPlan) {
        modalPlan.textContent = `Вы выбрали: ${plan}. Ниже 2 способа покупки.`;
      }
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    };

    const closeModal = () => {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    };

    openButtons.forEach((button) => {
      button.addEventListener("click", () => openModal(button.getAttribute("data-plan") || ""));
    });

    closeButtons.forEach((button) => {
      button.addEventListener("click", closeModal);
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("open")) {
        closeModal();
      }
    });
  }
});
