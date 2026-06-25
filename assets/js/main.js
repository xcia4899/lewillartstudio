import { initMenu } from "./ulite/menu.js";
import { loadLayout } from "./layout.js";
import { scrollAnimation } from "./ulite/scrollAnimation.js";
import { scrollHeader } from "./ulite/scrollHeader.js";
import { goTop } from "./ulite/goTop.js";
import { initHeader } from "./header.js";
import { loadSvgSprite } from "./ulite/svgSprite.js";

document.addEventListener("DOMContentLoaded", async () => {
    await loadSvgSprite();
    await loadLayout();
    initHeader();
    initMenu();
    scrollAnimation();
    scrollHeader();
    goTop();
});
