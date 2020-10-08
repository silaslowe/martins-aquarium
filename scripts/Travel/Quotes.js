export const Quote = (quoteObj) => {
    return `
    <div class="quoteItem">
                  <p class="quoteItem__text">${quoteObj.text}</p>
                  <p class="quoteItem__location">${quoteObj.location}</p>
                  <p class="quoteItem__author">-${quoteObj.author}</p>
                </div>
    `
}