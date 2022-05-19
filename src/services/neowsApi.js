import { API_KEY } from "../config/key";

const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed'

export const getNeows = async () => {
    try {
        let url = `${BASE_URL}?api_key=${API_KEY}`
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        console.log(`[getNeows]: ${error}`)
    }
}