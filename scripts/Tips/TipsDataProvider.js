const tipCollection = [
    {
        title: "Tempurature",
        image: "martins-pics/thermometer.jpg",
        tip: "If you see steam rising form the tank and bubbles coming from the bottom then you probably have the tank on the stove and it is too hot.If a hard layer of water forms on the surfae of the water, we in the business call that 'ice' and your tank is in the freezer.Too cold!"
    },
    {
        title: "Tank Hygiene",
        image: "martins-pics/dirty.jpg",
        tip: "Make sure you keep the bowl clean. Fish don;t have hands and thy don't makesponges small enough for them anyways. I've tried cutting up a regular sponge into smaller pieces but I think fish may kind of entitled and not enthusiastic about work."
    },
    {
        title: "Salinity",
        image: "martins-pics/salt.jpeg",
        tip: "Keep salt near yer fish bowl. If you are out of salt then Fritos® will do nicely. Fish love snacks!"
    },
]

export const useTips = () => {
    return [...tipCollection]
}