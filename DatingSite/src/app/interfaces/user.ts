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
  birthDate?: Date;
  aboutMe?: string;
  movies?: boolean;
  sports?: boolean;
  music?: boolean;
  books?: boolean;
  culture?: boolean;
  travel?: boolean;
  technology?: boolean;
  politics?: boolean;


}

export interface UserLogin {
  email: string;
  password: string;
}

export interface Message{
  id: number;
  author: string;
  partner: string;
  text: string;
  creationDate: Date;
  /*conversation: Conversation;*/
}

