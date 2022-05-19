import { API_KEY } from "../config/key"

const BASE_URL = 'https://api.nasa.gov/planetary/apod'

//retorna a imagem do dia atual
export const getApodToday = async () => {
    try {
        let url = `${BASE_URL}/?api_key=${API_KEY}`
        const response = await fetch(url)
        return response.json()
        
    } catch (error) {
        console.log(`[getApodToday]: ${error}`)
    }
}

export const getApod = async (day, month, year) => {
    try {
        let url = `${BASE_URL}/?api_key=${API_KEY}&date=${year}-${month}-${day}`
        const response = await fetch(url)
        return response.json()
        
    } catch (error) {
        console.log(`[getApod]: ${error}`)
    }
}