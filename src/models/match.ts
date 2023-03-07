export interface Match {
  name: string
  age: number
  location: {
    city: string
    country: string
  }
  contacts: {
    email?: string
    telegram?: string
    telephone?: string
    facebook?: string
    instagram?: string
  }
}