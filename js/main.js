// main.js
import { loadJSONForID } from "./api.js";
import { renderCell } from "./renderCell.js";
import { renderBP } from "./renderBP.js";
import { renderBESS } from "./renderBESS.js";
import { initInteractiveBESS } from "./interactiveBess.js";
import { initInteractiveBP } from "./interactiveBP.js";
import { initAccordion, initImageMaps } from "./ui.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const content = document.getElementById("content");

(async () => {
  if (!id) {
    content.innerHTML = "<p>No ID provided.</p>";
    return;
  }

  const result = await loadJSONForID(id);
  if (!result) {
    content.innerHTML = "<p>ID not found in any folder.</p>";
    return;
  }

  const { type, data } = result;
  let html = "";

  if (type === "cell") html = renderCell(id, data);
  if (type === "bp") html = renderBP(id, data);
  if (type === "bess") html = renderBESS(id, data);

  content.innerHTML = html;

  initAccordion();
  initInteractiveBP(content);
  initInteractiveBESS(content);
  
  initImageMaps();
})();

window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    // El usuario volvió atrás desde el caché de Safari
    window.location.reload();
  }
});
