export function goTop() {
  const button = document.querySelector(".goTop");
  if (!button) return;

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
