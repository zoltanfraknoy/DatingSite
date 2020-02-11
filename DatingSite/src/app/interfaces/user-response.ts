import {User, Message} from './user';

export interface UserResponse {
  success: boolean;
  users: User[];
  messages: Message[];
  
  
}

