export class Post {
  constructor(data) {
    this.body = data.body
    this.createdAt = new Date(data.createdAt)
    this.creatorId = data.creatorId
    this.id = data.id
    this.imgUrl = data.imgUrl
    this.updatedAt = new Date(data.updatedAt)
    this.likeIds = data.likeIds
    this.likes = data.likes
  }
}