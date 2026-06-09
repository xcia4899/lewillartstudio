import { initMenu } from "./ulite/menu.js";
import { loadLayout } from "./layout.js";
import { scrollAnimation } from "./ulite/scrollAnimation.js";
import { scrollHeader } from "./ulite/scrollHeader.js";
import { initHeader } from "./header.js";

document.addEventListener("DOMContentLoaded", async () => {
    await loadLayout();
    initHeader();
    initMenu();
    scrollAnimation();
    scrollHeader();
});