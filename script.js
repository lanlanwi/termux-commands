/* Copy Code */
document.querySelectorAll("[data-copy]").forEach(dc => {
  if (!('ontouchstart' in window)) {
    dc.addEventListener("mouseover", () => alert(0));
  }

  dc.addEventListener("click", (e) => {
    e.stopPropagation();
    const code = dc.innerText.trim();
    navigator.clipboard.writeText(code)
      .then(() => alert(`Copied: ${code}`))
      .catch(error => alert(error));
  });
});
/* /Copy Code */





/* License */
document.querySelectorAll(".license").forEach(lic => {
  const licName = "Lanlanwi";
  const licYear = new Date().getFullYear();
  lic.textContent = `© ${licYear} ${licName}. Free to copy and use. MIT License.`
})
/* /License */