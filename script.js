const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // 1. remove the 'active' class from all buttons and panel.
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabPanels.forEach((panel) => panel.classList.remove("active"));

    // 2. mark the clicked button as 'active'.
    button.classList.add("active");

    // 3. extract the ID of the target panel from the buttons data-target and activate it.
    const targetId = button.getAttribute("data-target");
    const targetPanel = document.getElementById(targetId);
    targetPanel.classList.add("active");
  });
});
