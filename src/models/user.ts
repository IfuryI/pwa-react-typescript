export type Gender = 'M' | 'F' | 'Other'

export interface PersonalInfo {
  firstName: string
  lastName: string
  gender: Gender
  birthday: Date
}

export type UserForm = PersonalInfo & {
  email: string
  password: string
  phone: string | null
  photo: string | null
  avatar: string | null
}

export type AuthUser = UserForm & {
  id: number
}

// Additional types for non-registered user
export type EmptyPersonalInfo = {
  [key in keyof PersonalInfo]: PersonalInfo[key] | undefined
}

export type NewUser = {
  [key in keyof UserForm]: UserForm[key] | undefined
}

///