import { useLocations } from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const TravelList = () => {
    const travelContent = document.querySelector(".travel")
    const locations = useLocations();

    let locationHTMLRepresentations = ''

    for (const location of locations) {
        locationHTMLRepresentations += Location(location)
    }


    travelContent.innerHTML +=
        `
        <article class="travel__location">
            <h3 class="travel__location__title">Fishy Travel</h3>
            ${locationHTMLRepresentations}
            </articel> 
            `
}
