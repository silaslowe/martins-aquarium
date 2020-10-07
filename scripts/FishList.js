import { useFish } from "./FishDataProvider.js";

export const fishTest = () => {
    const allTheFish = useFish()

    for (const fish of allTheFish) {
        console.log(fish)
    }

}



{/* <section class="fishes">
<h3 class="section-title">Fish Friends</h3>
<div class="fishes__list"> */}
