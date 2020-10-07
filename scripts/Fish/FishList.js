import { useFish } from "./FishDataProvider.js";
import { Fish } from "./Fishes.js";




export const FishList = () => {


    const contentElement = document.querySelector(".left-container")
    const fishes = useFish();

    let fishHTMLRepresentations = ''

    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
    }


    contentElement.innerHTML +=
        `
            <articel class="fishList">
            ${fishHTMLRepresentations}
            </articel> 
            `
}







