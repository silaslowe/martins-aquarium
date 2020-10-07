export const Location = (locationObj) => {
  return ` 
    <div class="locationItem-container">
    <div class="locationItem">
      <p class="locationItem__name"><${locationObj.name}/p>
      <img src="${locationObj.image}" alt="Des Moines" />
      <p class="locationItem__lat-long-">${locationObj.latlong}</p>
    </div>
    `
}