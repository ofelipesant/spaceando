import { API_KEY } from "../config/key";

const BASE_URL = 'https://api.nasa.gov/EPIC/api/natural'

export const getEarthImages = async () => {
    try {
        let url = `${BASE_URL}/images?api_key=${API_KEY}`
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        console.log(`[getEarthImages]: $${error}`)
    }
}