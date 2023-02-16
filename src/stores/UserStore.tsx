import { type Gender, type User } from "../models/user";
import { makeAutoObservable } from 'mobx'
import { RootStore } from './RootStore'

export class UserStore implements User {
  firstName = ''
  lastName = ''
  gender = 'M' as Gender
  birthday = new Date()
  phone = ''
  photo = null

  rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false })
    this.rootStore = rootStore
  }

  setFirstName(firstName: string) { this.firstName = firstName }
  setLastName(lastName: string) { this.lastName = lastName }

  getUser = () => {
    return this
  }
}