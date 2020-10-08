import { useLocations } from "./LocationDataProvider.js"
import { Location } from "./Location.js"
import { useQuotes } from "./QuotesDataProvider.js"
import { Quote } from "./Quotes.js"

export const TravelList = () => {

  const travelContent = document.querySelector(".travel")
  const quotes = useQuotes()
  const locations = useLocations();

  let quotesHTMLRepresentations = ''
  let locationHTMLRepresentations = ''

  for (const quote of quotes)
    quotesHTMLRepresentations += Quote(quote)

  for (const location of locations) {
    locationHTMLRepresentations += Location(location)
  }





  travelContent.innerHTML +=
    `
        <article class="travel__quotes">
        <div class="travel__quotes__title">
          <h3>Fish Dish</h3>
        </div>
        <div class="quoteItem-container">
         ${quotesHTMLRepresentations}
        </div>
        </article>

        <article class="travel__location">
              <div class="travel__location__title">
                <h3>Fishy Travel</h3>
              </div>
              <div class="locationItem-container">
            ${locationHTMLRepresentations}
            </div>
            </articel> 
            `
}

