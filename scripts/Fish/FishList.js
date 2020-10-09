import { useFish, useHolyFish, useSoldierFish, useRegularFish } from "./FishDataProvider.js";
import { Fish } from "./Fishes.js";

export const FishList = () => {
  const fishesElement = document.querySelector(".fishes");

  const holy = useHolyFish();
  const soldier = useSoldierFish();
  const regular = useRegularFish();

  let holyHTMLRepresentations = "";
  let soldierHTMLRepresentations = "";
  let regularHTMLRepresentations = "";

  for (const fish of holy) {
    holyHTMLRepresentations += Fish(fish);
  }
  for (const fish of soldier) {
    soldierHTMLRepresentations += Fish(fish);
  }
  for (const fish of regular) {
    regularHTMLRepresentations += Fish(fish);
  }

  fishesElement.innerHTML += ` 
        <div class="fishes__title">
        <h3 class="section-title">Fish Friends</h3>
      </div>
      <div class="fishes__list">
        ${holyHTMLRepresentations}
        ${soldierHTMLRepresentations} 
        ${regularHTMLRepresentations}  
        </div>   
            `;
};
