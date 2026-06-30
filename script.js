const root = document.documentElement;
const toggle = document.querySelector("#language-toggle");

function setLanguage(language) {
  const next = language === "zh" ? "zh" : "en";
  root.dataset.lang = next;
  root.lang = next === "zh" ? "zh-CN" : "en";
  toggle.textContent = next === "en" ? "中文" : "EN";
  toggle.setAttribute(
    "aria-label",
    next === "en" ? "切换为中文" : "Switch to English",
  );
  localStorage.setItem("preferred-language", next);
}

setLanguage(localStorage.getItem("preferred-language") || "en");

toggle.addEventListener("click", () => {
  setLanguage(root.dataset.lang === "en" ? "zh" : "en");
});
