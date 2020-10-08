export const Fish = (fishObj) => {
    return `
    
    <div class="fish">
        <img src="martins-pics/dragonfish.jpg" alt="dragon fish named smiles" />
        <ul>
            <li class="fish__name">Name: ${fishObj.name}</li>
            <li class="fish__species">Species: ${fishObj.species}</li>
            <li class="fish__length">Length: ${fishObj.length} inches</li>
            <li class="fish__location">Location: ${fishObj.location}</li>
            <li class="fish__dies">Diet: ${fishObj.food}</li>
        </ul>
</div>
    `
}

