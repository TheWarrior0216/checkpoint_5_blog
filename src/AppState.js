import { reactive } from 'vue'
import { Post } from "./models/Post.js"
import { Goblin } from "./models/Goblin.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /**@type {Post []} */
  posts: [],
  /** @type {import('./models/Account.js').Account} user info from the database*/
  profile: null,
  /**@type {Post []} */
  personalPosts: [],
  /**@type {Goblin []} */
  goblina: []
})