export type Gender = 'M' | 'F'

export interface PersonalInfo {
  firstName: string
  lastName: string
  gender: Gender
  birthday: Date
}

export type User = PersonalInfo & {
  phone: string | null
  photo: File | null
  avatar: File | null
}

// Additional types for non-registered user
export type EmptyPersonalInfo = {
  [key in keyof PersonalInfo]: PersonalInfo[key] | undefined
}

export type NewUser = {
  [key in keyof User]: User[key] | undefined
}

///