export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  age?: number;
  aboutMe?: string;
  city?: string;
  gender?: string;
  bodyShape?: string;
  eyeColor?: string;
  hairColor?: string;
  horoscopeEnum?: string;
  smoking?: boolean;
  interest?: string;
  birthYear?: number;
  birthDate: string;
  likesMovies?: boolean;
  likesSports?: boolean;
  likesMusic?: boolean;
  likesBooks?: boolean;
  likesCulture?: boolean;
  likesTravel?: boolean;
  likesTechnology?: boolean;
  likesPolitics?: boolean;
  minAge?: number;
  maxAge?: number;
  imgUrl?: string;

}

export interface UserLogin {
  email: string;
  password: string;
}

export interface FirstStep {
  picture: string; //???????
  gender: string;
  interestedGender: string;
  aboutMe: string;
  interestedAgeFrom: string;
  interestedAgeUntil: string;
}


export interface Filter {
  minAge?: number,
  maxAge?: number,
  interest?: Gender,
  numberPage?: number
}

export enum Gender {
  MAN = 'Man',
  WOMAN = 'Woman'
}
