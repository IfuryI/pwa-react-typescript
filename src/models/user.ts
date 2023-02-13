export type Gender = 'M' | 'F'

export interface PersonalInfo {
  firstName: string
  lastName: string
  gender: Gender
  birthday: Date
}

export type User = PersonalInfo & {
  phone: string
  photo: File | null
}
