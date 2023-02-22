import { type Gender, type User } from '../models/user'
import { makeAutoObservable } from 'mobx'
import { type RootStore } from './RootStore'

export class UserStore implements User {
  firstName = ''
  lastName = ''
  gender = 'M' as Gender
  birthday = new Date()
  phone = ''
  photo = null

  rootStore: RootStore

  constructor (rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false })
    this.rootStore = rootStore
  }

  setFirstName (firstName: string): void { this.firstName = firstName }
  setLastName (lastName: string): void { this.lastName = lastName }
  setGender (gender: Gender): void { this.gender = gender }
  setBirthday (birthday: Date): void { this.birthday = birthday }
  setPhone (phone: string): void { this.phone = phone }

  saveToLocalStorage = (): void => {

  }

  loadFromLocalStorage = (): void => {

  }
}
