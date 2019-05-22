function convertCodeIntoPreview(preEl) {
  const wrapEl = document.createElement("div");
  wrapEl.classList.add("code-box");
  const previewEl = document.createElement("div");
  previewEl.classList.add("code-box__preview");
  const iframe = document.createElement("iframe");

  previewEl.appendChild(iframe);

  preEl.parentElement.insertBefore(wrapEl, preEl);
  wrapEl.appendChild(preEl);
  wrapEl.appendChild(previewEl);

  setTimeout(() => {
    iframe.contentDocument.open();
    iframe.contentDocument.write(preEl.textContent);
    iframe.contentDocument.close();
  }, 1000);
}

function init() {
  const preElements = document.querySelectorAll("pre[class*=language]");
  [...preElements].forEach(preEl => convertCodeIntoPreview(preEl));
}
document.addEventListener("DOMContentLoaded", init);
