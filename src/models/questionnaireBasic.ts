import { User } from "./user"

export interface WhoFriends {
    count?: number
    people: ( string | User )[]
}
export interface WhoCouple {
    kind?: 'MF' | 'MM' | 'FF' | 'other' | undefined
    partner?: string | User
}
export interface WhoFamily {
    adults?: number
    kids?: number
    people: ( string | User )[]
}

export interface Pet {
    type: 'cat' | 'dog' | 'fish' | 'bird' | 'other'
    count: number
}

export interface Contact {
    type: 'email' | 'phone' | 'telegram' | 'instagram' | 'other'
    contact: string
    hidden: boolean
}

export interface QuestionnaireBasicType {
    who: 'Friends' | 'Couple' | 'Family' | 'Alone' | undefined
    whoContains?: WhoFriends | WhoFamily | WhoCouple 
    havePets?: boolean
    pets?: Pet[]
    smoker?: boolean
    smokingWhat?: string[]
    languages?: string[]
    about?: string
    contacts: Contact[] | undefined
    apartment?: boolean
}