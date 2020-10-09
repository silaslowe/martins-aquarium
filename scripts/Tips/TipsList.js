import { useTips } from "./TipsDataProvider.js";
import { Tips } from "./Tips.js";

export const TipsList = () => {
  const rightContainer = document.querySelector(".right-container");
  const tips = useTips();

  let tipsHTMLRepresentations = "";

  for (const tip of tips) {
    tipsHTMLRepresentations += Tips(tip);
  }

  rightContainer.innerHTML += `
        <aside class="careItemsList">
        <h3 class="careItemList__title">Caring for Fish</h3>
            ${tipsHTMLRepresentations}
            </aside> 
            `;
};
