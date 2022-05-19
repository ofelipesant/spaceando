import { API_KEY } from "../config/key"

const date = new Date
const BASR_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers'

const atualYear = date.getFullYear()
const atualMonth = date.getMonth()
const atualDay = date.getDate()


//retorna as imagens tiradas por determinado rover com base na data atual na terra
export const getMarsRoverImages = async (rover) => {
    try {
        let url = `${BASR_URL}/${rover}/photos?earth_date=${atualYear}-${atualMonth}-${atualDay}&api_key=${API_KEY}`
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        console.log(`[getMarsRoverImages]: ${error}`)
    }
}