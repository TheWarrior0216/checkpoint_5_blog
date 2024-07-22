import { AppState } from "../AppState.js"
import { Goblin } from "../models/Goblin.js"
import { api } from "./AxiosService.js"

class GoblinService {

  async getGoblins() {
    const response = await api.get('api/ads')
    const newGoblins = response.data.map((Pojo) => new Goblin(Pojo))
    AppState.goblina = newGoblins
  }

}
export const goblinsService = new GoblinService()