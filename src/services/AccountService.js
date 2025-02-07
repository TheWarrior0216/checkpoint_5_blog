import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger'
import Pop from "../utils/Pop.js"
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
      if (AppState.account) {

        Pop.success(`Succesfully Loged In, Happy Posting ${AppState.account.name}`)
      }
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editAccount(formData) {
    const response = await api.put(`account`, formData)
    logger.log(response)
  }
}

export const accountService = new AccountService()
