import { useFish } from "./FishDataProvider.js";
import { Fish } from "./Fishes.js";




export const FishList = () => {


    const fishesElement = document.querySelector(".fishes")
    const fishes = useFish();

    let fishHTMLRepresentations = ''

    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
    }


    fishesElement.innerHTML +=
        ` 
        <div class="fishes__title">
        <h3 class="section-title">Fish Friends</h3>
      </div>
      <div class="fishes__list">
        ${fishHTMLRepresentations} 
        </div>   
            `
}







// <section class="fishes">
//     <div class="fishes__title">
//         <h3 class="section-title">Fish Friends</h3>
//     </div>
//     <div class="fishes__list">
//         <div class="fish">
//             <img src="martins-pics/dragonfish.jpg" alt="dragon fish named smiles" />
//             <ul>
//                 <li class="fish__name">Name: Smily</li>
//                 <li class="fish__species">Species: Deep-Sea Dragonfish</li>
//                 <li class="fish__length">Length: 5 inches</li>
//                 <li class="fish__location">Location: Gulf of Mexico</li>
//                 <li class="fish__dies">Diet: Small fish and crustaceans</li>
//             </ul>
//         </div>