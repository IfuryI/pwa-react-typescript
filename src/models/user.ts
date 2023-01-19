export type Gender = 'M' | 'F';

export type PersonalInfo = {
  firstName: string;
  lastName: string;
  gender: Gender;
  birthday: Date;
}

export type User = PersonalInfo & {
    phone: string;
};