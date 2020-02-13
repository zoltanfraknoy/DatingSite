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
  horoscope?: string;
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

}

export interface UserLogin {
  email: string;
  password: string;
}

export interface Message {
  id: number;
  author: string;
  partner: string;
  text: string;
  creationDate: Date;
  /*conversation: Conversation;*/
}

export interface Filter {
  minAge?: number,
  maxAge?: number,
  lookingFor?: string,
  pageNumber?: number
}
