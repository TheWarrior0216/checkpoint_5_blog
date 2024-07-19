import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {
  async getPosts() {
    const response = await api.get('api/posts')
    const posts = response.data.posts.map(Pojo => new Post(Pojo))
    AppState.posts = posts
    logger.log(AppState.posts)
  }

}
export const postsService = new PostsService