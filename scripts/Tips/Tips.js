export const Tips = (tipObj) => {
  return ` <div class="careItem-container">
              <div class="careItem">
                <div class="careItem__title-pic">
                  <h4 class="careItem__topic">${tipObj.title}</h4>
                  <img src="${tipObj.image}" alt="salt in a wooden spoon" />
                </div>
                <p class="careItem__text">
                ${tipObj.tip}
                </p>
              </div>
              `
}