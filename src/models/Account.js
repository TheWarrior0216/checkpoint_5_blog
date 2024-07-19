export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.graduated = data.graduated
    this.class = data.class
    this.coverImg = data.coverImg
    this.linkedin = data.linkedin
    this.github = data.github
    this.resume = data.resume
    // TODO add additional properties if needed
  }
}
