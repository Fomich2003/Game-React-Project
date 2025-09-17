import { gameSeviceConfig } from "../config/constants"
class GameService {
    async getAllGames() {
        try {
            const url = `${gameSeviceConfig.baseURL}?key=${gameSeviceConfig.key}&page_size=${gameSeviceConfig.pageSize}`
            const response = await fetch(url)
            if (!response.ok) throw new Error("Server error")
            const data = await response.json()
            return data.results
        } catch (error) {
            console.log("Get all games error", error.message)
            throw error
        }
    }
}

const gameSevice = new GameService()

export default gameSevice
