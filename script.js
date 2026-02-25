/* Copy Code */
const codeLog = document.createElement("div");
codeLog.classList.add("code-status");
codeLog.setAttribute("aria-live", "polite");
codeLog.setAttribute("aria-atomic", "true");
document.body.appendChild(codeLog);

let codeLogTime;
function showCodeLog(logText) {
  clearTimeout(codeLogTime);
  codeLog.textContent = logText;
  codeLog.style.opacity = "1";
  codeLogTime = setTimeout(() => {
    codeLog.style.opacity = "0";
  }, 3000);
}

document.querySelectorAll("[data-copy]").forEach(dc => {
  dc.setAttribute("role", "button");
  dc.setAttribute("tabindex", "0");
  dc.setAttribute("aria-label", "Copy code");

  dc.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      dc.click();
    }
  });

  dc.addEventListener("click", (e) => {
    if (!navigator.clipboard) {
      showCodeLog("Clipboard not supported");
      return;
    }
 
    const codeEl = dc.querySelector("code");
    if (!codeEl) return;
    const code = codeEl.textContent.trim();
    navigator.clipboard.writeText(code)
      .then(() => {
        const preview = code.length > 10 ? code.slice(0, 10) + "…" : code;
        showCodeLog(`Code copied to clipboard（${preview}）`);
      })
      .catch(() => showCodeLog("Copy failed"));
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