const locationsCollection = [
    {
        name: "Des Moines",
        image: "martins-pics/DesMoinesIowaSkyline.jpg",
        latlong: "41.5868° N, 93.6250° W"
    },
    {
        name: "Rabat, Morocco",
        image: "martins-pics/rabat.jpg",
        latlong: "33.9716° N, 6.8498° W"
    },
    {
        name: "Des Moines",
        image: "martins-pics/DesMoinesIowaSkyline.jpg",
        latlong: "41.5868° N, 93.6250° W"
    },
]

export const useLocations = () => {
    return [...locationsCollection]
}