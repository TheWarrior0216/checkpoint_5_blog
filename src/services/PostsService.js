import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {
  async decimate(decimationItem) {
    const DecimationIndex = AppState.posts.findIndex((id) => id = id.id)
    AppState.posts.splice(DecimationIndex, 1)
    await api.delete(`api/posts/${decimationItem}`)
  }
  async createPost(carData) {
    const response = await api.post('api/posts', carData)
    logger.log(response)
    const createdPost = new Post(response.data)
    AppState.posts.unshift(createdPost)
  }
  async getPosts() {
    const response = await api.get('api/posts')
    const posts = response.data.posts.map(Pojo => new Post(Pojo))
    AppState.posts = posts
    logger.log(AppState.posts)
  }
  async getPostsByID(id) {
    AppState.personalPosts = []
    const response = await api.get(`api/profiles/${id}/posts`)
    const currentPosts = response.data.posts.map(Pojo => new Post(Pojo))
    AppState.personalPosts = currentPosts
  }
  async getProfileByID(profileId) {
    AppState.profile = null
    const response = await api.get(`/api/profiles/${profileId}`)
    const profile = new Account(response.data)
    AppState.profile = profile
  }
  async like(PostId) {
    const response = await api.post(`api/posts/${PostId}/like`, PostId)
    logger.log(response.data)
  }

}
export const postsService = new PostsService