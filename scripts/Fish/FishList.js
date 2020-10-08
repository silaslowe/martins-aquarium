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
            <articel class="fishList">
             <h2 class="fishList__title">Fishes<h2>
            ${fishHTMLRepresentations}
            </articel> 
            `
}







