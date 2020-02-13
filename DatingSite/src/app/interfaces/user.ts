export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  gender?: string;
  city?: string;
  height?: number;
  bodyShape?: string;
  eyeColor?: string;
  hairColor?: string;
  horoscope?: string;
  isSmoking?: boolean;
  interestedIn?: string;
  birthYear?: number;
  birthDate?: string; // date
  aboutMe?: string;
  movies?: boolean;
  sports?: boolean;
  music?: boolean;
  books?: boolean;
  culture?: boolean;
  travel?: boolean;
  technology?: boolean;
  politics?: boolean;
  lookingForAgeMin?: number;
  lookingForAgeMax?: number;


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

